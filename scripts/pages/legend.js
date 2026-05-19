initTabs("../data/skins/legend.json", {
  basePath      : "../images/pages/skins-page/skins/portrait/",
  category      : "legend",
  tabId         : "tabBar",
  gridId        : "portraitGrid",
  skeletonCount : 3,
  onRender      : function () { initReveal(); },
  onEmpty       : function (grid) { grid.innerHTML = ""; }
});