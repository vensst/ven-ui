<template>
  <ven-popover v-bind="$attrs" v-model="visible" trigger="click">
    <div class="ven-popconfirm">
      <p class="ven-popconfirm__main">
        <i
          v-if="!hideIcon"
          :class="icon"
          class="ven-popconfirm__icon"
          :style="{ color: iconColor }"
        ></i>
        {{ title }}
      </p>
      <div class="ven-popconfirm__action">
        <ven-button size="mini" :type="cancelButtonType" @click="cancel">
          {{ displayCancelButtonText }}
        </ven-button>
        <ven-button size="mini" :type="confirmButtonType" @click="confirm">
          {{ displayConfirmButtonText }}
        </ven-button>
      </div>
    </div>
    <slot name="reference" slot="reference"></slot>
  </ven-popover>
</template>

<script>
import VenPopover from "../../popover";
import VenButton from "../../button";
import { t } from "../../../locale";

export default {
  name: "VenPopconfirm",
  props: {
    title: {
      type: String,
    },
    confirmButtonText: {
      type: String,
    },
    cancelButtonText: {
      type: String,
    },
    confirmButtonType: {
      type: String,
      default: "primary",
    },
    cancelButtonType: {
      type: String,
      default: "text",
    },
    icon: {
      type: String,
      default: "ven-icon-question",
    },
    iconColor: {
      type: String,
      default: "#f90",
    },
    hideIcon: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    VenPopover,
    VenButton,
  },
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    displayConfirmButtonText() {
      return this.confirmButtonText || t("el.popconfirm.confirmButtonText");
    },
    displayCancelButtonText() {
      return this.cancelButtonText || t("el.popconfirm.cancelButtonText");
    },
  },
  methods: {
    confirm() {
      this.visible = false;
      this.$emit("confirm");
    },
    cancel() {
      this.visible = false;
      this.$emit("cancel");
    },
  },
};
</script>
