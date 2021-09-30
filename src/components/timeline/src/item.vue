<template>
  <li class="ven-timeline-item">
    <div class="ven-timeline-item__tail"></div>

    <div
      v-if="!$slots.dot"
      class="ven-timeline-item__node"
      :class="[
        `ven-timeline-item__node--${size || ''}`,
        `ven-timeline-item__node--${type || ''}`,
      ]"
      :style="{
        backgroundColor: color,
      }"
    >
      <i v-if="icon" class="ven-timeline-item__icon" :class="icon"></i>
    </div>
    <div v-if="$slots.dot" class="ven-timeline-item__dot">
      <slot name="dot"></slot>
    </div>

    <div class="ven-timeline-item__wrapper">
      <div
        v-if="!hideTimestamp && placement === 'top'"
        class="ven-timeline-item__timestamp is-top"
      >
        {{ timestamp }}
      </div>

      <div class="ven-timeline-item__content">
        <slot></slot>
      </div>

      <div
        v-if="!hideTimestamp && placement === 'bottom'"
        class="ven-timeline-item__timestamp is-bottom"
      >
        {{ timestamp }}
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "VenTimelineItem",

  inject: ["timeline"],

  props: {
    timestamp: String,

    hideTimestamp: {
      type: Boolean,
      default: false,
    },

    placement: {
      type: String,
      default: "bottom",
    },

    type: String,

    color: String,

    size: {
      type: String,
      default: "normal",
    },

    icon: String,
  },
};
</script>
