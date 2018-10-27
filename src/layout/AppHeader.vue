<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <a slot="brand" class="navbar-brand mr-lg-5" href="https://demos.creative-tim.com/vue-argon-design-system/documentation">
                <img src="img/brand/white.png">
            </a>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" v-scroll-to="'#About'" href="#" target="_blank"
                       data-toggle="tooltip">
                        About
                        
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" v-scroll-to="'#Integration'" href="#" target="_blank"
                       data-toggle="tooltip">
                        Integration
                        
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" v-scroll-to="'#UseCase'" href="#" target="_blank"
                       data-toggle="tooltip">
                        Use Cases
                        
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" v-scroll-to="'#Stakeholders'" href="#" target="_blank"
                       data-toggle="tooltip">
                        Stakeholders
                        
                    </a>
                </li>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/ribbonblockchain" target="_blank"
                       data-toggle="tooltip" title="View source code on github!">
                        <i class="fa fa-github"></i> Github
                    </a>
                </li>
                
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="https://www.creative-tim.com/product/vue-argon-design-system" target="_blank"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-location-arrow mr-2"></i>
                </span>
                        <span class="nav-link-inner--text">View Demo</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
</style>
