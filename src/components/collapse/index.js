import VenCollapse from "./src/collapse";

/* istanbul ignore next */
VenCollapse.install = function (Vue) {
  Vue.component(VenCollapse.name, VenCollapse);
};

export default VenCollapse;
