<script>
import Emitter from "../../../mixins/emitter";

export default {
  name: "VenCheckboxGroup",

  componentName: "VenCheckboxGroup",

  mixins: [Emitter],

  inject: {
    elFormItem: {
      default: "",
    },
  },

  props: {
    value: {},
    disabled: Boolean,
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String,
  },

  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    checkboxGroupSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
  },

  watch: {
    value(value) {
      this.dispatch("VenFormItem", "el.form.change", [value]);
    },
  },
};
</script>

<template>
  <div class="ven-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
