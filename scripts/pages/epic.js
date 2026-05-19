initTabs("../data/skins/epic.json", {
  basePath      : "../images/pages/skins-page/skins/portrait/",
  category      : "epic",
  tabId         : "tabBar",
  gridId        : "portraitGrid",
  skeletonCount : 3,
  onRender      : function () { initReveal(); },
  onEmpty       : function (grid) { grid.innerHTML = ""; }
});