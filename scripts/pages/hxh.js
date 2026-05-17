renderSkinsFromFile("../../data/collab/hxh.json", {
  basePath  : "../../images/pages/skins-page/skins/portrait/",
  category  : "collab",
  subfolder : "hxh",
  gridId    : "portraitGrid",
  skeletonCount : 5,
  onRender  : function () { initReveal(); }
});