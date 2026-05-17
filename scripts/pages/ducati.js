renderSkinsFromFile("../../data/collab/ducati.json", {
  basePath  : "../../images/pages/skins-page/skins/portrait/",
  category  : "collab",
  subfolder : "ducati",
  gridId    : "portraitGrid",
  skeletonCount : 5,
  onRender  : function () { initReveal(); }
});