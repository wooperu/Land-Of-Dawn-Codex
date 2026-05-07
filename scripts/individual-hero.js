var param = new URLSearchParams(window.location.search);

var hero = param.get("name");

const container = document.getElementById("container");

function displayHero(){

    container.textContent = hero;

}

