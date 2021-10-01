import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/index.js"
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './assets/fonts/fontawesome/css/fontawesome-all.min.css'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"


import store from "./store";
Vue.config.productionTip = false;
Vue.use(BootstrapVue);


new Vue({
  router,
  store,
  base: '/pwa',

  render: (h) => h(App),
}).$mount("#app");
