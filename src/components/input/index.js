import VenInput from "./src/input";

/* istanbul ignore next */
VenInput.install = function (Vue) {
  Vue.component(VenInput.name, VenInput);
};

export default VenInput;
