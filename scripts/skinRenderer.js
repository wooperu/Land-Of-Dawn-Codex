function buildImagePath(config, image) {
  const { basePath, category, subfolder } = config;

  const base = basePath.endsWith("/") ? basePath : basePath + "/";
  const cat  = category  ? category  + "/" : "";
  const sub  = subfolder ? subfolder + "/" : "";

  return `${base}${cat}${sub}${image}`;
}

function buildCard(skinData, config) {
  const { hero, skin, image } = skinData;

  const src = buildImagePath(config, image);
  const alt = `${hero} — ${skin}`;

  const card = document.createElement("div");
  card.className = "portrait-card";

  const img = document.createElement("img");
  img.src     = src;
  img.alt     = alt;
  img.loading = "lazy";

  img.onerror = function () {
    this.alt = `Image not found: ${image}`;
    this.classList.add("portrait-missing");
  };

  const overlay = document.createElement("div");
  overlay.className = "portrait-overlay";

  const skinName = document.createElement("h3");
  skinName.textContent = skin;

  const heroName = document.createElement("p");
  heroName.textContent = hero;

  overlay.appendChild(skinName);
  overlay.appendChild(heroName);

  card.appendChild(img);
  card.appendChild(overlay);

  return card;
}

function renderSkins(data, config) {
  if (!config.gridId) {
    console.error("[renderSkins] config.gridId is required.");
    return;
  }

  const grid = document.getElementById(config.gridId);

  if (!grid) {
    console.error(`[renderSkins] Grid element #${config.gridId} not found.`);
    return;
  }

  if (!Array.isArray(data) || data.length === 0) {
    console.warn("[renderSkins] No skin data provided.");
    if (typeof config.onEmpty === "function") config.onEmpty(grid);
    return;
  }

  const fragment = document.createDocumentFragment();

  data.forEach(function (skinData) {
    if (!skinData.image || !skinData.hero || !skinData.skin) {
      console.warn("[renderSkins] Skipping malformed entry:", skinData);
      return;
    }
    const card = buildCard(skinData, config);
    fragment.appendChild(card);
  });

  grid.innerHTML = "";
  grid.appendChild(fragment);

  if (typeof config.onRender === "function") config.onRender(grid);
}

function renderSkinsFromFile(jsonPath, config) {
  fetch(jsonPath)
    .then(function (res) {
      if (!res.ok) throw new Error(`Failed to load: ${jsonPath} (${res.status})`);
      return res.json();
    })
    .then(function (data) {
      renderSkins(data, config);
    })
    .catch(function (err) {
      console.error("[renderSkinsFromFile] Error:", err.message);
    });
}