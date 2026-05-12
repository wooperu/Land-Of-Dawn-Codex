import data from './individual-hero-data.json';

var param = new URLSearchParams(window.location.search);

var queryHero = param.get("name");

const container = document.getElementById("container");

const lowerContainer = document.getElementById()

function displayTemplate(){

    var bgImg = document.createElement("img");

        bgImg.src = `images/landscape/${queryHero}.png`;

    var detailSection = document.createElement("div");

        detailSection.classList.add("details-section");

    var breadCrumbs = document.createElement("div");

        breadCrumbs.classList.add("bread-crumbs");

        breadCrumbs.innerHTML = `
            <img onclick="window.location.href='hero-list.html'" src="images/pages/hero-list/back-btn.png" alt="">
            <p>| Heroes</p>
            <p class="sign">&#8250;</p>
            <p>Hero List</p>
            <p class="sign">&#8250;</p>
            <p>${queryHero}</p>`

    var laneSection = document.createElement("div")

        laneSection.classList.add("lane-section")

    container.append(bgImg, detailSection, breadCrumbs, laneSection);

    var gameInfo = document.createElement("div");

        gameInfo.classList.add("game-info", "reveal");
    
    var story = document.createElement("div");

        story.classList.add("story", "reveal");
    
    var abilities = document.createElement("div");

        abilities.classList.add("abilities", "reveal");

    lowerContainer.append(gameInfo, story, abilities);

    data.forEach(hero => {

    });

};

