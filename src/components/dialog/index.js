import VenDialog from "./src/component";

/* istanbul ignore next */
VenDialog.install = function (Vue) {
  Vue.component(VenDialog.name, VenDialog);
};

export default VenDialog;
