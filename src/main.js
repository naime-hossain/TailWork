import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./store";

import Meta from "vue-meta";

import "@/assets/styles/sass/themes/main.scss";
import "@/assets/styles/sass/tailwind.css";
import i18n from "./lang/lang";

Vue.use(Meta, {
  keyName: "metaInfo",
  attribute: "data-vue-meta",
  ssrAttribute: "data-vue-meta-server-rendered",
  tagIDKeyName: "vmid",
  refreshOnceOnNavigation: true,
});
Vue.component(
  "default-layout",
  // The `import` function returns a Promise.
  () => import("./containers/layouts/default")
);

Vue.component(
  "card",
  // The `import` function returns a Promise.
  () => import("./components/common/Card")
);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
