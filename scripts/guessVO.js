const volume = document.querySelector(".slider");

let vos = [];
let guesses = 0;
let streak = 0;
let highestStreak = 0;
let firstTime = true;

let answer = '';
let audio = null;

document.querySelector(".streak").textContent = streak;
document.querySelector(".highstreak").textContent = highestStreak;
document.querySelector(".guess").textContent = guesses;

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
    audio.volume = volume.value;
    audio.onended = () => {
        document.querySelector(".btnPlay").textContent = "▶ Play";
    };
}

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

        alert("Correct! It only took you " + guesses + " guesses!");

        guesses = 0;
        document.querySelector(".guess").textContent = guesses;

        input.value = '';
        loadQuestion();
    } else {

        streak = 0;
        document.querySelector(".streak").textContent = streak;

        if(guess.length > 0){
            alert(`${input.value} is Wrong! Try again.`);
            input.value = '';
            guesses++;
            document.querySelector(".guess").textContent = guesses;
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

    
    guesses = 0;
    document.querySelector(".guess").textContent = guesses;
    streak = 0;
    document.querySelector(".streak").textContent = streak;
    document.querySelector(".input").value = '';
    loadQuestion();
}

volume.addEventListener("input", () =>{
    audio.volume = volume.value;
});