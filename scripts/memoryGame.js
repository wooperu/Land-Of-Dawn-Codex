/* an array of objects where each entry contains the file path to an item's image and its display name. this is the full pool of cards that pairs are drawn from when a game starts, with the actual selection depending on the chosen difficulty. */
const cardData = [
    { "image": "images/Items/Antique Cuirass.png", "name": "Antique Cuirass" },
    { "image": "images/Items/Athenas Shield.png", "name": "Athenas Shield" },
    { "image": "images/Items/Berserkers Fury.png", "name": "Berserkers Fury" },
    { "image": "images/Items/Blade Armor.png", "name": "Blade Armor" },
    { "image": "images/Items/Blade Of Despair.png", "name": "Blade of Despair" },
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

const gridContainer = document.querySelector('.gridContainer'); // the grid element that holds all the card elements, cleared and repopulated each time a new game starts
 
let cards = []; // stores the current set of card objects for the active game, built by duplicating the selected pairs and then shuffling them
let firstCard, secondCard; // stores the two cards the player has flipped in the current turn, compared against each other to check for a match
let lockBoard = false;  // prevents the player from flipping more cards while a mismatch animation is in progress or the game has ended
let turns = 0; // counts the total number of turns taken so far, incremented each time the player flips a second card
let score = 0; // counts the number of matched pairs found so far, compared against pairs to determine when the player has won
let pairs = 9; // the number of pairs in the current game, determined by the selected difficulty and used as the win condition
 
let timerInterval = null; // stores the ID of the active setInterval so it can be cleared when the game ends or restarts
let elapsed = 0; // tracks the number of seconds that have passed since the timer started, used both for the count-up display in Standard mode and for calculating remaining time in Trial mode
let timeLimit = null; // the time limit in seconds for Trial mode, set to 120 when a Trial game starts and null in Standard mode
 
// defines the grid layout and pair count for each difficulty level. cols and rows control the CSS grid template, and pairs determines how many unique cards are selected from cardData.
const difficulty = {
    easy:   { cols: 6, rows: 3, pairs: 9  },
    medium: { cols: 8, rows: 3, pairs: 12 },
    hard:   { cols: 8, rows: 4, pairs: 16 }
};
 
let selectedDiff = 'easy'; // stores the difficulty the player chose from the overlay, defaulting to easy
let selectedMode = 'standard'; // stores the game mode the player chose, either 'standard' (count-up timer) or 'trial' (countdown timer)
 
// initializes the score and turns display on page load so they show 0 before the first game starts
document.querySelector(".score").textContent = score;
document.querySelector(".turns").textContent = turns;
 
// sets up and starts a new game by picking random pairs, duplicating them to create a full card set, shuffling, generating the card elements, and starting the timer
function loadGame() {
    const selected = pickRandom(cardData, pairs);
    cards = [...selected, ...selected]; // duplicates the selected items to create one pair of each card
    shuffleCards();
    generateCards();
    startTimer();
}
 
// randomly selects the given number of unique items from the data array by shuffling a copy of it and taking a slice from the front, ensuring no duplicates in the selection
function pickRandom(data, pair) {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, pair);
}
 
// shuffles the cards array in place using the Fisher-Yates algorithm, which iterates backwards through the array and swaps each element with a randomly chosen element before it, producing an unbiased random order
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
 
// creates a card element for each item in the cards array and appends it to the grid. each card has a front face showing the item image and a blank back face, and a click listener attached so the player can flip it.
function generateCards() {
    for (let card of cards) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('dataName', card.name); // stores the item name as a data attribute so checkForMatch can compare the two flipped cards without needing to look up the card object
        cardElement.innerHTML = `
            <div class="front">
                <img class="front-image" src="${card.image}" alt="${card.name}">
            </div>
            <div class="back">
            </div>
        `;
        gridContainer.appendChild(cardElement);
        cardElement.addEventListener('click', flipCard);
    }
}
 
// converts a total number of seconds into a mm:ss string for display, padding the seconds with a leading zero if needed
function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
}
 
// starts the timer from zero, clearing any existing interval first to avoid multiple timers running at once. in Trial mode the display counts down from timeLimit and triggers triggerTimeUp when it reaches zero. in Standard mode it simply counts up from zero.
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
 
// stops the timer by clearing the active interval, called when the game is won, time runs out, or the player restarts
function stopTimer() {
    clearInterval(timerInterval);
}
 
// handles a card click by flipping the card and checking if this is the first or second card of the turn. the board is locked while a mismatch is animating and clicking the same card twice is ignored. when the second card is flipped, the turn counter increments and the board locks until checkForMatch resolves.
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
 
    this.classList.add('flipped');
 
    if (!firstCard) {
        firstCard = this; // stores the first card and waits for the player to click a second one
        return;
    }
 
    secondCard = this;
    turns++;
    document.querySelector(".turns").textContent = turns;
    lockBoard = true;
 
    checkForMatch();
}
 
// compares the dataName attributes of the two flipped cards to determine if they are a match. a match increments the score and disables the cards so they stay revealed, while a mismatch flips them back face-down after a short delay.
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
 
// permanently disables a matched pair by removing their click listeners so they can no longer be flipped, then adds the matched class for the visual highlight before resetting the board state for the next turn
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    resetBoard();
}
 
// flips two unmatched cards back face-down after a short delay so the player has time to see what they revealed before they are hidden again
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1000);
}
 
// clears the stored card references and unlocks the board after each turn so the player can flip two new cards
function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}
 
// checks if the player has matched all pairs after every successful match, and if so, stops the timer and shows the win modal. the displayed time is formatted differently depending on the mode: Trial mode shows time remaining while Standard mode shows time elapsed.
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
 
// ends the game when the countdown reaches zero in Trial mode. shows how many pairs the player managed to find and locks the board to prevent any further interaction.
function triggerTimeUp() {
    document.getElementById('timeUpMsg').textContent = `You matched ${score} of ${pairs} pairs.`;
    document.getElementById('timeUpModal').classList.add('active');
    lockBoard = true;
}
 
// resets all game state variables and clears the grid before starting a fresh game, used by the restart button and the play again buttons on the win and time-up modals
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
 
// attaches click listeners to the restart button and the play again / retry buttons on both end-of-game modals
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
 
// highlights the selected difficulty button and stores the choice so loadGame uses the correct pair count and grid layout when the next game starts
document.querySelectorAll('.btnDiff').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.btnDiff').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedDiff = btn.dataset.diff;
    });
});
 
// highlights the selected mode button and stores the choice so startTimer knows whether to count up or count down when the next game starts
document.querySelectorAll('.btnGameMode').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.btnGameMode').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedMode = btn.dataset.mode;
    });
});
 
// reads the selected difficulty and mode when the player confirms their settings, applies the grid column layout, fades out the overlay, and starts the game
document.getElementById('btnStartGame').addEventListener('click', () => {
    const config = difficulty[selectedDiff];
    pairs = config.pairs;
    timeLimit = selectedMode === 'trial' ? 120 : null; // Trial mode always uses a 120-second limit, Standard mode has no limit so timeLimit is left as null
 
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
 
// stops the timer and clears the grid before showing the mode overlay again so the player can change their difficulty or mode settings between games
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