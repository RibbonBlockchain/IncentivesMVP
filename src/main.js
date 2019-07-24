require("dotenv").config();

import Vue from "vue";
import vSelect from "vue-select";
import VueMask from "v-mask";
import * as moment from "vue-moment";
import * as VueScrollTo from "vue-scrollto";
import App from "./App.vue";
import router from "./router";
import Notifications from "vue-notification";
import store from "./store";
import Argon from "./plugins/argon-kit";
import Provider from "./graphql";

Vue.use(Notifications);
Vue.use(VueMask);
Vue.use(moment);
Vue.use(VueScrollTo);

Vue.component("v-select", vSelect);

Vue.config.productionTip = false;

Vue.use(Argon);

new Vue({
  router,
  render: h => h(App),
  provide: Provider.provide(),
  store
}).$mount("#app");
