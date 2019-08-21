require("dotenv").config();

import Vue from "vue";
import vSelect from "vue-select";
import VueMask from "v-mask";
import * as Vmoment from "vue-moment";
import moment from 'moment-timezone'
import * as VueScrollTo from "vue-scrollto";
import App from "./App.vue";
import router from "./router";
import Notifications from "vue-notification";
import store from "./store";
import Argon from "./plugins/argon-kit";
import BootstrapVue from 'bootstrap-vue';

import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";
import aws_exports from "./aws-exports";

Vue.use(Notifications);
Vue.use(VueMask);
Vue.use(Vmoment);
Vue.use(VueScrollTo);
Vue.use(BootstrapVue);

moment.tz.setDefault('Africa/Johannesburg')

Vue.component("v-select", vSelect);

Vue.config.productionTip = false;


Amplify.configure(aws_exports);

Vue.use(AmplifyPlugin, AmplifyModules);

Vue.use(Argon);

new Vue({
  router,
  render: h => h(App),
  store
}).$mount("#app");
