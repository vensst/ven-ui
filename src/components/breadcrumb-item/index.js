import VenBreadcrumbItem from "../breadcrumb/src/breadcrumb-item";

/* istanbul ignore next */
VenBreadcrumbItem.install = function (Vue) {
  Vue.component(VenBreadcrumbItem.name, VenBreadcrumbItem);
};

export default VenBreadcrumbItem;
