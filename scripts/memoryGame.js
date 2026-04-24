const cardData = [
    { "image": "images/Items/Antique Cuirass.png", "name": "Antique Cuirass" },
    { "image": "images/Items/Athenas Shield.png", "name": "Athenas Shield" },
    { "image": "images/Items/Berserkers Fury.png", "name": "Berserkers Fury" },
    { "image": "images/items/Blade Armor.png", "name": "Blade Armor" },
    { "image": "images/Items/Blade of Despair.png", "name": "Blade of Despair" },
    { "image": "images/Items/Blade of the Heptaseas.png", "name": "Blade of the Heptaseas" },
    { "image": "images/Items/Blood Wings.png", "name": "Blood Wings" },
    { "image": "images/Items/Brute Force Breastplate.png", "name": "Brute Force Breastplate" },
    { "image": "images/Items/Chastise Pauldron.png", "name": "Chastise Pauldron" },
    { "image": "images/Items/Clock of Destiny.png", "name": "Clock of Destiny" },
    { "image": "images/Items/Concentrated Energy.png", "name": "Concentrated Energy" },
    { "image": "images/Items/Corrosion Scythe.png", "name": "Corrosion Scythe" },
    { "image": "images/Items/Cursed Helmet.png", "name": "Cursed Helmet" },
    { "image": "images/Items/Demon Hunter Sword.png", "name": "Demon Hunter Sword" },
    { "image": "images/Items/Demon Shoes.png", "name": "Demon Shoes" },
    { "image": "images/Items/Divine Glaive.png", "name": "Divine Glaive" },
    { "image": "images/Items/Dominance Ice.png", "name": "Dominance Ice" },
    { "image": "images/Items/Enchanted Talisman.png", "name": "Enchanted Talisman" },
    { "image": "images/Items/Endless Battle.png", "name": "Endless Battle" },
    { "image": "images/Items/Feather of Heaven.png", "name": "Feather of Heaven" },
    { "image": "images/Items/Flask of the Oasis.png", "name": "Flask of the Oasis" },
    { "image": "images/Items/Fleeting Time.png", "name": "Fleeting Time" },
    { "image": "images/Items/Genius Wand.png", "name": "Genius Wand" },
    { "image": "images/Items/Glowing Wand.png", "name": "Glowing Wand" },
    { "image": "images/Items/Golden Staff.png", "name": "Golden Staff" },
    { "image": "images/Items/Great Dragon Spear.png", "name": "Great Dragon Spear" },
    { "image": "images/Items/Guardian Helmet.png", "name": "Guardian Helmet" },
    { "image": "images/Items/Haas Claws.png", "name": "Haas Claws" },
    { "image": "images/Items/Holy Crystal.png", "name": "Holy Crystal" },
    { "image": "images/Items/Hunter Strike.png", "name": "Hunter Strike" },
    { "image": "images/Items/Ice Queen Wand.png", "name": "Ice Queen Wand" },
    { "image": "images/Items/Immortality.png", "name": "Immortality" },
    { "image": "images/Items/Lightning Truncheon.png", "name": "Lightning Truncheon" },
    { "image": "images/Items/Malefic Gun.png", "name": "Malefic Gun" },
    { "image": "images/Items/Malefic Roar.png", "name": "Malefic Roar" },
    { "image": "images/Items/Oracle.png", "name": "Oracle" },
    { "image": "images/Items/Queens Wings.png", "name": "Queens Wings" },
    { "image": "images/Items/Radiant Armor.png", "name": "Radiant Armor" },
    { "image": "images/Items/Rapid Boots.png", "name": "Rapid Boots" },
    { "image": "images/Items/Rose Gold Meteor.png", "name": "Rose Gold Meteor" },
    { "image": "images/Items/Sea Halberd.png", "name": "Sea Halberd" },
    { "image": "images/Items/Sky Piercer.png", "name": "Sky Piercer" },
    { "image": "images/Items/Starlium Scythe.png", "name": "Starlium Scythe" },
    { "image": "images/Items/Swift Boots.png", "name": "Swift Boots" },
    { "image": "images/Items/Thunder Belt.png", "name": "Thunder Belt" },
    { "image": "images/Items/Tough Boots.png", "name": "Tough Boots" },
    { "image": "images/Items/Twilight Armor.png", "name": "Twilight Armor" },
    { "image": "images/Items/War Axe.png", "name": "War Axe" },
    { "image": "images/Items/Warrior Boots.png", "name": "Warrior Boots" },
    { "image": "images/Items/Wind of Nature.png", "name": "Wind of Nature" },
    { "image": "images/Items/Windtalker.png", "name": "Windtalker" },
    { "image": "images/Items/Winter Crown.png", "name": "Winter Crown" },
    { "image": "images/Items/Wishing Lantern.png", "name": "Wishing Lantern" }
];

const gridContainer = document.querySelector('.gridContainer');
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let turns = 0;
let score = 0;
let pairs = 9;

let timerInterval = null;
let elapsed = 0;
let timeLimit = null;

const difficulty = {
    easy:   { cols: 6, rows: 3, pairs: 9  },
    medium: { cols: 8, rows: 3, pairs: 12 },
    hard:   { cols: 8, rows: 4, pairs: 16 }
};

let selectedDiff = 'easy';
let selectedMode = 'standard';

document.querySelector(".score").textContent = score;
document.querySelector(".turns").textContent = turns;

function loadGame() {
    const selected = pickRandom(cardData, pairs);
    cards = [...selected, ...selected];
    shuffleCards();
    generateCards();
    startTimer();
}

function pickRandom(data, pair) {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, pair);
}

function shuffleCards() {
    let currentIndex = cards.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
}

function generateCards() {
    for (let card of cards) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('dataName', card.name);
        cardElement.innerHTML = `
            <div class="front">
                <img class="front-image" src="${card.image}" alt="${card.name}">
            </div>
            <div class="back">
                <img class="back-image" src="${card.image}" alt="${card.name}">
            </div>
        `;
        gridContainer.appendChild(cardElement);
        cardElement.addEventListener('click', flipCard);
    }
}


function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
}

function startTimer() {
    clearInterval(timerInterval);
    elapsed = 0;

    if (selectedMode === 'trial') {
        document.querySelector(".timer").textContent = formatTime(timeLimit);
        timerInterval = setInterval(() => {
            elapsed++;
            const remaining = timeLimit - elapsed;
            document.querySelector(".timer").textContent = formatTime(remaining);
            if (remaining <= 0) {
                clearInterval(timerInterval);
                triggerTimeUp();
            }
        }, 1000);
    } else {
        document.querySelector(".timer").textContent = formatTime(0);
        timerInterval = setInterval(() => {
            elapsed++;
            document.querySelector(".timer").textContent = formatTime(elapsed);
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
}


function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    turns++;
    document.querySelector(".turns").textContent = turns;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.getAttribute('dataName') === secondCard.getAttribute('dataName');
    if (isMatch) {
        score++;
        document.querySelector(".score").textContent = score;
        disableCards();
        havetheyWon();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

function havetheyWon() {
    if (score === pairs) {
        stopTimer();
        setTimeout(() => {
            const timeDisplay = selectedMode === 'trial'
                ? formatTime(timeLimit - elapsed)
                : formatTime(elapsed);
            document.getElementById('winMsg').textContent =
                `Solved in ${turns} turns with ${timeDisplay} remaining!`.replace('remaining', selectedMode === 'trial' ? 'remaining' : 'elapsed');
            document.getElementById('winModal').classList.add('active');
        }, 600);
    }
}

function triggerTimeUp() {
    document.getElementById('timeUpMsg').textContent = `You matched ${score} of ${pairs} pairs.`;
    document.getElementById('timeUpModal').classList.add('active');
    lockBoard = true;
}


function restart() {
    stopTimer();
    elapsed = 0;
    resetBoard();
    score = 0;
    turns = 0;
    document.querySelector(".score").textContent = score;
    document.querySelector(".turns").textContent = turns;
    gridContainer.innerHTML = '';
    loadGame();
}


document.querySelector(".btnRestart").addEventListener("click", restart);

document.getElementById('btnPlayAgain').addEventListener('click', () => {
    document.getElementById('winModal').classList.remove('active');
    restart();
});

document.getElementById('btnTimeUpRetry').addEventListener('click', () => {
    document.getElementById('timeUpModal').classList.remove('active');
    lockBoard = false;
    restart();
});

document.querySelectorAll('.btnDiff').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.btnDiff').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedDiff = btn.dataset.diff;
    });
});

document.querySelectorAll('.btnGameMode').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.btnGameMode').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedMode = btn.dataset.mode;
    });
});

document.getElementById('btnStartGame').addEventListener('click', () => {
    const config = difficulty[selectedDiff];
    pairs = config.pairs;
    timeLimit = selectedMode === 'trial' ? 300 : null;

    gridContainer.style.gridTemplateColumns = `repeat(${config.cols}, 140px)`;

    const overlay = document.getElementById('modeOverlay');
    overlay.classList.add('fade-out');
    document.getElementById('gameContent').classList.remove('game-hidden');
    loadGame();

    setTimeout(() => {
        overlay.style.display = 'none';
        overlay.classList.remove('fade-out');
    }, 450);
});

document.getElementById('btnSwitchMode').addEventListener('click', () => {
    stopTimer();
    gridContainer.innerHTML = '';
    document.getElementById('gameContent').classList.add('game-hidden');

    const overlay = document.getElementById('modeOverlay');
    overlay.style.display = 'flex';
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
    setTimeout(() => overlay.classList.remove('fade-in'), 350);
});