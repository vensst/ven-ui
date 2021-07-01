import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VenUi from "../src/index";
import "~/styles/index.scss";
Vue.use(VenUi);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
