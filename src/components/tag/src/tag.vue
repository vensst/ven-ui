<script>
export default {
  name: "VenTag",
  props: {
    text: String,
    closable: Boolean,
    type: String,
    hit: Boolean,
    disableTransitions: Boolean,
    color: String,
    size: String,
    effect: {
      type: String,
      default: "light",
      validator(val) {
        return ["dark", "light", "plain"].indexOf(val) !== -1;
      },
    },
  },
  methods: {
    handleClose(event) {
      event.stopPropagation();
      this.$emit("close", event);
    },
    handleClick(event) {
      this.$emit("click", event);
    },
  },
  computed: {
    tagSize() {
      return this.size || (this.$ELEMENT || {}).size;
    },
  },
  // eslint-disable-next-line no-unused-vars
  render(h) {
    const { type, tagSize, hit, effect } = this;
    const classes = [
      "ven-tag",
      type ? `ven-tag--${type}` : "",
      tagSize ? `ven-tag--${tagSize}` : "",
      effect ? `ven-tag--${effect}` : "",
      hit && "is-hit",
    ];
    const tagEl = (
      <span
        class={classes}
        style={{ backgroundColor: this.color }}
        on-click={this.handleClick}
      >
        {this.$slots.default}
        {this.closable && (
          <i
            class="ven-tag__close ven-icon-close"
            on-click={this.handleClose}
          ></i>
        )}
      </span>
    );

    return this.disableTransitions ? (
      tagEl
    ) : (
      <transition name="ven-zoom-in-center">{tagEl}</transition>
    );
  },
};
</script>
