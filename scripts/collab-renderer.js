async function loadCollab(collabName, folderName) {
  const res = await fetch(`../../data/collab/${collabName}.json`);
  const data = await res.json();

  renderCollab(data, folderName);
}

function renderCollab(data, folderName) {
  const grid = document.getElementById("portraitGrid");
  if (!grid) return;

  grid.innerHTML = "";

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "portrait-card";

    card.innerHTML = `
      <img src="../../images/pages/skins-page/skins/portrait/collab/${folderName}/${item.image}" 
           alt="${item.skin}">
      <div class="portrait-overlay">
        <h3>${item.skin}</h3>
        <p>${item.hero}</p>
      </div>
    `;

    grid.appendChild(card);
  });
}