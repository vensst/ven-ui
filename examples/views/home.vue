<template>
  <div class="home">
    <ven-button @click="jumpPage('/component')">开始使用</ven-button>
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
<style scoped lang="scss"></style>
