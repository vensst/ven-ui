import VenCheckboxGroup from "../checkbox/src/checkbox-group.vue";

/* istanbul ignore next */
VenCheckboxGroup.install = function (Vue) {
  Vue.component(VenCheckboxGroup.name, VenCheckboxGroup);
};

export default VenCheckboxGroup;
