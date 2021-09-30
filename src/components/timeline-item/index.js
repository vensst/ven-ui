import VenTimelineItem from "../timeline/src/item";

/* istanbul ignore next */
VenTimelineItem.install = function (Vue) {
  Vue.component(VenTimelineItem.name, VenTimelineItem);
};

export default VenTimelineItem;
