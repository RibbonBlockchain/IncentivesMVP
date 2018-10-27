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
                
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="btn btn-neutral btn-icon" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <i class="fa fa-location-arrow mr-2"></i>
                        <span class="nav-link-inner--text">Try MVP</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <router-link to=""
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-money-coins"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">Sponsor Login</h6>
                                <p class="description d-none d-md-inline-block mb-0">Contribute to an incentive program. 
                                        Funding is used to pay for incentives.  
                                        View a full audit trail of how sponsorship money was used.  </p>
                            </div>
                        </router-link>
                        <router-link to=""
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-success rounded-circle text-white">
                                <i class="ni ni-istanbul"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-success mb-md-1">Manager Login</h5>
                                <p class="description d-none d-md-inline-block mb-0">Allocate incentive allowances to practitioners. 
                                        Register patients and users for a program.  
                                        View program user engagement statistics. </p>
                            </div>
                        </router-link>
                        <router-link to=""
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-info rounded-circle text-white">
                                <i class="fa fa-user-md"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-info mb-md-1">Practitioner Login</h5>
                                <p class="description d-none d-md-inline-block mb-0">Allocate tokens to users and patients based on their activity.
                                        Receive rewards for positive patient feedback.</p>
                            </div>
                        </router-link>
                        <router-link to="/userDashboard"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i class="fa fa-user"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1">User and Patient Login</h5>
                                <p class="description d-none d-md-inline-block mb-0">Manage your incentive balances and spend them where you want. 
                                        View your past history within a particular program.</p>
                            </div>
                        </router-link>
                    </div>
                </base-dropdown>

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
