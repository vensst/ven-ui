import VenCheckbox from "./src/checkbox";

/* istanbul ignore next */
VenCheckbox.install = function (Vue) {
  Vue.component(VenCheckbox.name, VenCheckbox);
};

export default VenCheckbox;
