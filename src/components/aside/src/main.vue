<template>
  <aside class="ven-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: "VenAside",

  componentName: "VenAside",

  props: {
    width: {
      type: String,
      default: "300px",
    },
  },
};
</script>
