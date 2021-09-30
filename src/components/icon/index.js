import VenIcon from "./src/icon.vue";

/* istanbul ignore next */
VenIcon.install = function (Vue) {
  Vue.component(VenIcon.name, VenIcon);
};

export default VenIcon;
