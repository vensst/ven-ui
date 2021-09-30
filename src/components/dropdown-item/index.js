import VenDropdownItem from "../dropdown/src/dropdown-item";

/* istanbul ignore next */
VenDropdownItem.install = function (Vue) {
  Vue.component(VenDropdownItem.name, VenDropdownItem);
};

export default VenDropdownItem;
