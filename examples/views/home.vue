<template>
  <div class="home">
    <div class="logo">ven-ui</div>
    <ven-button type="primary" @click="jumpPage('/component')"
      >开始使用</ven-button
    >
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {},

  methods: {
    jumpPage(url) {
      this.$router.push(url);
    },
  },
};
</script>
<style scoped lang="scss">
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo {
    color: #409eff;
    font-size: 80px;
    font-weight: 600;
    margin-bottom: 30px;
  }
}
</style>
