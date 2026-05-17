renderSkinsFromFile("../../data/collab/kung-fu-panda.json", {
  basePath  : "../../images/pages/skins-page/skins/portrait/",
  category  : "collab",
  subfolder : "kung-fu-panda",
  gridId    : "portraitGrid",
  skeletonCount : 5,
  onRender  : function () { initReveal(); }
});