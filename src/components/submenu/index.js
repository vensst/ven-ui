import VenSubmenu from "../menu/src/submenu";

/* istanbul ignore next */
VenSubmenu.install = function (Vue) {
  Vue.component(VenSubmenu.name, VenSubmenu);
};

export default VenSubmenu;
