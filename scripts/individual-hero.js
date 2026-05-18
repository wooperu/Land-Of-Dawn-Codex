import {data} from './data.js';

console.log(data);

var param = new URLSearchParams(window.location.search);

var queryHero = param.get("name");

const container = document.getElementById("container");

const infoSection = document.getElementById("info-section");

function displayTemplate(){

    var heroObject = data.find(line => line.name.toLowerCase() === queryHero.toLowerCase());

    container.innerHTML = 
    `
        <img src="images/landscape/${heroObject.name.toLowerCase()}.png" alt="${heroObject.name.toLowerCase()}">

            <div class="bread-crumbs">
                <svg id="btn" xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="#d6a115" d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1 1 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1 1 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23a1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2" />
                </svg>
                <p id="hero">Heroes</p>
                <p class="sign">&#8250;</p>
                <p id="hero-list">Hero List</p>
                <p class="sign">&#8250;</p>
                <p>${heroObject.name}</p>
            </div>

            <div class="details-section">

                <div>
                    <p class="name reveal">${heroObject.name.toUpperCase()}</p>
                    <p class="alias reveal">"${heroObject.nickname}"</p>
                </div>

                <div class="specs">
                    <div class="role">
                        <img class="reveal" src="images/role/${heroObject.role.split("/")[0].toLowerCase()}.png" alt="">
                        <div>
                        <p class="reveal">Role</p>
                        <p class="role-name reveal">${heroObject.role}</p>
                        </div>
                    </div>
                    <div class="specialty">
                        <p class="reveal">Specialty</p>
                        <p class="spec-name reveal">${heroObject.specialty}</p>
                    </div>
                </div>

            </div>

            <div class="lane-section">
                <p class="lane-reco reveal">Lane Recommendation</p>
                <div class="lane-spec">
                    <img class="reveal" src="images/lane/${heroObject.lane.toLowerCase()}.png" alt="">
                    <p class="lane-text reveal">${heroObject.lane}</p>
                </div>
            </div>
    `    

    infoSection.innerHTML = 
    `
        <div class="game-info reveal">
            <div class="left-info">
                <div class="row">
                    <div class="child-row">
                        <img class="reveal" src="images/game-info/hero-num.png" alt="">
                        <p class="label reveal">HERO NUMBER</p>
                    </div>
                    <p class="value reveal">#${heroObject['hero_number']}</p>
                </div>
                <div class="row">
                    <div class="child-row">
                        <img class="reveal" src="images/game-info/release-date.png" alt="">
                        <p class="label reveal">RELEASE DATE</p>
                    </div>
                    <p class="value reveal">${heroObject['release_year']}</p>
                </div>
                <div class="row">
                    <div class="child-row">
                        <img class="reveal" src="images/game-info/price.png" alt="">
                        <p class="label reveal">PRICE</p>
                    </div>
                    <div class="price">
                        <div>   
                            <img class="reveal" src="images/game-info/battle-points.png" alt="">
                            <p class="reveal">${heroObject['price_bp']}</p>
                        </div>
                        <p>|</p>
                        <div>
                            <img class="reveal" src="images/game-info/diamond.png" alt="">
                            <p class="reveal">${heroObject['price_diamonds']}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-info">
                <div class="row">
                    <div class="child-row">
                        <img class="reveal" src="images/game-info/skill-resource.png" alt="">
                        <p class="label reveal">SKILL RESOURCE</p>
                    </div>
                    <p class="value reveal">${heroObject['skill-resource']}</p>
                </div>
                <div class="row">
                    <div class="child-row">
                        <img class="reveal" src="images/game-info/damage-type.png" alt="">
                        <p class="label reveal">DAMAGE TYPE</p>
                    </div>
                    <p class="value reveal">${heroObject['damage-type']}</p>
                </div>
                <div class="row">
                    <div class="child-row">
                        <img class="reveal" src="images/game-info/b-attack-type.png" alt="">
                        <p class="label reveal">BASIC ATTACK <br> TYPE</p>
                    </div>
                    <p class="value reveal">
                        ${heroObject['basic-attack-type']}
                    </p>
                </div>
            </div>
        </div>
            <div class="story reveal">
                <div class="title">            
                    <p class="reveal">STORY</p>          
                    <div class="reveal" style="flex:1; height:3px; background:linear-gradient(to left, transparent, #f0b429);"></div>
                </div>
                <p class="desc reveal">“${heroObject.story.title}” </p>
                <p class="reveal">
                    ${heroObject.story.lore}
                </p>
            </div>
    `

    var varabilities = document.createElement("div");

    varabilities.id = "abilities"

    varabilities.classList.add("reveal");

    infoSection.append(varabilities);

    var header = document.createElement("div");

    header.classList.add("title");

    header.innerHTML = 
    `
        <p class="reveal">ABILITIES</p>          
        <div class="reveal" style="flex:1; height:3px; background:linear-gradient(to left, transparent, #f0b429);"></div>   
    `

    abilities.append(header);

    heroObject.skills.forEach(ability => {
        var outer = document.createElement("div");

        outer.id = "outer"

        outer.innerHTML = 
        `
            <div class="img-text">
                        <img class="reveal" src="images/skills/${heroObject.name}/${ability.ability}.webp" alt="">
                        <div class="text-div">
                            <div class="upper">
                                <p class="sequence reveal">
                                    ${ability.ability}
                                </p>
                                <div class="category-div reveal">
                                     ${ability['ability-type'].map(type => `
                                    <p class="category">${type.toUpperCase()}</p>
                                    `).join("")}
                                </div>
                            </div>
                            <div class="lower">
                                <p class="skill-name reveal">
                                    ${ability['ability-name']}
                                </p>
                                <p class="skill-desc reveal">
                                    ${ability.desc}
                                </p>
                            </div>
                        </div>
                    </div>
        `
        abilities.append(outer);
    });

    container.addEventListener("click", (e) => {
    if (e.target.id === "btn") {
        window.location.href = "hero-list.html";
    }

    if(e.target.id === "hero" ){
        window.location.href = "heroes.html";
    }

    if(e.target.id === "hero-list" ){
        window.location.href = "hero-list.html";
    }
});
};

displayTemplate();
window.initReveal();



