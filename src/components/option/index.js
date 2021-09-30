import VenOption from "../select/src/option";

/* istanbul ignore next */
VenOption.install = function (Vue) {
  Vue.component(VenOption.name, VenOption);
};

export default VenOption;
