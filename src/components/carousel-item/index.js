import VenCarouselItem from "../carousel/src/item";

/* istanbul ignore next */
VenCarouselItem.install = function (Vue) {
  Vue.component(VenCarouselItem.name, VenCarouselItem);
};

export default VenCarouselItem;
