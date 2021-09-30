import VenTag from "./src/tag";

/* istanbul ignore next */
VenTag.install = function (Vue) {
  Vue.component(VenTag.name, VenTag);
};

export default VenTag;
