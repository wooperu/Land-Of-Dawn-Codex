renderSkinsFromFile("../../data/collab/transformers.json", {
  basePath  : "../../images/pages/skins-page/skins/portrait/",
  category  : "collab",
  subfolder : "transformers",
  gridId    : "portraitGrid",
  skeletonCount : 5,
  onRender  : function () { initReveal(); }
});