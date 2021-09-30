<template>
  <div class="header">
    <div class="logo">ven-ui</div>
    <div class="menu">
      <ven-menu
        :default-active="activeRoutePath"
        class="ven-menu-demo"
        mode="horizontal"
        router
      >
        <template>
          <ven-menu-item index="/guide">指南</ven-menu-item>
          <ven-menu-item index="/component">组件</ven-menu-item>
          <ven-menu-item index="/resource">资源</ven-menu-item>
        </template>
      </ven-menu>
      <ul class="menu-extra">
        <li>
          <a href="https://github.com/vensst/ven-ui" target="_blank">
            <i class="iconfont icon-GitHub"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
/**
 * @name: Header
 * @author: yfhu
 * @date: 2021/9/26 9:37
 * @description：Header.vue
 * @update: 2021/9/26 9:37
 */
export default {
  name: "Header",
  mixins: [],
  components: {},
  props: {},
  directives: {},
  data() {
    return {
      activeRoutePath: "",
    };
  },
  computed: {},
  watch: {
    $route: function () {
      this.getActiveRoutePath();
    },
  },
  created() {
    this.getActiveRoutePath();
  },
  mounted() {},
  methods: {
    getActiveRoutePath() {
      const redirectedFrom = this.$route.redirectedFrom;
      if (redirectedFrom) {
        this.activeRoutePath = redirectedFrom;
      } else {
        const path = this.$route.path;
        if (path.indexOf("/", 1) !== -1) {
          this.activeRoutePath = path.substring(0, path.indexOf("/", 1));
        } else {
          this.activeRoutePath = path.substring(0);
        }
      }
    },
  },
};
</script>
<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .logo {
    width: 240px;
    text-align: center;
    padding: 0 20px;
    color: #409eff;
    font-size: 28px;
    font-weight: 600;
  }
  .menu {
    display: flex;
    align-items: center;
    ul.menu-extra {
      padding: 0 10px;
      li {
        padding: 0 10px;
        a {
          cursor: pointer;
          color: #333;
        }
      }
    }
  }
}
</style>
