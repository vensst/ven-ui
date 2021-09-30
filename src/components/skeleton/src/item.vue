<template>
  <div :class="['ven-skeleton__item', `ven-skeleton__${variant}`]">
    <img-placeholder v-if="variant === 'image'" />
  </div>
</template>

<script>
import ImgPlaceholder from "./img-placeholder";

export default {
  name: "VenSkeletonItem",
  props: {
    variant: {
      type: String,
      default: "text",
    },
  },
  components: {
    [ImgPlaceholder.name]: ImgPlaceholder,
  },
};
</script>
