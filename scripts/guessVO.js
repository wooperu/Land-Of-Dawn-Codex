// array of objects where each entry contains the file path to a hero's voice line audio and the hero's display name, used to load questions and validate answers
const vos = [
    {"audio": "audio/vo/aamon.ogg", "name": "Aamon"},
    {"audio": "audio/vo/akai.ogg", "name": "Akai"},
    {"audio": "audio/vo/aldous.ogg", "name": "Aldous"},
    {"audio": "audio/vo/alice.ogg", "name": "Alice"},
    {"audio": "audio/vo/alpha.ogg", "name": "Alpha"},
    {"audio": "audio/vo/alucard.ogg", "name": "Alucard"},
    {"audio": "audio/vo/angela.ogg", "name": "Angela"},
    {"audio": "audio/vo/argus.ogg", "name": "Argus"},
    {"audio": "audio/vo/arlot.ogg", "name": "Arlott"},
    {"audio": "audio/vo/atlas.ogg", "name": "Atlas"},
    {"audio": "audio/vo/aulus.ogg", "name": "Aulus"},
    {"audio": "audio/vo/aurora.ogg", "name": "Aurora"},
    {"audio": "audio/vo/badang.ogg", "name": "Badang"},
    {"audio": "audio/vo/balmond.ogg", "name": "Balmond"},
    {"audio": "audio/vo/bane.ogg", "name": "Bane"},
    {"audio": "audio/vo/barats.ogg", "name": "Barats"},
    {"audio": "audio/vo/baxia.ogg", "name": "Baxia"},
    {"audio": "audio/vo/beatrix.ogg", "name": "Beatrix"},
    {"audio": "audio/vo/belerick.ogg", "name": "Belerick"},
    {"audio": "audio/vo/benedetta.ogg", "name": "Benedetta"},
    {"audio": "audio/vo/brody.ogg", "name": "Brody"},
    {"audio": "audio/vo/bruno.ogg", "name": "Bruno"},
    {"audio": "audio/vo/carmilla.ogg", "name": "Carmilla"},
    {"audio": "audio/vo/cecilion.ogg", "name": "Cecilion"},
    {"audio": "audio/vo/change.ogg", "name": "Chang'e"},
    {"audio": "audio/vo/chip.ogg", "name": "Chip"},
    {"audio": "audio/vo/chou.ogg", "name": "Chou"},
    {"audio": "audio/vo/cici.ogg", "name": "Cici"},
    {"audio": "audio/vo/claude.ogg", "name": "Claude"},
    {"audio": "audio/vo/clint.ogg", "name": "Clint"},
    {"audio": "audio/vo/cyclops.ogg", "name": "Cyclops"},
    {"audio": "audio/vo/diggie.ogg", "name": "Diggie"},
    {"audio": "audio/vo/dyroth.ogg", "name": "Dyrroth"},
    {"audio": "audio/vo/edith.ogg", "name": "Edith"},
    {"audio": "audio/vo/esmeralda.ogg", "name": "Esmeralda"},
    {"audio": "audio/vo/estes.ogg", "name": "Estes"},
    {"audio": "audio/vo/eudora.ogg", "name": "Eudora"},
    {"audio": "audio/vo/fanny.ogg", "name": "Fanny"},
    {"audio": "audio/vo/faramis.ogg", "name": "Faramis"},
    {"audio": "audio/vo/floryn.ogg", "name": "Floryn"},
    {"audio": "audio/vo/franco.ogg", "name": "Franco"},
    {"audio": "audio/vo/fredrin.ogg", "name": "Fredrinn"},
    {"audio": "audio/vo/freya.ogg", "name": "Freya"},
    {"audio": "audio/vo/gatotkaca.ogg", "name": "Gatotkaca"},
    {"audio": "audio/vo/gloo.ogg", "name": "Gloo"},
    {"audio": "audio/vo/gord.ogg", "name": "Gord"},
    {"audio": "audio/vo/granger.ogg", "name": "Granger"},
    {"audio": "audio/vo/grock.ogg", "name": "Grock"},
    {"audio": "audio/vo/guinevere.ogg", "name": "Guinevere"},
    {"audio": "audio/vo/gusion.ogg", "name": "Gusion"},
    {"audio": "audio/vo/hanabi.ogg", "name": "Hanabi"},
    {"audio": "audio/vo/hanzo.ogg", "name": "Hanzo"},
    {"audio": "audio/vo/harith.ogg", "name": "Harith"},
    {"audio": "audio/vo/harley.ogg", "name": "Harley"},
    {"audio": "audio/vo/hayabusa.ogg", "name": "Hayabusa"},
    {"audio": "audio/vo/helcurt.ogg", "name": "Helcurt"},
    {"audio": "audio/vo/hilda.ogg", "name": "Hilda"},
    {"audio": "audio/vo/hylos.ogg", "name": "Hylos"},
    {"audio": "audio/vo/irithel.ogg", "name": "Irithel"},
    {"audio": "audio/vo/ixia.ogg", "name": "Ixia"},
    {"audio": "audio/vo/jawhead.ogg", "name": "Jawhead"},
    {"audio": "audio/vo/johnson.ogg", "name": "Johnson"},
    {"audio": "audio/vo/joy.ogg", "name": "Joy"},
    {"audio": "audio/vo/julian.ogg", "name": "Julian"},
    {"audio": "audio/vo/kadita.ogg", "name": "Kadita"},
    {"audio": "audio/vo/kagura.ogg", "name": "Kagura"},
    {"audio": "audio/vo/kaja.ogg", "name": "Kaja"},
    {"audio": "audio/vo/kalea.ogg", "name": "Kalea"},
    {"audio": "audio/vo/karina.ogg", "name": "Karina"},
    {"audio": "audio/vo/karrie.ogg", "name": "Karrie"},
    {"audio": "audio/vo/khaleed.ogg", "name": "Khaleed"},
    {"audio": "audio/vo/khufra.ogg", "name": "Khufra"},
    {"audio": "audio/vo/kimmy.ogg", "name": "Kimmy"},
    {"audio": "audio/vo/lancelot.ogg", "name": "Lancelot"},
    {"audio": "audio/vo/lapulapu.ogg", "name": "Lapu-Lapu"},
    {"audio": "audio/vo/layla.ogg", "name": "Layla"},
    {"audio": "audio/vo/leomord.ogg", "name": "Leomord"},
    {"audio": "audio/vo/lesley.ogg", "name": "Lesley"},
    {"audio": "audio/vo/ling.ogg", "name": "Ling"},
    {"audio": "audio/vo/lolita.ogg", "name": "Lolita"},
    {"audio": "audio/vo/lukas.ogg", "name": "Lukas"},
    {"audio": "audio/vo/lunox.ogg", "name": "Lunox"},
    {"audio": "audio/vo/luoyi.ogg", "name": "Luo Yi"},
    {"audio": "audio/vo/lylia.ogg", "name": "Lylia"},
    {"audio": "audio/vo/marcel.ogg", "name": "Marcel"},
    {"audio": "audio/vo/martis.ogg", "name": "Martis"},
    {"audio": "audio/vo/Masha.ogg", "name": "Masha"},
    {"audio": "audio/vo/mathilda.ogg", "name": "Mathilda"},
    {"audio": "audio/vo/melissa.ogg", "name": "Melissa"},
    {"audio": "audio/vo/minotaur.ogg", "name": "Minotaur"},
    {"audio": "audio/vo/minsitthar.ogg", "name": "Minsitthar"},
    {"audio": "audio/vo/miya.ogg", "name": "Miya"},
    {"audio": "audio/vo/moskov.ogg", "name": "Moskov"},
    {"audio": "audio/vo/nana.ogg", "name": "Nana"},
    {"audio": "audio/vo/natalia.ogg", "name": "Natalia"},
    {"audio": "audio/vo/natan.ogg", "name": "Natan"},
    {"audio": "audio/vo/nolan.ogg", "name": "Nolan"},
    {"audio": "audio/vo/novaria.ogg", "name": "Novaria"},
    {"audio": "audio/vo/obsidia.ogg", "name": "Obsidia"},
    {"audio": "audio/vo/odette.ogg", "name": "Odette"},
    {"audio": "audio/vo/paquito.ogg", "name": "Paquito"},
    {"audio": "audio/vo/pharsa.ogg", "name": "Pharsa"},
    {"audio": "audio/vo/phoveus.ogg", "name": "Phoveus"},
    {"audio": "audio/vo/popolandkupa.ogg", "name": "Popol and Kupa"},
    {"audio": "audio/vo/rafaela.ogg", "name": "Rafaela"},
    {"audio": "audio/vo/roger.ogg", "name": "Roger"},
    {"audio": "audio/vo/ruby.ogg", "name": "Ruby"},
    {"audio": "audio/vo/saber.ogg", "name": "Saber"},
    {"audio": "audio/vo/selena.ogg", "name": "Selena"},
    {"audio": "audio/vo/silvanna.ogg", "name": "Silvanna"},
    {"audio": "audio/vo/sora.ogg", "name": "Sora"},
    {"audio": "audio/vo/sun.ogg", "name": "Sun"},
    {"audio": "audio/vo/suyou.ogg", "name": "Suyou"},
    {"audio": "audio/vo/terizla.ogg", "name": "Terizla"},
    {"audio": "audio/vo/thamuz.ogg", "name": "Thamuz"},
    {"audio": "audio/vo/tigreal.ogg", "name": "Tigreal"},
    {"audio": "audio/vo/uranus.ogg", "name": "Uranus"},
    {"audio": "audio/vo/vale.ogg", "name": "Vale"},
    {"audio": "audio/vo/valentina.ogg", "name": "Valentina"},
    {"audio": "audio/vo/valir.ogg", "name": "Valir"},
    {"audio": "audio/vo/vexana.ogg", "name": "Vexana"},
    {"audio": "audio/vo/wanwan.ogg", "name": "Wanwan"},
    {"audio": "audio/vo/xborg.ogg", "name": "X.Borg"},
    {"audio": "audio/vo/xavier.ogg", "name": "Xavier"},
    {"audio": "audio/vo/yisunshin.ogg", "name": "Yi Sun-shin"},
    {"audio": "audio/vo/yin.ogg", "name": "Yin"},
    {"audio": "audio/vo/yuzhong.ogg", "name": "Yu Zhong"},
    {"audio": "audio/vo/yve.ogg", "name": "Yve"},
    {"audio": "audio/vo/zetian.ogg", "name": "Zetian"},
    {"audio": "audio/vo/zhask.ogg", "name": "Zhask"},
    {"audio": "audio/vo/zhuxin.ogg", "name": "Zhuxin"},
    {"audio": "audio/vo/zilong.ogg", "name": "Zilong"}
];

const volume = document.querySelector(".slider"); // the volume slider element, whose value is read directly whenever the audio plays or the slider changes
const maxGuess = 5; // the maximum number of wrong guesses allowed before the game ends in Classic mode

let guesses = 0; // tracks how many wrong guesses the player has made for the current hero
let streak = 0; // tracks how many heroes the player has correctly identified consecutively
let highestStreak = 0; // tracks the highest streak reached during the session, updated whenever streak surpasses it
let firstTime = true; // boolean that hides the volume slider until the player clicks Play for the first time, so it doesn't appear before any audio has been loaded
let gameMode = null; // stores the currently active game mode, either 'classic' (guess limit) or 'free' (unlimited guesses), set when the player selects a mode from the overlay
let answer = ''; // stores the correct hero name for the current question, compared against the player's input on submit
let audio = null; // stores the Audio object for the currently loaded voice line so it can be played, paused, and reset
let feedbackTimer = null; // stores the timeout ID for clearing feedback messages, so a new message can cancel the previous one before starting its own timer

// initializes the stat display elements on page load so they show 0 before the player starts playing
document.querySelector(".streak").textContent = streak;
document.querySelector(".highstreak").textContent = highestStreak;
document.querySelector(".guess").textContent = guesses;

// hides the mode overlay with a fade-out animation and starts the game in the selected mode, resetting guesses and streak since a fresh mode selection always begins a new session
function selectMode(mode){
    gameMode = mode;
    const overlay = document.getElementById("modeOverlay");
    overlay.classList.add("fade-out");
    setTimeout(() => {
        overlay.style.display = "none";
        overlay.classList.remove("fade-out");
    }, 450);
    guesses = 0; streak = 0; 
    document.querySelector(".btnPlay").textContent = "▶ Play";
    updateGuess();
    loadQuestion();
}

// attaches click listeners to the mode selection buttons, each calling selectMode with the corresponding mode string
document.getElementById("btnFreePlay").addEventListener("click", () => selectMode("free"));
document.getElementById("btnClassic").addEventListener("click", () => selectMode("classic"));

// pauses and resets the current audio before showing the mode overlay again with a fade-in animation, allowing the player to switch modes mid-session
document.getElementById("btnSwitchMode").addEventListener("click", () => {
    audio.pause(); audio.currentTime = 0;
    const overlay = document.getElementById("modeOverlay");
    overlay.style.display = "flex";
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
    setTimeout(() => overlay.classList.remove("fade-in"), 350);
});

// displays a feedback message in the feedback element with the given type (e.g. 'correct', 'wrong', 'info') and automatically clears it after 2.5 seconds unless persist is true. cancels any existing timer first so that rapid submissions don't stack multiple clear callbacks.
function showFeedback(message, type = 'info', persist = false) {
    const fb = document.getElementById('feedback');
    fb.textContent = message;
    fb.className = `feedback ${type}`;
    if (feedbackTimer) clearTimeout(feedbackTimer);
    if (!persist) {
        feedbackTimer = setTimeout(() => { fb.textContent = ''; fb.className = 'feedback'; }, 2500);
    }
}

// picks a random hero from the vos array, stores their name as the answer, and creates a new Audio object for their voice line. the volume is set immediately from the slider so it matches whatever the player has already set.
function loadQuestion() {
    const randomIndex = Math.floor(Math.random() * vos.length);
    answer = vos[randomIndex].name;
    audio = new Audio(vos[randomIndex].audio);
    audio.volume = volume.value;
    audio.onended = () => {
        document.querySelector(".btnPlay").textContent = "▶ Play"; // resets the button label when the audio finishes on its own so the player knows they can play it again
    };
}

// toggles playback of the current voice line. shows the volume slider on the very first play since the player needs to have started the game before it makes sense to display it. if the audio is already playing, it pauses and resets it instead so the player can replay from the beginning.
function playVO() {

    if(firstTime){
        volume.style.display = "block";
        firstTime = false;
    }

    if(audio.paused){
        audio.play();
        document.querySelector(".btnPlay").textContent = "⏹ Stop";
    }
    else{
        audio.pause();
        audio.currentTime = 0;
        document.querySelector(".btnPlay").textContent = "▶ Play";
    }
}

// handles the player's guess submission. stops any playing audio first, then compares the input against the answer using heroName() to normalize both strings before comparing. a correct guess updates the streak and loads the next question, while a wrong guess increments the guess counter and triggers game over in Classic mode if the limit is reached.
function submit(){
    const input = document.querySelector(".input");
    const guess = input.value.trim().toLowerCase();

    audio.pause();
    audio.currentTime = 0;
    document.querySelector(".btnPlay").textContent = "▶ Play";

    if (heroName(input.value) === heroName(answer)) {
        streak++;
        document.querySelector(".streak").textContent = streak;

        // updates the highest streak display only when the current streak surpasses the previous best
        if (streak > highestStreak) {
            highestStreak = streak;
            document.querySelector(".highstreak").textContent = highestStreak;
        }
        
        // shows a special message if the player got it on the first try, otherwise shows how many guesses it took
        if(guesses == 0){
            showFeedback("Incredible! First try!", 'correct')
        }
        else{
            showFeedback("Correct! It only took you " + (guesses+1) + " guesses!", 'correct')
        }

        guesses = 0;
        updateGuess();

        input.value = '';
        loadQuestion();
    } else {

        streak = 0;
        document.querySelector(".streak").textContent = streak;

        if(guess.length > 0){
            showFeedback("Wrong! Try again.", 'wrong');
            input.value = '';
            guesses++;
            updateGuess();

            // ends the game in Classic mode once the player has used all of their allowed guesses
            if(gameMode == "classic" && guesses >= maxGuess){
                gameOver();
            }
        }
        else{
            showFeedback("Please enter a guess!", 'info'); // prevents submitting an empty input
        }
    }
}

// ends the game in Classic mode when the player runs out of guesses. disables all inputs and buttons to prevent further interaction, reveals the correct answer, and resets the streak since the player failed to identify the hero.
function gameOver(){
    audio.pause(); 
    audio.currentTime = 0;

    document.querySelector(".btnSubmit").disabled = true;
    document.querySelector(".btnGiveUp").disabled = true;
    document.querySelector(".input").disabled = true;

    const panel = document.getElementById('gameOverPanel');
    document.getElementById('gameOverMsg').textContent = `You ran out of guesses! It was: ${answer}`;
    panel.style.display = 'flex';

    streak = 0;
    document.querySelector(".streak").textContent = streak;
}

// skips the current hero without counting it as correct, revealing the answer in the feedback bar and immediately loading a new question. also resets the streak since the player gave up on that hero.
function giveUp() {
    audio.pause();
    audio.currentTime = 0;
    document.querySelector(".btnPlay").textContent = "▶ Play";
    
    guesses = 0;
    updateGuess();
    streak = 0;

    document.querySelector(".streak").textContent = streak;
    document.querySelector(".input").value = '';
    showFeedback(`The answer was: ${answer}`, 'info');
    loadQuestion();
}

// updates the guess counter display. in Classic mode it shows the current guesses out of the maximum allowed, in Free mode it just shows the raw number since there is no limit.
function updateGuess(){
    const g = document.querySelector(".guess");
    g.textContent = gameMode == 'classic' ? `${guesses} / ${maxGuess}` : guesses;
}

// normalizes a hero name string for comparison by converting it to lowercase, trimming whitespace, and stripping apostrophes, hyphens, dots, and spaces. this allows names like "Chang'e", "Lapu-Lapu", and "Yi Sun-shin" to match player input regardless of how punctuation and spacing are typed.
function heroName(str){
    return str
        .toLowerCase()
        .trim()
        .replace(/['\-\.]/g, '')
        .replace(/\s+/g, '')
}

// re-enables all inputs and loads a new question when the player clicks the retry button on the game over panel, allowing them to continue playing after a Classic mode loss
document.getElementById('btnRetry').addEventListener('click', () => {
    document.getElementById('gameOverPanel').style.display = 'none';
    document.querySelector(".btnSubmit").disabled = false;
    document.querySelector(".btnGiveUp").disabled = false;
    document.querySelector(".input").disabled = false;
    guesses = 0;
    updateGuess();
    loadQuestion();
});

// attaches click listeners to the main action buttons
document.querySelector(".btnPlay").addEventListener("click", playVO);
document.querySelector(".btnSubmit").addEventListener("click", submit);
document.querySelector(".btnGiveUp").addEventListener("click", giveUp);

// updates the volume of the currently loaded audio whenever the slider is moved, so the change takes effect immediately even if the audio is already playing
volume.addEventListener("input", () =>{
    audio.volume = volume.value;
});