const frameContainer = document.querySelector(".frameContainer");
let vos = [];
let streak = 0;
let highestStreak = 0;

let answer = '';
let audio = null;

document.querySelector(".streak").textContent = streak;
document.querySelector(".highstreak").textContent = highestStreak;

fetch("./data/vo.json")
    .then((res) => res.json())
    .then((data) => {
        vos = data;
        loadQuestion();
    });

function loadQuestion() {
    const randomIndex = Math.floor(Math.random() * vos.length);
    answer = vos[randomIndex].name;
    audio = new Audio(vos[randomIndex].audio);
}

function playVO() {
   audio.play();
}

function submit(){
    const input = document.querySelector(".input");
    const guess = input.value.trim().toLowerCase();

     if (guess == answer.toLowerCase()) {
        streak++;
        document.querySelector(".streak").textContent = streak;
        if (streak > highestStreak) {
            highestStreak = streak;
            document.querySelector(".highstreak").textContent = highestStreak;
        }
        alert("temporary correct notif because im stupid rn!");
    } else {
        streak = 0;
        document.querySelector(".streak").textContent = streak;
        alert(`u stupid! It was ${answer}.`);
    }

    input.value = '';
    loadQuestion();
}
