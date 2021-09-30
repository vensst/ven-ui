import VenButton from "./src/button";

/* istanbul ignore next */
VenButton.install = function (Vue) {
  Vue.component(VenButton.name, VenButton);
};

export default VenButton;
