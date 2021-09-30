<template>
  <footer class="ven-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: "VenFooter",

  componentName: "VenFooter",

  props: {
    height: {
      type: String,
      default: "60px",
    },
  },
};
</script>
