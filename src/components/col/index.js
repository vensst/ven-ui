import VenCol from "./src/col";

/* istanbul ignore next */
VenCol.install = function (Vue) {
  Vue.component(VenCol.name, VenCol);
};

export default VenCol;
