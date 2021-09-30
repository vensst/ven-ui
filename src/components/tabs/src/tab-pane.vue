<template>
  <div
    class="ven-tab-pane"
    v-if="!lazy || loaded || active"
    v-show="active"
    role="tabpanel"
    :aria-hidden="!active"
    :id="`pane-${paneName}`"
    :aria-labelledby="`tab-${paneName}`"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "VenTabPane",

  componentName: "VenTabPane",

  props: {
    label: String,
    labelContent: Function,
    name: String,
    closable: Boolean,
    disabled: Boolean,
    lazy: Boolean,
  },

  data() {
    return {
      index: null,
      loaded: false,
    };
  },

  computed: {
    isClosable() {
      return this.closable || this.$parent.closable;
    },
    active() {
      const active = this.$parent.currentName === (this.name || this.index);
      if (active) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.loaded = true;
      }
      return active;
    },
    paneName() {
      return this.name || this.index;
    },
  },

  updated() {
    this.$parent.$emit("tab-nav-update");
  },
};
</script>
