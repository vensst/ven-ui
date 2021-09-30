<template>
  <transition name="ven-zoom-in-top" @after-leave="doDestroy">
    <div
      v-show="showPopper"
      class="ven-autocomplete-suggestion ven-popper"
      :class="{ 'is-loading': !parent.hideLoading && parent.loading }"
      :style="{ width: dropdownWidth }"
      role="region"
    >
      <ven-scrollbar
        tag="ul"
        wrap-class="ven-autocomplete-suggestion__wrap"
        view-class="ven-autocomplete-suggestion__list"
      >
        <li v-if="!parent.hideLoading && parent.loading">
          <i class="ven-icon-loading"></i>
        </li>
        <slot v-else> </slot>
      </ven-scrollbar>
    </div>
  </transition>
</template>
<script>
import Popper from "../../../utils/vue-popper";
import Emitter from "../../../mixins/emitter";
import VenScrollbar from "../../scrollbar";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { VenScrollbar },
  mixins: [Popper, Emitter],

  componentName: "VenAutocompleteSuggestions",

  data() {
    return {
      parent: this.$parent,
      dropdownWidth: "",
    };
  },

  props: {
    options: {
      default() {
        return {
          gpuAcceleration: false,
        };
      },
    },
    id: String,
  },

  methods: {
    select(item) {
      this.dispatch("VenAutocomplete", "item-click", item);
    },
  },

  updated() {
    // eslint-disable-next-line no-unused-vars
    this.$nextTick((_) => {
      this.popperJS && this.updatePopper();
    });
  },

  mounted() {
    this.$parent.popperElm = this.popperElm = this.$el;
    this.referenceElm =
      this.$parent.$refs.input.$refs.input ||
      this.$parent.$refs.input.$refs.textarea;
    this.referenceList = this.$el.querySelector(
      ".ven-autocomplete-suggestion__list"
    );
    this.referenceList.setAttribute("role", "listbox");
    this.referenceList.setAttribute("id", this.id);
  },

  created() {
    this.$on("visible", (val, inputWidth) => {
      this.dropdownWidth = inputWidth + "px";
      this.showPopper = val;
    });
  },
};
</script>
