import VenFormItem from "../form/src/form-item";

/* istanbul ignore next */
VenFormItem.install = function (Vue) {
  Vue.component(VenFormItem.name, VenFormItem);
};

export default VenFormItem;
