import Vue from "vue";
import Notifications from 'vue-notification'
import App from "./App.vue";
import router from "./router";
import store from './store'
import Argon from "./plugins/argon-kit";
Vue.use(Notifications)

var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)
Vue.config.productionTip = false;
Vue.use(Argon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
