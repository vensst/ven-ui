import VenMenuItem from "../menu/src/menu-item";

/* istanbul ignore next */
VenMenuItem.install = function (Vue) {
  Vue.component(VenMenuItem.name, VenMenuItem);
};

export default VenMenuItem;
