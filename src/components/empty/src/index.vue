<template>
  <div class="ven-empty">
    <div class="ven-empty__image" :style="imageStyle">
      <img v-if="image" :src="image" ondragstart="return false" />
      <slot v-else name="image">
        <img-empty />
      </slot>
    </div>
    <div class="ven-empty__description">
      <slot v-if="$slots.description" name="description"></slot>
      <p v-else>{{ emptyDescription }}</p>
    </div>
    <div v-if="$slots.default" class="ven-empty__bottom">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ImgEmpty from "./img-empty.vue";
import { t } from "../../../locale";

export default {
  name: "VenEmpty",
  components: {
    [ImgEmpty.name]: ImgEmpty,
  },
  props: {
    image: {
      type: String,
      default: "",
    },
    imageSize: Number,
    description: {
      type: String,
      default: "",
    },
  },
  computed: {
    emptyDescription() {
      return this.description || t("el.empty.description");
    },
    imageStyle() {
      return {
        width: this.imageSize ? `${this.imageSize}px` : "",
      };
    },
  },
};
</script>
