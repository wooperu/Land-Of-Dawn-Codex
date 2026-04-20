const gridContainer = document.querySelector('.gridContainer');
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let turns = 0;
let score = 0;

document.querySelector(".score").textContent = score;
document.querySelector(".turns").textContent = turns;

loadGame();

function loadGame() {
    fetch("./data/cards.json")
        .then((res) => res.json())
        .then((data) => {
            const selected = pickRandom(data, 9);
            cards = [...selected, ...selected];
            shuffleCards();
            generateCards();
        });
}

function pickRandom(data, pair) {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, pair);
}

function shuffleCards(){
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
    for (let card of cards){
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('dataName', card.name);
        cardElement.innerHTML = `
            <div class="front">
                <img class = "front-image" src="${card.image}" alt="${card.name}">
            </div>
            <div class="back">
            </div>
        `;
        gridContainer.appendChild(cardElement);
        cardElement.addEventListener('click', flipCard);
    }
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
        if(score == 9){
            setTimeout(() => {
                alert("goodboy!");
            }, 1000);
        }
        document.querySelector(".score").textContent = score;
        disableCards();
    }
    else{
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
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

function restart() {
    resetBoard();
    score = 0;
    turns = 0;
    document.querySelector(".score").textContent = score;
    document.querySelector(".turns").textContent = turns;
    gridContainer.innerHTML = '';
    loadGame();
}