initTabs("../data/skins/special.json", {
  basePath      : "../images/pages/skins-page/skins/portrait/",
  category      : "special",
  tabId         : "tabBar",
  gridId        : "portraitGrid",
  skeletonCount : 3,
  onRender      : function () { initReveal(); },
  onEmpty       : function (grid) { grid.innerHTML = ""; }
});