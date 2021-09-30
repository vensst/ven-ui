import VenForm from "./src/form";

/* istanbul ignore next */
VenForm.install = function (Vue) {
  Vue.component(VenForm.name, VenForm);
};

export default VenForm;
