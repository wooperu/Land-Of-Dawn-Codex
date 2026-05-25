// each difficulty sets lord HP range, where the retri line sits, and how fast HP drains
const DIFF_CONFIG = {
  easy: {
    minHp: 15000, maxHp: 25000,
    minDmg: 0.25, maxDmg: 0.30,  // retri line = 25-30% of HP
    drainMult: 0.8,               // drains a bit slower
    label: 'EASY'
  },
  medium: {
    minHp: 15000, maxHp: 25000,
    minDmg: 0.15, maxDmg: 0.20,  // retri line = 15-20% of HP
    drainMult: 1.2,
    label: 'MEDIUM'
  },
  hard: {
    minHp: 8000, maxHp: 15000,
    minDmg: 0.10, maxDmg: 0.15,  // retri line = 10-15% of HP
    drainMult: 1.4,               // drains faster
    label: 'HARD'
  }
};

const RETRI_CD = 15; // cooldown in seconds after pressing retri too early

// grades are checked in order — first one whose maxMs fits the reaction time wins
const GRADES = [
  { name: 'PERFECT', color: '#4bdb6a', maxMs: 200,      pts: 150 },
  { name: 'GREAT',   color: '#4fc3f7', maxMs: 500,      pts: 100 },
  { name: 'GOOD',    color: '#c8b8f0', maxMs: 1000,     pts: 60  },
  { name: 'LATE',    color: '#f5a623', maxMs: Infinity,  pts: 20  },
];

// returns the grade matching how many milliseconds passed after the retri line crossed
function getGrade(ms) {
  for (const g of GRADES) if (ms <= g.maxMs) return g;
  return GRADES[GRADES.length - 1];
}

// ── GAME STATE ─────────────────────────────────────────
let mode = 'solo';  // 'solo' or 'multi'
let diff = 'easy';  // 'easy', 'medium', or 'hard'

let LORD_MAX = 15000;   // total lord HP (randomized each round)
let RETRI_DMG = 0;      // HP value where the retri line sits
let RETRI_LINE_PCT = 0; // retri line as a fraction of LORD_MAX (for positioning)
let lordHp = LORD_MAX;  // current lord HP

let running = false;      // true while the HP bar is draining
let retriReady = true;    // whether the retribution button can be pressed
let retriCdLeft = 0;      // seconds remaining on the early-press cooldown
let animId = null;        // requestAnimationFrame handle
let lastTs = null;        // timestamp of last animation frame
let drainFn = null;       // function(t) → drain rate at time t
let drainT = 0;           // total seconds elapsed this round

let streak = 0, bestStreak = 0, score = 0; // displayed stats

let roundOver = false;       // true once the round has been resolved
let lineTriggered = false;   // becomes true when HP crosses the retri line
let lineCrossTime = null;    // performance.now() value when line was crossed

// 2-player round data (reset each match)
let multi = {
  phase: 'p1',
  p1Ms: null, p1Grade: null,
  p2Ms: null, p2Grade: null,
  seedPhases: null,   // shared drain pattern so both players face the same
  seedLordMax: null,  // shared LORD_MAX
  seedRetriDmg: null  // shared RETRI_DMG
};


// all elements grabbed once on load so we never call getElementById repeatedly
let menuOverlay, gameContent, resultScreen;
let turnBanner;
let hpFill, hpPct, hpRaw, retriLine, gradePop, diffTag;
let statStreakCur, statStreak, statScore;
let statusMsg;
let startBtn, retriBtn, cdLabel;
let winnerLine, resultCards;

// wait for the page to finish building before grabbing any elements
document.addEventListener('DOMContentLoaded', () => {
  menuOverlay   = document.getElementById('modeOverlay');
  gameContent   = document.getElementById('gameContent');
  resultScreen  = document.getElementById('resultScreen');

  turnBanner    = document.getElementById('turnBanner');

  hpFill        = document.getElementById('hpFill');
  hpPct         = document.getElementById('hpPct');
  hpRaw         = document.getElementById('hpRaw');
  retriLine     = document.getElementById('retriLine');
  gradePop      = document.getElementById('gradePop');
  diffTag       = document.getElementById('diffTag');

  statStreakCur = document.getElementById('statStreakCur');
  statStreak    = document.getElementById('statStreak');
  statScore     = document.getElementById('statScore');

  statusMsg     = document.getElementById('statusMsg');

  startBtn      = document.getElementById('startBtn');
  retriBtn      = document.getElementById('retriBtn');
  cdLabel       = document.getElementById('cdLabel');

  winnerLine    = document.getElementById('winnerLine');
  resultCards   = document.getElementById('resultCards');

  // Wire up difficulty buttons
  document.querySelectorAll('.btnDiff').forEach(b => {
    b.addEventListener('click', () => selectDiff(b.dataset.diff));
  });

  // Wire up mode buttons
  document.querySelectorAll('.btnGameMode').forEach(b => {
    b.addEventListener('click', () => selectMode(b.dataset.mode));
  });

  // Wire up start game button
  document.getElementById('btnStartGame').addEventListener('click', startGame);

  // Wire up switch-mode button
  document.getElementById('btnSwitchMode').addEventListener('click', goMenu);
});

// saves chosen difficulty and highlights its button, clears the rest
function selectDiff(d) {
  diff = d;
  document.querySelectorAll('.btnDiff').forEach(b => b.classList.toggle('active', b.dataset.diff === d));
}

// saves chosen mode and highlights its button, clears the rest
function selectMode(m) {
  mode = m;
  document.querySelectorAll('.btnGameMode').forEach(b => b.classList.toggle('active', b.dataset.mode === m));
}

// hides the menu and shows the game; resets score and sets up based on solo or 2-player
function startGame() {
  streak = 0; bestStreak = 0; score = 0;
  menuOverlay.style.display = 'none';
  gameContent.classList.remove('hide');

  diffTag.textContent = DIFF_CONFIG[diff].label;

  if (mode === 'solo') {
    turnBanner.classList.add('hide');
    retriBtn.className = 'btnRetri';
    updateStats();
    resetBar();
    setStatus('Press Start to begin', 'info');
  } else {
    multi = { phase: 'p1', p1Ms: null, p1Grade: null, p2Ms: null, p2Grade: null, seedPhases: null, seedLordMax: null, seedRetriDmg: null };
    setTurnBanner('p1');
    updateStats();
    resetBar();
    setStatus('Player 1 — press Start', 'info');
  }
}

// stops any running round, hides the game, and brings the menu back
function goMenu() {
  running = false;
  cancelAnimationFrame(animId);
  menuOverlay.style.display = 'flex';
  gameContent.classList.add('hide');
  resultScreen.classList.remove('active');
}

// returns a random whole number between min and max
function randBetween(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

// prepares a fresh round — picks lord HP and retri line, resets all flags and UI
// in 2-player mode, player 2 gets the exact same HP and line as player 1 for fairness
function resetBar() {
  const cfg = DIFF_CONFIG[diff];

  if (mode === 'multi' && multi.phase === 'p2' && multi.seedLordMax !== null) {
    LORD_MAX  = multi.seedLordMax;   // reuse player 1's values
    RETRI_DMG = multi.seedRetriDmg;
  } else {
    LORD_MAX  = randBetween(cfg.minHp, cfg.maxHp);
    const pct = cfg.minDmg + Math.random() * (cfg.maxDmg - cfg.minDmg);
    RETRI_DMG = Math.round(LORD_MAX * pct);
    if (mode === 'multi' && multi.phase === 'p1') {
      multi.seedLordMax  = LORD_MAX;  // save so player 2 can replay the same round
      multi.seedRetriDmg = RETRI_DMG;
    }
  }

  RETRI_LINE_PCT = RETRI_DMG / LORD_MAX;
  lordHp = LORD_MAX;

  roundOver      = false;
  lineTriggered  = false;
  lineCrossTime  = null;
  retriReady     = true;
  retriCdLeft    = 0;

  retriBtn.disabled    = true;
  cdLabel.textContent  = 'READY';
  gradePop.textContent = '';
  gradePop.className   = 'gradePop';
  startBtn.disabled    = false;

  updateBar();
}

// the HP bar drains in phases — each phase has a duration and a speed
// phases loop continuously, creating an unpredictable pattern the player must read

// generates a random list of drain phases scaled to the current difficulty
function pickPhases() {
  const m = DIFF_CONFIG[diff].drainMult;
  return [
    { dur: 0.15 + Math.random() * 0.20, rate: (1200 + Math.random() * 800)  * m },
    { dur: 0.10 + Math.random() * 0.15, rate: (5000 + Math.random() * 3000) * m },
    { dur: 0.15 + Math.random() * 0.20, rate: (700  + Math.random() * 500)  * m },
    { dur: 0.08 + Math.random() * 0.12, rate: (7000 + Math.random() * 4000) * m },
    { dur: 0.15 + Math.random() * 0.20, rate: (1000 + Math.random() * 600)  * m },
  ];
}

// turns the phases list into a single function — given elapsed time t, returns current drain rate
// uses modulo so the phases loop back to the start when they finish
function buildDrainFn(phases) {
  const total = phases.reduce((sum, p) => sum + p.dur, 0);
  return t => {
    let remaining = t % total;
    let i = 0;
    while (i < phases.length - 1 && remaining > phases[i].dur) {
      remaining -= phases[i].dur;
      i++;
    }
    return phases[i].rate;
  };
}

// starts the round — picks a drain pattern and kicks off the animation loop
// in 2-player mode, player 2 replays the exact same drain pattern as player 1
function beginRound() {
  if (running) return;
  startBtn.disabled = true;
  running = true;
  roundOver = false;
  lineTriggered = false;
  lineCrossTime = null;
  lordHp = LORD_MAX;
  drainT = 0;

  const phases = (mode === 'multi' && multi.phase === 'p2' && multi.seedPhases)
    ? multi.seedPhases
    : pickPhases();
  if (mode === 'multi' && multi.phase === 'p1') multi.seedPhases = phases;

  drainFn = buildDrainFn(phases);
  lastTs  = null;

  retriBtn.disabled    = false;
  cdLabel.textContent  = 'READY';
  gradePop.textContent = '';
  gradePop.className   = 'gradePop';

  updateBar();
  setStatus('Lord is under attack!', '');
  animId = requestAnimationFrame(tick);
}

// runs every frame (~60fps) — drains lord HP, ticks down cooldown, detects line cross and death
function tick(ts) {
  if (!running) return;

  if (lastTs === null) lastTs = ts;
  const dt = (ts - lastTs) / 1000; // seconds since last frame
  lastTs = ts;
  drainT += dt;
  lordHp -= drainFn(drainT) * dt;

  // count down the early-press cooldown and re-enable button when it expires
  if (retriCdLeft > 0) {
    retriCdLeft -= dt;
    if (retriCdLeft <= 0) {
      retriCdLeft = 0;
      retriReady = true;
      retriBtn.disabled   = false;
      cdLabel.textContent = 'READY';
    } else {
      cdLabel.textContent = Math.ceil(retriCdLeft) + 's';
    }
  }

  // note the exact moment HP first drops below the retri line — reaction timing starts here
  if (!lineTriggered && lordHp <= RETRI_DMG) {
    lineTriggered = true;
    lineCrossTime = performance.now();
  }

  // lord reached 0 HP before player pressed retri — round lost
  if (lordHp <= 0) {
    lordHp = 0;
    updateBar();
    if (!roundOver) { roundOver = true; resolveRound('died'); }
    return;
  }

  updateBar();
  animId = requestAnimationFrame(tick);
}

// redraws the HP bar width, color, text labels, and retri line position
// bar color shifts blue → orange → red as HP gets low
function updateBar() {
  const pct = Math.max(0, lordHp / LORD_MAX);

  hpFill.style.width      = (pct * 100) + '%';
  hpFill.style.background = pct > 0.5 ? '#3a7bd5' : pct > 0.25 ? '#b58030' : '#c0392b';
  hpPct.textContent       = Math.round(pct * 100) + '%';
  hpRaw.textContent       = Math.round(lordHp).toLocaleString() + ' / ' + LORD_MAX.toLocaleString();
  retriLine.style.left    = (RETRI_LINE_PCT * 100) + '%';
}

// handles the retri button press
// too early = 15s cooldown penalty; in the zone = record reaction time and resolve the round
function fireRetri() {
  if (!running || !retriReady || roundOver) return;

  if (!lineTriggered) {
    // pressed before HP reached the retri line — apply cooldown
    retriReady          = false;
    retriCdLeft         = RETRI_CD;
    retriBtn.disabled   = true;
    cdLabel.textContent = RETRI_CD + 's';
    setStatus('Too early! Cooldown: ' + RETRI_CD + 's', 'warn');
    return;
  }

  roundOver = true;
  const reactionMs = performance.now() - lineCrossTime;
  resolveRound('hit', reactionMs);
}

// called when the round ends (hit or died) — scores the result and queues the next round
// solo: resets after 1.6s; 2-player: switches to player 2, or shows the result screen
function resolveRound(type, reactionMs) {
  running = false;
  cancelAnimationFrame(animId);
  retriBtn.disabled = true;

  const grade = (type === 'hit')
    ? getGrade(reactionMs)
    : { name: 'MISS', color: '#e24b4a', pts: -30 };

  const hitSuccess = (type === 'hit');
  showGradePop(grade);

  if (mode === 'solo') {
    if (hitSuccess) {
      score += grade.pts;
      streak++;
      if (streak > bestStreak) bestStreak = streak;
      const msLabel = Math.round(reactionMs) + 'ms';
      setStatus(grade.name + '  ' + msLabel + '  +' + grade.pts + ' pts', grade.name === 'PERFECT' ? 'ok' : 'info');
    } else {
      score  = Math.max(0, score + grade.pts);
      streak = 0;
      setStatus(type === 'died' ? 'Lord died — too slow!' : 'Missed! No steal.', 'bad');
    }
    updateStats();
    setTimeout(() => {
      resetBar();
      setStatus('Press Start for next round', 'info');
    }, 1600);

  } else {
    if (multi.phase === 'p1') {
      multi.p1Ms    = hitSuccess ? Math.round(reactionMs) : null;
      multi.p1Grade = grade;
      multi.phase   = 'p2';
      setTimeout(() => {
        setTurnBanner('p2');
        resetBar();
        setStatus('Player 2 — press Start', 'info');
      }, 1500);
    } else {
      multi.p2Ms    = hitSuccess ? Math.round(reactionMs) : null;
      multi.p2Grade = grade;
      showMultiResult();
    }
  }
}

// flashes the grade name on screen in its color, then fades out after 1.3s
function showGradePop(grade) {
  gradePop.textContent  = grade.name;
  gradePop.style.color  = grade.color;
  gradePop.className    = 'gradePop show';
  setTimeout(() => { gradePop.className = 'gradePop'; }, 1300);
}

// pushes current streak, best streak, and score into the stats display
function updateStats() {
  statStreakCur.textContent = streak;
  statStreak.textContent    = bestStreak;
  statScore.textContent     = score;
}

// updates the status message text and color (ok = green, bad = red, warn = orange, info = cyan)
function setStatus(msg, cls) {
  statusMsg.textContent = msg;
  statusMsg.className   = 'statusMsg' + (cls ? ' ' + cls : '');
}

// updates the turn banner text, retri button color, and start button label for the current player
function setTurnBanner(who) {
  turnBanner.classList.remove('hide', 'p1', 'p2');
  turnBanner.classList.add(who);
  turnBanner.textContent  = (who === 'p1' ? 'PLAYER 1' : 'PLAYER 2') + ' — YOUR TURN';
  retriBtn.className      = 'btnRetri ' + (who === 'p1' ? 'p1c' : 'p2c');
  startBtn.textContent    = (who === 'p1' ? 'P1' : 'P2') + ' Start';
}

// compares both players' reaction times and displays who won, by how much, and each grade
// faster reaction time wins; a hit always beats a miss; both miss = both lose
function showMultiResult() {
  gameContent.classList.add('hide');
  resultScreen.classList.add('active');

  const p1 = multi.p1Grade, p2 = multi.p2Grade;
  const p1ms = multi.p1Ms,  p2ms = multi.p2Ms;

  let winner, winnerCol;
  if (p1ms !== null && p2ms !== null) {
    if      (p1ms < p2ms) { winner = 'PLAYER 1 WINS'; winnerCol = '#4fc3f7'; }
    else if (p2ms < p1ms) { winner = 'PLAYER 2 WINS'; winnerCol = '#ff8888'; }
    else                  { winner = 'TIE';            winnerCol = '#f5a623'; }
  } else if (p1ms !== null) { winner = 'PLAYER 1 WINS'; winnerCol = '#4fc3f7'; }
  else if   (p2ms !== null) { winner = 'PLAYER 2 WINS'; winnerCol = '#ff8888'; }
  else                      { winner = 'BOTH MISSED';   winnerCol = '#e24b4a'; }

  const p1faster = p1ms !== null && (p2ms === null || p1ms < p2ms);
  const p2faster = p2ms !== null && (p1ms === null || p2ms < p1ms);

  // builds one player row for the result card — shows name, reaction time, and grade badge
  const makeRow = (label, ms, grade, col, isFaster) => `
    <div class="resultRow ${isFaster ? 'resultWinner' : ''}">
      <div style="font-family:'Rajdhani',sans-serif;font-size:14px;font-weight:700;letter-spacing:.08em;color:${col}">
        ${isFaster && ms !== null ? '>> ' : ''}${label}
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        ${ms !== null
          ? `<div style="font-size:18px;font-weight:700;font-family:'Orbitron',sans-serif;color:${grade.color}">
               ${ms}<span style="font-size:10px;opacity:.5;margin-left:2px">ms</span>
             </div>`
          : `<div style="font-family:'Orbitron',sans-serif;font-size:9px;letter-spacing:.1em;color:var(--muted)">NO HIT</div>`
        }
        <div class="resultGrade" style="background:${grade.color}1a;color:${grade.color};border:1px solid ${grade.color}44">
          ${grade.name}
        </div>
      </div>
    </div>`;

  resultCards.innerHTML =
    makeRow('PLAYER 1', p1ms, p1, '#4fc3f7', p1faster) +
    '<div style="border-top:1px solid var(--border);margin:4px 0"></div>' +
    makeRow('PLAYER 2', p2ms, p2, '#ff9090', p2faster);

  winnerLine.style.color = winnerCol;
  winnerLine.innerHTML   = `<span>${winner}</span>`;

  if (p1ms !== null && p2ms !== null) {
    const diff2 = Math.abs(p1ms - p2ms);
    winnerLine.innerHTML += `
      <div style="font-family:'Rajdhani',sans-serif;font-size:12px;font-weight:600;color:var(--muted);letter-spacing:.06em;margin-top:4px">
        by ${diff2}ms
      </div>`;
  }
}

// clears all 2-player round data and restarts from player 1's turn
function nextMultiRound() {
  multi = { phase: 'p1', p1Ms: null, p1Grade: null, p2Ms: null, p2Grade: null, seedPhases: null, seedLordMax: null, seedRetriDmg: null };
  resultScreen.classList.remove('active');
  gameContent.classList.remove('hide');
  setTurnBanner('p1');
  resetBar();
  setStatus('Player 1 — press Start', 'info');
}
