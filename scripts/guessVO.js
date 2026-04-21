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

    audio.onended = () => {
        document.querySelector(".btnPlay").textContent = "▶ Play";
    };
}

function playVO() {
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

function submit(){
    const input = document.querySelector(".input");
    const guess = input.value.trim().toLowerCase();

    audio.pause();
    audio.currentTime = 0;
    document.querySelector(".btnPlay").textContent = "▶ Play";

     if (guess == answer.toLowerCase()) {
        streak++;
        document.querySelector(".streak").textContent = streak;
        if (streak > highestStreak) {
            highestStreak = streak;
            document.querySelector(".highstreak").textContent = highestStreak;
        }
        alert("Correct!");
        input.value = '';
        loadQuestion();
    } else {
        
        streak = 0;
        document.querySelector(".streak").textContent = streak;

        if(guess.length > 0){
            alert(`${input.value} is Wrong! Try again.`);
        }
        else{
            alert(`Please enter a guess!`);
        }

    }
}

function giveUp() {

    audio.pause();
    audio.currentTime = 0;
    document.querySelector(".btnPlay").textContent = "▶ Play";

    alert(`Too bad! The correct answer was: ${answer}`);
    streak = 0;
    document.querySelector(".streak").textContent = streak;

    loadQuestion();
}