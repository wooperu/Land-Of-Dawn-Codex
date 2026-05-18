function initTabs(jsonPath, config) {
  const roles = ["All", "Tank", "Fighter", "Assassin", "Mage", "Marksman", "Support"];

  const tabBar = document.getElementById(config.tabId);
  const grid   = document.getElementById(config.gridId);

  if (!tabBar) {
    console.error("[initTabs] Tab bar element not found:", config.tabId);
    return;
  }

  if (grid) {
    const count    = config.skeletonCount || 5;
    const fragment = document.createDocumentFragment();
    for (var i = 0; i < count; i++) {
      var skeleton = document.createElement("div");
      skeleton.className = "portrait-skeleton";
      fragment.appendChild(skeleton);
    }
    grid.innerHTML = "";
    grid.appendChild(fragment);
  }

  fetch(jsonPath)
    .then(function (res) {
      if (!res.ok) throw new Error(`Failed to load: ${jsonPath} (${res.status})`);
      return res.json();
    })
    .then(function (data) {
      buildTabs(tabBar, roles, data, config);
      renderSkins(data, config);
    })
    .catch(function (err) {
      console.error("[initTabs] Error:", err.message);
      if (grid) grid.innerHTML = "";
    });
}

function buildTabs(tabBar, roles, data, config) {
  tabBar.innerHTML = "";

  roles.forEach(function (role) {
    const btn = document.createElement("button");
    btn.className  = "tab-btn" + (role === "All" ? " active" : "");
    btn.textContent = role;

    btn.addEventListener("click", function () {
      tabBar.querySelectorAll(".tab-btn").forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");

      const filtered = role === "All"
        ? data
        : data.filter(function (s) {
            if (Array.isArray(s.role)) {
              return s.role.includes(role);
            }
            return s.role === role;
          });

      if (filtered.length === 0) {
        const grid = document.getElementById(config.gridId);
        if (grid) grid.innerHTML = "";
        return;
      }

      renderSkins(filtered, config);
    });

    tabBar.appendChild(btn);
  });
}