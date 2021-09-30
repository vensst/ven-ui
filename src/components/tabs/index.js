import VenTabs from "./src/tabs";

/* istanbul ignore next */
VenTabs.install = function (Vue) {
  Vue.component(VenTabs.name, VenTabs);
};

export default VenTabs;
