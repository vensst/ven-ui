<template>
  <div
    class="ven-collapse-item"
    :class="{ 'is-active': isActive, 'is-disabled': disabled }"
  >
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`ven-collapse-content-${id}`"
      :aria-describedby="`ven-collapse-content-${id}`"
    >
      <div
        class="ven-collapse-item__header"
        @click="handleHeaderClick"
        role="button"
        :id="`ven-collapse-head-${id}`"
        :tabindex="disabled ? undefined : 0"
        @keyup.space.enter.stop="handleEnterClick"
        :class="{
          focusing: focusing,
          'is-active': isActive,
        }"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <slot name="title">{{ title }}</slot>
        <i
          class="ven-collapse-item__arrow ven-icon-arrow-right"
          :class="{ 'is-active': isActive }"
        >
        </i>
      </div>
    </div>
    <ven-collapse-transition>
      <div
        class="ven-collapse-item__wrap"
        v-show="isActive"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`ven-collapse-head-${id}`"
        :id="`ven-collapse-content-${id}`"
      >
        <div class="ven-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </ven-collapse-transition>
  </div>
</template>
<script>
import VenCollapseTransition from "../../../transitions/collapse-transition";
import Emitter from "../../../mixins/emitter";
import { generateId } from "../../../utils/util";

export default {
  name: "VenCollapseItem",

  componentName: "VenCollapseItem",

  mixins: [Emitter],

  components: { VenCollapseTransition },

  data() {
    return {
      contentWrapStyle: {
        height: "auto",
        display: "block",
      },
      contentHeight: 0,
      focusing: false,
      isClick: false,
      id: generateId(),
    };
  },

  inject: ["collapse"],

  props: {
    title: String,
    name: {
      type: [String, Number],
      default() {
        return this._uid;
      },
    },
    disabled: Boolean,
  },

  computed: {
    isActive() {
      return this.collapse.activeNames.indexOf(this.name) > -1;
    },
  },

  methods: {
    handleFocus() {
      setTimeout(() => {
        if (!this.isClick) {
          this.focusing = true;
        } else {
          this.isClick = false;
        }
      }, 50);
    },
    handleHeaderClick() {
      if (this.disabled) return;
      this.dispatch("VenCollapse", "item-click", this);
      this.focusing = false;
      this.isClick = true;
    },
    handleEnterClick() {
      this.dispatch("VenCollapse", "item-click", this);
    },
  },
};
</script>
