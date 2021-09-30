import VenMenu from "./src/menu";

/* istanbul ignore next */
VenMenu.install = function (Vue) {
  Vue.component(VenMenu.name, VenMenu);
};

export default VenMenu;
