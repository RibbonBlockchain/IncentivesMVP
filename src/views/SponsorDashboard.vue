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
                                    <base-button type="info" size="sm" class="mr-4">Connect</base-button>
                                    <base-button type="default" size="sm" class="float-right">Message</base-button>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">22</span>
                                        <span class="description">Friends</span>
                                    </div>
                                    <div>
                                        <span class="heading">10</span>
                                        <span class="description">Photos</span>
                                    </div>
                                    <div>
                                        <span class="heading">89</span>
                                        <span class="description">Comments</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>Johannesburg, South Africa
                                <span class="font-weight-light">, 27</span>
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Bucharest, Romania</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer</div>
                            <div><i class="ni education_hat mr-2"></i>University of Computer Science</div>
                        </div>
                        <div class="mt-5 py-1 border-top text-center">
                            <div class="row justify-content-center">
                             <div class="nav-wrapper">
                                 
            <tabs fill class="flex-md-row col-12 ">
                <card shadow slot-scope="{activeTabIndex}">
                    <tab-pane key="tab1">
                        <template slot="title">
                            <i class="ni ni-money-coins mr-2"></i>Sponsor
                        </template>

                         
                           <table class="table table-striped">
                            <thead>
                            <tr>
                                <th>Program</th>
                                <th>Date Launched</th>
                                <th>Description</th>
                                <th>View</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>2018-07-24</td>
                                <td>Lola</td>
                                <td>Completed A survey</td>
                                <td>
                                    <button class="btn btn-icon btn-2 btn-secondary" type="button" @click="modals.projectInfo = true">
	                                    <span class="btn-inner--icon"><i class="fa fa-eye"></i></span>

                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>2018-07-28</td>
                                <td>Lola</td>
                                <td>Completed A survey</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <td>2018-08-30</td>
                                <td>Lola</td>
                                <td>Completed A survey</td>
                                <td>350</td>
                            </tr>
                            </tbody>
                        </table>
                    </tab-pane>

                    <tab-pane key="tab2">
                        <template slot="title">
                            <i class="ni ni-calendar-grid-58 mr-2"></i>History
                        </template>

                        <p class="description">Raw denim you probably haven't heard of them jean shorts
                            Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                            cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                            keffiyeh dreamcatcher synth.</p>
                    </tab-pane>
                </card>
            </tabs>                 
            </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    <!-- Program Info Window -->
    <modal :show.sync="modals.projectInfo">
    <h4 slot="header" class="modal-title" id="modal-title-default">Lola (She Conquers)</h4>
        <div class="row">
            <div class="col-12 text-center">
                <img v-lazy="'img/programs/sheconquers.png'" class="center" style="width:200px; cursor: pointer; text-align:center" @click="photoClick('Metrobus')">
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                
                <p class="text-justify">Dolor commodo enim reprehenderit veniam exercitation. Ad amet est consequat anim excepteur amet nisi voluptate consectetur eu officia pariatur nisi eu. Reprehenderit ad reprehenderit officia enim excepteur ad ullamco.
                    <br>
                    <br>
                    More information on the Lola project can be found <a href="">Here</a>
                </p>
            </div>
        </div>
        <hr>
          <div class="row">
            <div class="col-12">
          <label>Donation Amount</label>
          <base-slider :range={min:0,max:walletBalance} v-model="withdrawValue"/><br>
                </div>
                <div class="col-7">
                    <input type="number" class="form-control form-control-alternative" v-model="withdrawValue">
                </div>
                <div class="col-5">
                    <button  type="button" class="btn btn-neutral btn-icon" @click="setMaxWithdraw">Max</button>
                </div>
                </div>
                <template slot="footer">
                    <base-button type="primary">Donate</base-button>
                    <base-button type="link" class="ml-auto" @click="modals.withdraw = false">Cancel
                    </base-button>
                </template>
        
    </modal>
    </div>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import Modal from "@/components/Modal.vue";
import BaseDropdown from "@/components/BaseDropdown";
export default {
  components: {
    Tabs,
    TabPane,
    Modal
  },
  data() {
    return {
      modals: {
        projectInfo: false
      },
      withdrawValue: 0,
      walletBalance: 3724,
      customAddress: false,
      withdrawAddress: ""
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
