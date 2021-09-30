import VenInputNumber from "./src/input-number";

/* istanbul ignore next */
VenInputNumber.install = function (Vue) {
  Vue.component(VenInputNumber.name, VenInputNumber);
};

export default VenInputNumber;
