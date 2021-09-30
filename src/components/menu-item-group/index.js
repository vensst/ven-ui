import VenMenuItemGroup from "../menu/src/menu-item-group";

/* istanbul ignore next */
VenMenuItemGroup.install = function (Vue) {
  Vue.component(VenMenuItemGroup.name, VenMenuItemGroup);
};

export default VenMenuItemGroup;
