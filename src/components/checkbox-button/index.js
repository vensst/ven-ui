import VenCheckboxButton from "../checkbox/src/checkbox-button.vue";

/* istanbul ignore next */
VenCheckboxButton.install = function (Vue) {
  Vue.component(VenCheckboxButton.name, VenCheckboxButton);
};

export default VenCheckboxButton;
