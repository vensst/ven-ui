import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import hljs from "highlight.js"; //代码高亮
import DemoBlock from "./components/DemoBlock.vue"; //全局注册文档容器组件
import VenUi from "../lib/ven-ui.common.js"; //导入组件

import "highlight.js/styles/color-brewer.css"; //高亮样式
import "./assets/styles/common.scss"; //公共样式
import "./demo-styles/index.scss"; //文档样式
import "../lib/index.css"; //组件样式

Vue.component("DemoBlock", DemoBlock);
Vue.use(VenUi);

// eslint-disable-next-line no-unused-vars
router.afterEach((route) => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll("pre code:not(.hljs)");
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
