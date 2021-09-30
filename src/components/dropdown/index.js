import VenDropdown from "./src/dropdown";

/* istanbul ignore next */
VenDropdown.install = function (Vue) {
  Vue.component(VenDropdown.name, VenDropdown);
};

export default VenDropdown;
