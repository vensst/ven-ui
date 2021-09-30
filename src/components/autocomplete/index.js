import VenAutocomplete from "./src/autocomplete";

/* istanbul ignore next */
VenAutocomplete.install = function (Vue) {
  Vue.component(VenAutocomplete.name, VenAutocomplete);
};

export default VenAutocomplete;
