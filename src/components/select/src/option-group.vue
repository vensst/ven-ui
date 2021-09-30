<template>
  <ul class="ven-select-group__wrap" v-show="visible">
    <li class="ven-select-group__title">{{ label }}</li>
    <li>
      <ul class="ven-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script>
import Emitter from "../../../mixins/emitter";

export default {
  mixins: [Emitter],

  name: "VenOptionGroup",

  componentName: "VenOptionGroup",

  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      visible: true,
    };
  },

  watch: {
    disabled(val) {
      this.broadcast("VenOption", "handleGroupDisabled", val);
    },
  },

  methods: {
    queryChange() {
      this.visible =
        this.$children &&
        Array.isArray(this.$children) &&
        this.$children.some((option) => option.visible === true);
    },
  },

  created() {
    this.$on("queryChange", this.queryChange);
  },

  mounted() {
    if (this.disabled) {
      this.broadcast("VenOption", "handleGroupDisabled", this.disabled);
    }
  },
};
</script>
