<template>
  <div class="layout">
    <Header></Header>
    <div class="main">
      <SideNav :navList="navList" class="scrollBar" v-if="isSideNav"></SideNav>
      <div
        class="view page-container scrollBar"
        :class="isSideNav ? '' : 'view--style'"
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
/**
 * @name: Layout
 * @author: yfhu
 * @date: 2021/8/12 17:37
 * @description：Layout.vue
 * @update: 2021/8/12 17:37
 */
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import navConfig from "../router/nav.config.json";
export default {
  name: "Layout",
  mixins: [],
  components: { Header, SideNav },
  props: {},
  data() {
    return {
      navList: [],
      isSideNav: true,
    };
  },
  computed: {},
  watch: {
    $route: function () {
      this.getNavList();
    },
  },
  created() {
    this.getNavList();
  },
  mounted() {},
  methods: {
    getNavList() {
      const routes = this.$router.options.routes;
      const path = this.$route.matched[0]?.path;
      if (this.$route.name.split("-")[1] === "index") {
        this.isSideNav = false;
      } else this.isSideNav = true;
      if (path === "/component") {
        let newNavConfig = JSON.parse(JSON.stringify(navConfig));
        newNavConfig.forEach((item) => {
          if (item.path) {
            item.path = path + item.path;
          }
          if (item.groups && item.groups.length) {
            item.groups.forEach((cItem) => {
              cItem.list.forEach((tItem) => {
                if (tItem.path) {
                  tItem.path = path + tItem.path;
                }
              });
            });
          }
        });
        this.navList = newNavConfig;
      } else {
        let route = routes.filter((item) => item.path === path);
        let navList = [];
        route[0]?.children?.forEach((item) => {
          navList.push({
            name: item.meta.title,
            path: path + (item.path === "/" ? "" : "/" + item.path),
          });
        });
        this.navList = navList;
      }
    },
  },
};
</script>
<style scoped lang="scss">
.main {
  height: calc(100vh - 61px);
  overflow: hidden;
  position: relative;
}
.header {
}
.side {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
}
.side.scrollBar {
  &::-webkit-scrollbar {
  }
}
.view {
  position: absolute;
  left: 240px;
  right: 0;
  bottom: 0;
  top: 0;
  overflow: auto;
  &.view--style {
    left: 0;
  }
}
.side,
.view {
  &:hover {
    &::-webkit-scrollbar-thumb {
      background: #ddd;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #d2d0d0;
    }
  }
}
</style>
