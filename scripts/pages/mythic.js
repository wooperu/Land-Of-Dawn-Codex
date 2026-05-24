initTabs("../data/skins/mythic.json", {
  basePath      : "../images/pages/skins-page/skins/portrait/",
  category      : "mythic",
  tabId         : "tabBar",
  gridId        : "portraitGrid",
  onRender      : function () { initReveal(); },
  onEmpty       : function (grid) { grid.innerHTML = ""; }
});