initTabs("../data/skins/collector.json", {
  basePath      : "../images/pages/skins-page/skins/portrait/",
  category      : "collector",
  tabId         : "tabBar",
  gridId        : "portraitGrid",
  onRender      : function () { initReveal(); },
  onEmpty       : function (grid) { grid.innerHTML = ""; }
});