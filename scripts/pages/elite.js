initTabs("../data/skins/elite.json", {
  basePath      : "../images/pages/skins-page/skins/portrait/",
  category      : "elite",
  tabId         : "tabBar",
  gridId        : "portraitGrid",
  onRender      : function () { initReveal(); },
  onEmpty       : function (grid) { grid.innerHTML = ""; }
});