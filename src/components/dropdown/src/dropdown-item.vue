<template>
  <li
    class="ven-dropdown-menu__item"
    :class="{
      'is-disabled': disabled,
      'ven-dropdown-menu__item--divided': divided,
    }"
    @click="handleClick"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
  >
    <i :class="icon" v-if="icon"></i>
    <slot></slot>
  </li>
</template>
<script>
import Emitter from "../../../mixins/emitter";

export default {
  name: "VenDropdownItem",

  mixins: [Emitter],

  props: {
    command: {},
    disabled: Boolean,
    divided: Boolean,
    icon: String,
  },

  methods: {
    // eslint-disable-next-line no-unused-vars
    handleClick(e) {
      this.dispatch("VenDropdown", "menu-item-click", [this.command, this]);
    },
  },
};
</script>
