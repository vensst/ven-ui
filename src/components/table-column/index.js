import VenTableColumn from "../table/src/table-column";

/* istanbul ignore next */
VenTableColumn.install = function (Vue) {
  Vue.component(VenTableColumn.name, VenTableColumn);
};

export default VenTableColumn;
