import VenTable from "./src/table";

/* istanbul ignore next */
VenTable.install = function (Vue) {
  Vue.component(VenTable.name, VenTable);
};

export default VenTable;
