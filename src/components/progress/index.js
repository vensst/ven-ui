import VenProgress from "./src/progress";

/* istanbul ignore next */
VenProgress.install = function (Vue) {
  Vue.component(VenProgress.name, VenProgress);
};

export default VenProgress;
