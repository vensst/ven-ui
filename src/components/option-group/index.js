import VenOptionGroup from "../select/src/option-group";

/* istanbul ignore next */
VenOptionGroup.install = function (Vue) {
  Vue.component(VenOptionGroup.name, VenOptionGroup);
};

export default VenOptionGroup;
