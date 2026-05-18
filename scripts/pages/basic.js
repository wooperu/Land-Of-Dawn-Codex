initTabs("../data/skins/basic.json", {
  basePath      : "../images/pages/skins-page/skins/portrait/",
  category      : "basic",
  tabId         : "tabBar",
  gridId        : "portraitGrid",
  skeletonCount : 3,
  onRender      : function () { initReveal(); },
  onEmpty       : function (grid) { grid.innerHTML = ""; }
});