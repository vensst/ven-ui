<template>
  <div class="ven-breadcrumb" aria-label="Breadcrumb" role="navigation">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "VenBreadcrumb",

  props: {
    separator: {
      type: String,
      default: "/",
    },
    separatorClass: {
      type: String,
      default: "",
    },
  },

  provide() {
    return {
      elBreadcrumb: this,
    };
  },

  mounted() {
    const items = this.$el.querySelectorAll(".ven-breadcrumb__item");
    if (items.length) {
      items[items.length - 1].setAttribute("aria-current", "page");
    }
  },
};
</script>
