<template>
  <div class="side">
    <ul class="nav">
      <template v-for="item in navList">
        <li class="nav-item" :key="item.path">
          <template v-if="item.path">
            <router-link
              :to="item.path"
              :class="[
                'nav-item__title',
                currentRoute === item.path ? 'nav--active' : '',
              ]"
              >{{ item.name }}</router-link
            >
          </template>
          <template v-if="item.groups">
            <a>{{ item.name }}</a>
            <template v-for="group in item.groups">
              <div class="nav-group" :key="group.groupName">
                <div class="nav-group__title">{{ group.groupName }}</div>
                <ul class="sub-nav">
                  <template v-for="item in group.list">
                    <li :key="item.path">
                      <router-link
                        :class="[
                          'nav-item__title',
                          currentRoute === item.path ? 'nav--active' : '',
                        ]"
                        :to="item.path"
                        >{{ item.title }}</router-link
                      >
                    </li>
                  </template>
                </ul>
              </div>
            </template>
          </template>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
/**
 * @name: SideNav
 * @author: yfhu
 * @date: 2021/9/26 11:20
 * @description：SideNav.vue
 * @update: 2021/9/26 11:20
 */
export default {
  name: "SideNav",
  mixins: [],
  components: {},
  props: {
    navList: {
      type: Array,
      default: () => [],
    },
  },
  directives: {},
  data() {
    return {};
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="scss">
.side {
  width: 240px;
}
.nav-item {
  a {
    font-size: 16px;
    color: #333;
    font-weight: 700;
    display: block;
    line-height: 40px;
    padding: 0 20px;
  }
  a.nav-item__title {
    font-size: 14px;
    color: #444;
    font-weight: 400;
    &:hover {
      color: #409eff;
    }
    &.nav--active {
      color: #409eff;
    }
  }
}
.nav-group__title {
  font-size: 12px;
  color: #999;
  line-height: 26px;
  padding: 0 20px;
}
</style>
