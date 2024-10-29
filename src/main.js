import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugin/aMap';
// 初始化高德地图的 key 和插件
// window.VueAMap.initAMapApiLoader({
//   key: '\tb8016bb1491ae0f96725638b48623166',
// });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
