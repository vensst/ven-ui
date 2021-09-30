<template>
  <i :class="'ven-icon-' + name"></i>
</template>

<script>
export default {
  name: "VenIcon",

  props: {
    name: String,
  },
};
</script>
