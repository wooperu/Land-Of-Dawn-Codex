initTabs("../data/skins/epic.json", {
  basePath      : "../images/pages/skins-page/skins/portrait/",
  category      : "epic",
  tabId         : "tabBar",
  gridId        : "portraitGrid",
  onRender      : function () { initReveal(); },
  onEmpty       : function (grid) { grid.innerHTML = ""; }
});