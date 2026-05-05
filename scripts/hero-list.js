const heroes = 
[
    { "name": "Aamon", "role": "Assassin" },
    { "name": "Akai", "role": "Tank" },
    { "name": "Aldous", "role": "Fighter" },
    { "name": "Alice", "role": "Tank/Mage" },
    { "name": "Alpha", "role": "Fighter" },
    { "name": "Alucard", "role": "Fighter/Assassin" },
    { "name": "Angela", "role": "Support" },
    { "name": "Argus", "role": "Fighter" },
    { "name": "Arlott", "role": "Fighter/Assassin" },
    { "name": "Atlas", "role": "Tank" },
    { "name": "Aulus", "role": "Fighter" },
    { "name": "Aurora", "role": "Mage" },
    { "name": "Badang", "role": "Fighter" },
    { "name": "Balmond", "role": "Fighter" },
    { "name": "Bane", "role": "Fighter/Mage" },
    { "name": "Barats", "role": "Tank/Fighter" },
    { "name": "Baxia", "role": "Tank" },
    { "name": "Beatrix", "role": "Marksman" },
    { "name": "Belerick", "role": "Tank" },
    { "name": "Benedetta", "role": "Assassin/Fighter" },
    { "name": "Brody", "role": "Marksman" },
    { "name": "Bruno", "role": "Marksman" },
    { "name": "Carmilla", "role": "Support/Tank" },
    { "name": "Cecilion", "role": "Mage" },
    { "name": "Chang e", "role": "Mage" },
    { "name": "Chip", "role": "Support/Tank" },
    { "name": "Chou", "role": "Fighter" },
    { "name": "Cici", "role": "Fighter" },
    { "name": "Claude", "role": "Marksman" },
    { "name": "Clint", "role": "Marksman" },
    { "name": "Cyclops", "role": "Mage" },
    { "name": "Diggie", "role": "Support" },
    { "name": "Dyrroth", "role": "Fighter" },
    { "name": "Edith", "role": "Tank/Marksman" },
    { "name": "Esmeralda", "role": "Mage/Tank" },
    { "name": "Estes", "role": "Support" },
    { "name": "Eudora", "role": "Mage" },
    { "name": "Fanny", "role": "Assassin" },
    { "name": "Faramis", "role": "Support/Mage" },
    { "name": "Floryn", "role": "Support" },
    { "name": "Franco", "role": "Tank" },
    { "name": "Fredrinn", "role": "Tank/Fighter" },
    { "name": "Freya", "role": "Fighter" },
    { "name": "Gatotkaca", "role": "Tank/Fighter" },
    { "name": "Gloo", "role": "Tank" },
    { "name": "Gord", "role": "Mage" },
    { "name": "Granger", "role": "Marksman" },
    { "name": "Grock", "role": "Tank/Fighter" },
    { "name": "Guinevere", "role": "Fighter/Mage" },
    { "name": "Gusion", "role": "Assassin/Mage" },
    { "name": "Hanabi", "role": "Marksman" },
    { "name": "Hanzo", "role": "Assassin" },
    { "name": "Harith", "role": "Mage" },
    { "name": "Harley", "role": "Mage/Assassin" },
    { "name": "Hayabusa", "role": "Assassin" },
    { "name": "Helcurt", "role": "Assassin" },
    { "name": "Hilda", "role": "Fighter/Tank" },
    { "name": "Hylos", "role": "Tank" },
    { "name": "Irithel", "role": "Marksman" },
    { "name": "Ixia", "role": "Marksman" },
    { "name": "Jawhead", "role": "Fighter" },
    { "name": "Johnson", "role": "Tank/Support" },
    { "name": "Joy", "role": "Assassin" },
    { "name": "Julian", "role": "Fighter/Mage/Assassin" },
    { "name": "Kadita", "role": "Mage/Assassin" },
    { "name": "Kagura", "role": "Mage" },
    { "name": "Kaja", "role": "Fighter/Support" },
    { "name": "Kalea", "role": "Support" },
    { "name": "Karina", "role": "Assassin" },
    { "name": "Karrie", "role": "Marksman" },
    { "name": "Khaleed", "role": "Fighter" },
    { "name": "Khufra", "role": "Tank" },
    { "name": "Kimmy", "role": "Marksman/Mage" },
    { "name": "Lancelot", "role": "Assassin" },
    { "name": "Lapu-Lapu", "role": "Fighter" },
    { "name": "Layla", "role": "Marksman" },
    { "name": "Leomord", "role": "Fighter" },
    { "name": "Lesley", "role": "Marksman/Assassin" },
    { "name": "Ling", "role": "Assassin" },
    { "name": "Lolita", "role": "Support/Tank" },
    { "name": "Lukas", "role": "Fighter" },
    { "name": "Lunox", "role": "Mage" },
    { "name": "Luo Yi", "role": "Mage" },
    { "name": "Lylia", "role": "Mage" },
    { "name": "Marcel", "role": "Support" },
    { "name": "Martis", "role": "Fighter" },
    { "name": "Masha", "role": "Fighter/Tank" },
    { "name": "Mathilda", "role": "Support/Assassin" },
    { "name": "Melissa", "role": "Marksman" },
    { "name": "Minotaur", "role": "Tank/Support" },
    { "name": "Minsitthar", "role": "Fighter" },
    { "name": "Miya", "role": "Marksman" },
    { "name": "Moskov", "role": "Marksman" },
    { "name": "Nana", "role": "Mage/Support" },
    { "name": "Natalia", "role": "Assassin" },
    { "name": "Natan", "role": "Marksman" },
    { "name": "Nolan", "role": "Assassin" },
    { "name": "Novaria", "role": "Mage" },
    { "name": "Obsidia", "role": "Marksman" },
    { "name": "Odette", "role": "Mage" },
    { "name": "Paquito", "role": "Fighter" },
    { "name": "Pharsa", "role": "Mage" },
    { "name": "Phoveus", "role": "Fighter" },
    { "name": "Popol and Kupa", "role": "Marksman" },
    { "name": "Rafaela", "role": "Support" },
    { "name": "Roger", "role": "Fighter/Marksman" },
    { "name": "Ruby", "role": "Fighter/Tank" },
    { "name": "Saber", "role": "Assassin" },
    { "name": "Selena", "role": "Assassin/Mage" },
    { "name": "Silvanna", "role": "Fighter" },
    { "name": "Sora", "role": "Fighter/Assassin" },
    { "name": "Sun", "role": "Fighter" },
    { "name": "Suyou", "role": "Assassin/Fighter" },
    { "name": "Terizla", "role": "Fighter" },
    { "name": "Thamuz", "role": "Fighter" },
    { "name": "Tigreal", "role": "Tank" },
    { "name": "Uranus", "role": "Tank" },
    { "name": "Vale", "role": "Mage" },
    { "name": "Valentina", "role": "Mage" },
    { "name": "Valir", "role": "Mage" },
    { "name": "Vexana", "role": "Mage" },
    { "name": "Wanwan", "role": "Marksman" },
    { "name": "X.Borg", "role": "Fighter" },
    { "name": "Xavier", "role": "Mage" },
    { "name": "Yi Sun-shin", "role": "Assassin/Marksman" },
    { "name": "Yin", "role": "Fighter/Assassin" },
    { "name": "Yu Zhong", "role": "Fighter" },
    { "name": "Yve", "role": "Mage" },
    { "name": "Zetian", "role": "Mage" },
    { "name": "Zhask", "role": "Mage" },
    { "name": "Zhuxin", "role": "Mage" },
    { "name": "Zilong", "role": "Fighter/Assassin" }
];

const container = document.getElementById("container");

var role = "tank";

function setRole(role){
    this.role = role;
    render();

    document.querySelectorAll(".nav-links a").forEach(a => {
        a.classList.remove("active");
    });

    event.target.classList.add("active");
};

function render() {
    container.innerHTML = "";

    heroes.forEach(hero => {

    var heroRoles = hero.role.split("/").map(r => r.toLowerCase().trim());
    console.log(role)

    if(!heroRoles.includes(role)){
        return;
    }

    var card = document.createElement("button");

    card.classList.add("card")

    card.innerHTML = 
    `
     <img src="/images/heroes/${hero.name.toLowerCase()}.png" alt="${hero.name}">
     <p class="hero-name">${hero.name}</p>
    `
    container.append(card);
})};

window.setRole = setRole;
render();
