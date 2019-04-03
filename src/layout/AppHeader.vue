<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="img/brand/ribbonlogo.png" style="height:100%; width:130px">
      </router-link>

      <div class="row" slot="content-header" slot-scope="{closeMenu}">
        <div class="col-6 collapse-brand">
          <router-link to="/">
            <img src="img/brand/ribbonlogo.png">
          </router-link>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            v-scroll-to="'#About'"
            href="#"
            target="_blank"
            data-toggle="tooltip"
            @click="reRoute('#About')"
          >About</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            v-scroll-to="'#Integration'"
            href="#"
            target="_blank"
            data-toggle="tooltip"
            @click="reRoute('#Integration')"
          >Integration</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            v-scroll-to="'#UseCase'"
            href="#"
            target="_blank"
            data-toggle="tooltip"
            @click="reRoute('#UseCase')"
          >Use Cases</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            v-scroll-to="'#Stakeholders'"
            href="#"
            target="_blank"
            data-toggle="tooltip"
            @click="reRoute('#Stakeholders')"
          >Stakeholders</a>
        </li>
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://github.com/ribbonblockchain"
            target="_blank"
            data-toggle="tooltip"
            title="View source code on github!"
          >
            <i class="fa fa-github"></i> Github
          </a>
        </li>
        <base-button
          class="nav-item btn btn-neutral btn-icon"
          menu-classes="dropdown-menu-xl"
          type="primary"
          @click="modals.login = true"
        >
          <i class="ni ni-ui-04 d-lg-none"></i>
          <i class="fa fa-location-arrow mr-2"></i>
          <span class="nav-link-inner--text">Login</span>
        </base-button>
      </ul>
    </base-nav>
    <modal
      :show.sync="modals.login"
      body-classes="p-0"
      modal-classes="modal-dialog-centered modal-sm"
    >
      <LoginComponent/>
    </modal>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseButton from "@/components/BaseButton";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import Modal from "@/components/Modal.vue";
import LoginComponent from "@/views/Login";

export default {
  components: {
    BaseNav,
    BaseButton,
    CloseButton,
    BaseDropdown,
    LoginComponent,
    Modal
  },
  data() {
    return {
      modals: {
        login: false,
        register: false
      },
      scrollId: "",
      options: {
        container: "#container",
        easing: "ease-in",
        offset: -60,
        force: true,
        cancelable: true,
        onStart: function(element) {
          // scrolling started
        },
        onDone: function(element) {
          // scrolling is done
        },
        onCancel: function() {
          // scrolling has been interrupted
        },
        x: false,
        y: true
      }
    };
  },
  methods: {
    reRoute(id) {
      //   console.log(this.$route.fullPath != "/");
      if (this.$route.fullPath != "/") {
        this.$router.push({ path: "/" });
        console.log(id);
        this.scrollId = id;

        setTimeout(this.scroll, 500);
      }
    },
    scroll() {
      console.log(this.scrollId);
      console.log("SCROLELD");
      this.$scrollTo(this.scrollId);
    }
  }
};
</script>
<style>
</style>
