import VenDropdownMenu from "../dropdown/src/dropdown-menu";

/* istanbul ignore next */
VenDropdownMenu.install = function (Vue) {
  Vue.component(VenDropdownMenu.name, VenDropdownMenu);
};

export default VenDropdownMenu;
