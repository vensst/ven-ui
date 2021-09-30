<template>
  <div class="ven-page-header">
    <div class="ven-page-header__left" @click="$emit('back')">
      <i class="ven-icon-back"></i>
      <div class="ven-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="ven-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
import { t } from "../../../locale";
export default {
  name: "VenPageHeader",

  props: {
    title: {
      type: String,
      default() {
        return t("el.pageHeader.title");
      },
    },
    content: String,
  },
};
</script>
