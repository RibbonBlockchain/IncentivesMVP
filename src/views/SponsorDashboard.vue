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
        <section class="section section-skew  mt--100">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/sponsors/departmentofhealth.jpg'" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button type="info" size="sm" class="mr-4" @click="modals.deposit = true">Deposit</base-button>
                                    <base-button type="default" size="sm" class="float-right" @click="modals.withdraw = true">Withdraw</base-button>
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
                            <h3>Department Of Health
                                
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>South Africa</div>
                        </div>
                        <div class="mt-3  text-center">
                            <div class="row justify-content-center">
                             <div class="nav-wrapper">
                                 
            <tabs fill class="flex-md-row col-12 ">
                <card shadow slot-scope="{activeTabIndex}">
                    <tab-pane key="tab1">
                        <template slot="title">
                            <i class="ni ni-money-coins mr-2"></i>Sponsor
                        </template>
                           <table class="table table-striped" style="width:800px">
                            <thead>
                            <tr>
                                <th>Program</th>
                                <th>Date Launched</th>
                                <th>Description</th>
                                <th>More Info</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Lola</td>
                                <td>2018-07-24</td>
                                
                                <td>Completed A survey</td>
                                <td>
                                    <button class="btn btn-icon btn-2 btn-secondary" type="button" @click="modals.projectInfo = true">
	                                    <span class="btn-inner--icon"><i class="fa fa-eye"></i></span>

                                    </button>
                                </td>
                            </tr>
                            
                            </tbody>
                        </table>
                    </tab-pane>

                    <tab-pane key="tab2">
                        <template slot="title">
                            <i class="ni ni-calendar-grid-58 mr-2"></i>History
                        </template>

<div class="row">
    <div class="col-12" style="width:100%">
                                 <table class="table table-striped" style="width:800px">
                            <thead>
                            <tr>
                                <th>Program</th>
                                <th>Donation Date</th>
                                <th>Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Lola</td>
                                <td>2018-07-24</td>
                                <td>1000 RBN</td>
                                
                            </tr>
                            <tr>
                                <td>Lola</td>
                                <td>2018-07-26</td>
                                <td>1000 RBN</td>
                                
                            </tr>
                            <tr>
                                <td>Lola</td>
                                <td>2018-07-27</td>
                                <td>1000 RBN</td>
                                
                            </tr>
                            <tr>
                                <td>Lola</td>
                                <td>2018-07-30</td>
                                <td>1000 RBN</td>
                                
                            </tr>
                            
                            </tbody>
                        </table>
    </div>
</div>
                    </tab-pane>
                     <tab-pane key="tab3">
                        <template slot="title">
                            <i class="fa fa-pie-chart"></i> Analytics
                        </template>
                        <div class="row" style="width:800px">
                        <div class="col-12">
                        <h5>Historic Donation Distribution</h5>
                           <vue-plotly :data="data" :layout="layout" :options="options" :watchedShallow="false" :autoResize="true"/>
                        </div>
                        </div>
                           

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
    <!-- MODALS -->
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
       <!-- withdraw modal -->
    <modal :show.sync="modals.withdraw">
    <h4 slot="header" class="modal-title" id="modal-title-default">Withdraw your Ribbon Tokens</h4>
        <label>Recipient Address</label>              
       
       
       <div class="row" >
       <div class="col-7">
       <input type="text" class="form-control form-control-alternative" v-model="withdrawAddress">  
       </div>
       <div class="col-5 m-r-2">
               <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="btn btn-neutral btn-icon" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <i class="ni ni-circle-08"></i>
                        <span class="nav-link-inner--text">Contacts</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <a to="/userDashboard"
                        style="padding:10px"
                           class="media d-flex align-items-center"
                           @click="contactSelect('0x90E18A928Cc22173154B91b94a89C0a0c2B933A0')">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="fa fa-archive"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-primary mb-md-1">DOH Cold Storage</h5>
                                <p class="description d-none d-md-inline-block mb-0">0x90E18A928Cc22173154B91b94a89C0a0c2B933A0</p>
                            </div>
                        </a>
                    </div>
                </base-dropdown>
       </div>
       </div>

          
          <span style="padding-bottom:20px"/>
          <br>
          <label style="margin-top:30px">Withdraw Amount</label>
          <base-slider :range={min:0,max:walletBalance} v-model="withdrawValue"/><br>
            
            <div>
                <div class="row">
                <div class=col-7>
                    <input type="number" class="form-control form-control-alternative" v-model="withdrawValue">
                </div>
                <div class=col-5>
                    <button  type="button" class="btn btn-neutral btn-icon" @click="setMaxWithdraw">Max</button>
                </div>
                </div>
            </div>
                <template slot="footer">
                    <base-button type="primary">Withdraw</base-button>
                    <base-button type="link" class="ml-auto" @click="modals.withdraw = false">Cancel
                    </base-button>
                </template>
    </modal>


    <!-- Deposit Window -->
    <modal :show.sync="modals.deposit">
    <h4 slot="header" class="modal-title" id="modal-title-default">Deposit Ribbon Tokens</h4>
        <div class="row">
            <div class="col-12 text-center">
                <p>You can deposit Ribbon tokens to your account. Scan the QR code with any web3 wallet.</p>
            </div>
            </div>
                    
            <div class="row">
            <div class="col-12 text-center">
                <img v-lazy="'img/other/qr.png'" class="" style="width:135px; cursor: pointer">
                <p>Alternatively, you can send Ribbon tokens to this address:
                <label> 0x90E18A928Cc22173154B91b94a89C0a0c2B933A0</label>
                </p>
            </div>
            </div>      
    </modal>
    </div>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import Modal from "@/components/Modal.vue";
import BaseDropdown from "@/components/BaseDropdown";
import VuePlotly from "@statnett/vue-plotly";

export default {
  components: {
    Tabs,
    TabPane,
    Modal,
    BaseDropdown,
    VuePlotly
  },
  data() {
    return {
      modals: {
        projectInfo: false,
        deposit: false,
        withdraw: false
      },
      withdrawValue: 0,
      walletBalance: 3724,
      customAddress: false,
      withdrawAddress: "",
      data: [
        {
          values: [19, 26, 505],
          labels: ["Sponsorship 1", "Sponsorship 2", "Sponsorship 3"],
          type: "pie",
          hole: 0.4
        }
      ],
      layout: {
        height: 650,
        width: 750,
        margin: {
          l: 0,
          r: 0,
          b: 0,
          t: 50,
          pad: 5
        }
      },
      options: {
        responsive: true,
        showLink: false,
        displayModeBar: false
      }
    };
  },
  methods: {
    setMaxWithdraw() {
      this.withdrawValue = this.walletBalance;
    },
    contactSelect(address) {
      this.withdrawAddress = address;
    }
  }
};
</script>
<style>
</style>
