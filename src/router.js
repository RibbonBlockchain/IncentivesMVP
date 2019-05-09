import Vue from "vue";
import Router from "vue-router";
import store from "./store";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";

import Landing from "./views/Landing.vue";
import UserDashboard from "./views/UserDashboard.vue";
import SponsorDashboard from "./views/SponsorDashboard.vue";
import PractitionerDashboard from "./views/PractitionerDashboard.vue";
import ManagerDashboard from "./views/ManagerDashboard.vue";
import RibbonDashboard from "./views/RibbonDashboard";
import SpecialistDashboard from "./views/SpecialistDashboard";

Vue.use(Router);

let entryUrl = null;

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/userDashboard",
      name: "userDashboard",
      components: {
        header: AppHeader,
        default: UserDashboard,
        footer: AppFooter
      }
    },
    {
      path: "/sponsorDashboard",
      name: "sponsorDashboard",
      components: {
        header: AppHeader,
        default: SponsorDashboard,
        footer: AppFooter
      }
    },
    {
      path: "/practitionerDashboard",
      name: "practitionerDashboard",
      components: {
        header: AppHeader,
        default: PractitionerDashboard,
        footer: AppFooter
      }
    },
    {
      path: "/managerDashboard",
      name: "managerDashboard",
      components: {
        header: AppHeader,
        default: ManagerDashboard,
        footer: AppFooter
      }
    },
    {
      path: "/ribbonDashboard",
      name: "ribbonDashboard",
      components: {
        header: AppHeader,
        default: RibbonDashboard,
        footer: AppFooter
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      components: {
        header: AppHeader,
        default: SpecialistDashboard,
        footer: AppFooter
      },
      beforeEnter: (to, from, next) => {
        if (store.state.login.user.hasOwnProperty("attributes")) {
          next();
        } else {
          entryUrl = to.path;
          next("/");
        }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
