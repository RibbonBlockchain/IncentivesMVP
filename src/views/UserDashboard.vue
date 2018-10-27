<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/theme/team-4-800x800.jpg'" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button type="info" size="sm" class="mr-4" @click="modals.withdraw = true">Withdraw</base-button>
                                    <base-button type="default" size="sm" class="float-right">Spend</base-button>
                                
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">3724</span>
                                        <span class="description">Ribbon Tokens</span>
                                    </div>
                                    <div>
                                        <span class="heading">R37.24</span>
                                        <span class="description">Equivalent Value</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>Jessica Jones
                                <span class="font-weight-light">, 27</span>
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Johannesburg South Africa</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer</div>
                            <div><i class="ni education_hat mr-2"></i>University of Computer Science</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
                                    <a href="#">Show more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
                <div class="col-md-4">
            
        </div>
            </div>
        </section>
    <!-- MODALS -->
    <!-- withdraw modal -->
    <modal :show.sync="modals.withdraw">
                <h4 slot="header" class="modal-title" id="modal-title-default">Withdraw your Ribbon Tokens</h4>
        <label>Recipient Address</label>              
       
        <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="btn btn-neutral btn-icon" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <i class="fa fa-location-arrow mr-2"></i>
                        <span class="nav-link-inner--text">Select Contact</span>
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
                        <div>
                        
                        </div>
                    </div>
                </base-dropdown>
          <span style="padding-bottom:20px"/>
          <br>
          <label style="margin-top:30px">Withdraw Amount</label>
          <base-slider :range={min:0,max:walletBalance} v-model="withdrawValue"/><br>
            
            <div>
                <div class="row">
                <div class=col-10>
                    <input type="number" class="form-control form-control-alternative" v-model="withdrawValue">
                </div>
                <div class=col-2>
                    <button style="margin-top:10px" type="button" class="btn btn-secondary btn-sm" @click="setMaxWithdraw">Max</button>
                </div>
                </div>
            </div>
            

          

              
                <template slot="footer">
                    <base-button type="primary">Withdraw</base-button>
                    <base-button type="link" class="ml-auto" @click="modals.withdraw = false">Cancel
                    </base-button>
                </template>
    </modal>
    </div>
</template>
<script>
import Modal from "@/components/Modal.vue";
import BaseDropdown from "@/components/BaseDropdown";
export default {
  components: {
    Modal,
    BaseDropdown
  },
  data() {
    return {
      modals: {
        withdraw: false
      },
      withdrawValue: 0,

      walletBalance: 3724
    };
  },
  methods: {
    setMaxWithdraw() {
      this.withdrawValue = this.walletBalance;
    }
  }
};
</script>
<style>
</style>
