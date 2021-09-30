<template>
  <transition name="ven-alert-fade">
    <div
      class="ven-alert"
      :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
      v-show="visible"
      role="alert"
    >
      <i
        class="ven-alert__icon"
        :class="[iconClass, isBigIcon]"
        v-if="showIcon"
      ></i>
      <div class="ven-alert__content">
        <span
          class="ven-alert__title"
          :class="[isBoldTitle]"
          v-if="title || $slots.title"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="ven-alert__description" v-if="$slots.default && !description">
          <slot></slot>
        </p>
        <p class="ven-alert__description" v-if="description && !$slots.default">
          {{ description }}
        </p>
        <i
          class="ven-alert__closebtn"
          :class="{
            'is-customed': closeText !== '',
            'ven-icon-close': closeText === '',
          }"
          v-show="closable"
          @click="close()"
          >{{ closeText }}</i
        >
      </div>
    </div>
  </transition>
</template>

<script>
const TYPE_CLASSES_MAP = {
  success: "ven-icon-success",
  warning: "ven-icon-warning",
  error: "ven-icon-error",
};
export default {
  name: "VenAlert",
  componentName: "VenAlert",
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "info",
    },
    closable: {
      type: Boolean,
      default: true,
    },
    closeText: {
      type: String,
      default: "",
    },
    showIcon: Boolean,
    center: Boolean,
    effect: {
      type: String,
      default: "light",
      validator: function (value) {
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
  },

  data() {
    return {
      visible: true,
    };
  },

  methods: {
    close() {
      this.visible = false;
      this.$emit("close");
    },
  },

  computed: {
    typeClass() {
      return `ven-alert--${this.type}`;
    },

    iconClass() {
      return TYPE_CLASSES_MAP[this.type] || "ven-icon-info";
    },

    isBigIcon() {
      return this.description || this.$slots.default ? "is-big" : "";
    },

    isBoldTitle() {
      return this.description || this.$slots.default ? "is-bold" : "";
    },
  },
};
</script>
