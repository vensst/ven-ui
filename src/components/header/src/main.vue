<template>
  <header class="ven-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "VenHeader",

  componentName: "VenHeader",

  props: {
    height: {
      type: String,
      default: "60px",
    },
  },
};
</script>
