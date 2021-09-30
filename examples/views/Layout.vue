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
.page-container {
  .content {
    padding-top: 50px;

    > {
      h3 {
        margin: 55px 0 20px;
      }

      table {
        border-collapse: collapse;
        width: 100%;
        background-color: #fff;
        font-size: 14px;
        margin-bottom: 45px;
        line-height: 1.5em;

        strong {
          font-weight: normal;
        }

        td,
        th {
          border-bottom: 1px solid #dcdfe6;
          padding: 15px;
          max-width: 250px;
        }

        th {
          text-align: left;
          white-space: nowrap;
          color: #909399;
          font-weight: normal;
        }

        td {
          color: #606266;
        }

        th:first-child,
        td:first-child {
          padding-left: 10px;
        }
      }

      ul:not(.timeline) {
        margin: 10px 0;
        padding: 0 0 0 20px;
        font-size: 14px;
        color: #5e6d82;
        line-height: 2em;
      }
    }
  }
}
</style>
