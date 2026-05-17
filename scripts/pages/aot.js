renderSkinsFromFile("../../data/collab/aot.json", {
  basePath  : "../../images/pages/skins-page/skins/portrait/",
  category  : "collab",
  subfolder : "aot",
  gridId    : "portraitGrid",
  skeletonCount : 5,
  onRender  : function () { initReveal(); }
});