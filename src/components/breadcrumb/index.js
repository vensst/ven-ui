import VenBreadcrumb from "./src/breadcrumb";

/* istanbul ignore next */
VenBreadcrumb.install = function (Vue) {
  Vue.component(VenBreadcrumb.name, VenBreadcrumb);
};

export default VenBreadcrumb;
