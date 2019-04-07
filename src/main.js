require("dotenv").config();

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Notifications from "vue-notification";
import store from './store'
import Argon from "./plugins/argon-kit";
import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";
import aws_exports from "./aws-exports";

Vue.use(Notifications);
var VueScrollTo = require("vue-scrollto");

Vue.use(VueScrollTo);
Vue.config.productionTip = false;

Amplify.configure(aws_exports);

Vue.use(AmplifyPlugin, AmplifyModules);
Vue.use(Argon);

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount("#app");
