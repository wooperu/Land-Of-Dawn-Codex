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
                <img id="btn" src="images/pages/hero-list/back-btn.png" alt="">
                <p>| Heroes</p>
                <p class="sign">&#8250;</p>
                <p>Hero List</p>
                <p class="sign">&#8250;</p>
                <p>${heroObject.name}</p>
            </div>

            <div class="details-section">

                <div>
                    <p class="name">${heroObject.name.toUpperCase()}</p>
                    <p class="alias">"${heroObject.nickname}"</p>
                </div>

                <div class="specs">
                    <div class="role">
                        <img src="images/role/${heroObject.role.split("/")[0]}.png" alt="">
                        <div>
                        <p>Role</p>
                        <p class="role-name">${heroObject.role}</p>
                        </div>
                    </div>
                    <div class="specialty">
                        <p>Specialty</p>
                        <p class="spec-name">${heroObject.specialty}</p>
                    </div>
                </div>

            </div>

            <div class="lane-section">
                <p class="lane-reco">Lane Recommendation</p>
                <div class="lane-spec">
                    <img src="images/lane/${heroObject.lane}.png" alt="">
                    <p class="lane-text">${heroObject.lane}</p>
                </div>
            </div>
    `    

    infoSection.innerHTML = 
    `
        <div class="game-info reveal">
            <div class="left-info">
                <div class="row">
                    <div class="child-row">
                        <img src="images/game-info/hero-num.png" alt="">
                        <p class="label">HERO NUMBER</p>
                    </div>
                    <p class="value">#${heroObject['hero_number']}</p>
                </div>
                <div class="row">
                    <div class="child-row">
                        <img src="images/game-info/release-date.png" alt="">
                        <p class="label">RELEASE DATE</p>
                    </div>
                    <p class="value">${heroObject['release_year']}</p>
                </div>
                <div class="row">
                    <div class="child-row">
                        <img src="images/game-info/price.png" alt="">
                        <p class="label">PRICE</p>
                    </div>
                    <div class="price">
                        <div>   
                            <img src="images/game-info/battle-points.png" alt="">
                            <p>${heroObject['price_bp']}</p>
                        </div>
                        <p>|</p>
                        <div>
                            <img src="images/game-info/diamond.png" alt="">
                            <p>${heroObject['price_diamonds']}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-info">
                <div class="row">
                    <div class="child-row">
                        <img src="images/game-info/skill-resource.png" alt="">
                        <p class="label">SKILL RESOURCE</p>
                    </div>
                    <p class="value">${heroObject['skill-resource']}</p>
                </div>
                <div class="row">
                    <div class="child-row">
                        <img src="images/game-info/damage-type.png" alt="">
                        <p class="label">DAMAGE TYPE</p>
                    </div>
                    <p class="value">${heroObject['damage-type']}</p>
                </div>
                <div class="row">
                    <div class="child-row">
                        <img src="images/game-info/b-attack-type.png" alt="">
                        <p class="label">BASIC ATTACK <br> TYPE</p>
                    </div>
                    <p class="value">
                        ${heroObject['basic-attack-type']}
                    </p>
                </div>
            </div>
        </div>
            <div class="story reveal">
                <div class="title">            
                    <p>STORY</p>          
                    <div style="flex:1; height:3px; background:linear-gradient(to left, transparent, #f0b429);"></div>
                </div>
                <p class="desc">“${heroObject.story.title}” </p>
                <p>
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
        <p>ABILITIES</p>          
        <div style="flex:1; height:3px; background:linear-gradient(to left, transparent, #f0b429);"></div>   
    `

    abilities.append(header);

    heroObject.skills.forEach(ability => {
        var outer = document.createElement("div");

        outer.id = "outer"

        outer.innerHTML = 
        `
            <div class="img-text">
                        <img src="images/skills/${heroObject.name}/${ability.ability}.webp" alt="">
                        <div class="text-div">
                            <div class="upper">
                                <p class="sequence">
                                    ${ability.ability}
                                </p>
                                <div class="category-div">
                                     ${ability['ability-type'].map(type => `
                                    <p class="category">${type.toUpperCase()}</p>
                                    `).join("")}
                                </div>
                            </div>
                            <div class="lower">
                                <p class="skill-name">
                                    ${ability['ability-name']}
                                </p>
                                <p class="skill-desc">
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
});
};

displayTemplate();
window.initReveal();



