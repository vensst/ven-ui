import VenButtonGroup from "../button/src/button-group";

/* istanbul ignore next */
VenButtonGroup.install = function (Vue) {
  Vue.component(VenButtonGroup.name, VenButtonGroup);
};

export default VenButtonGroup;
