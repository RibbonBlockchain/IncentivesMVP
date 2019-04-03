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
                        <div class="row justify-content-center  mb-5">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/practitioners/communityhealthcarworker.JPG'" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button type="primary" size="sm" class="float-left" @click="modals.deposit = true">Deposit</base-button>
                                    <base-button type="info" size="sm" class="mr-4" @click="modals.withdraw = true">Withdraw</base-button>
                                    <base-button type="default" size="sm" class="float-right" @click="modals.spend = true">Spend</base-button>
                                    <hr class="pt-0 m-3">
                            <button  type="button" class="btn btn-primary btn-icon mt-2 mr-4" @click="modals.patientInteraction = true">Patient Interaction</button>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1 pb-0 mb-0">
                                <div class="card-profile-stats d-flex justify-content-center  pb-0 mb-0">
                                    <div>
                                        <span class="heading">48702</span>
                                        <span class="description">Ribbon Tokens</span>
                                    </div>
                                    <div>
                                        <span class="heading">R4870.20</span>
                                        <span class="description">Equivalent Value</span>
                                    </div>
                                </div>
                                <hr class="p-0 m-0">
                                <div class="card-profile-stats d-flex justify-content-center pt-0 mt-0 ml-4">
                                    <div>
                                        <span class="description">Remaining Allowance<strong>2918</strong><br>
                                        Total people helped: <strong>4521</strong><br>
                                        People helped last month: <strong>18</strong></span>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5 mt--100">
                            <h3>Ntombi Afua
                            </h3>
                            <div class="h6"><i class="ni business_briefcase-24 mr-2"></i>Community healthcare worker - She Conquers</div>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Gauteng, South Africa</div>
                            
                        </div>
                        <hr>
                                                 <div class="mt-3  text-center">
                            <div class="row justify-content-center">
                             <div class="nav-wrapper">
                                      <table class="table table-striped" style="width:100%">
                            <thead>
                            <tr>
                                <th>Patient Name</th>
                                <th>Date</th>
                                <th>Interaction</th>
                                <th>Tokens Awarded</th>
                                <th>Personal Tokens Received</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Shauntae Nolwazi</td>
                                <td>2018-10-28</td>
                                <td>General Checkup</td>
                                <td>100 RBN</td> 
                                <td>5 RBN</td> 
                            </tr>
                            <tr>
                                <td>Nomsa Afeworki</td>
                                <td>2018-10-28</td>
                                <td>General Checkup</td>
                                <td>100 RBN</td> 
                                <td>5 RBN</td> 
                            </tr>
                            <tr>
                                <td>Anonymous</td>
                                <td>2018-10-27</td>
                                <td>HIV Test</td>
                                <td>1500 RBN</td> 
                                <td>75 RBN</td> 
                            </tr>
                            <tr>
                                <td>Batsheva Muthoni</td>
                                <td>2018-10-27</td>
                                <td>General Checkup</td>
                                <td>100 RBN</td> 
                                <td>5 RBN</td> 
                                
                            </tr>
                            <tr>
                                <td>Afiwa Edmund</td>
                                <td>2018-10-27</td>
                                <td>TB Medication Dispensary</td>
                                <td>500 RBN</td> 
                                <td>25 RBN</td> 
                            </tr>
                            
                            </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">
        <i class="fa fa-angle-left"></i>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">
        <i class="fa fa-angle-right"></i>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
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
                           class="media d-flex align-items-center">
                            <img v-lazy="'img/theme/team-1-800x800.jpg'" class="rounded-circle" style="width:50px">
                            <div class="media-body ml-3"
                            @click="contactSelect('0x3f04D2d3711507f81e0Fcd0E8c1810BCE0B3CD84')">
                                <h5 class="heading text-primary mb-md-1">Ottoline Lambert</h5>
                                <p class="description d-none d-md-inline-block mb-0">0x3f04D2d3711507f81e0Fcd0E8c1810BCE0B3CD84</p>
                            </div>
                        </a>
                        <a to="/userDashboard"
                        style="padding:10px"
                           class="media d-flex align-items-center"
                           @click="contactSelect('0x190253F903cdE8298e572624aed44085BC04E810')">
                            <img v-lazy="'img/theme/team-2-800x800.jpg'" class="rounded-circle" style="width:50px">
                            <div class="media-body ml-3">
                                <h5 class="heading text-primary mb-md-1">Princess Poole</h5>
                                <p class="description d-none d-md-inline-block mb-0">0x190253F903cdE8298e572624aed44085BC04E810</p>
                            </div>
                        </a>
                        <a to="/userDashboard"
                        style="padding:10px"
                           class="media d-flex align-items-center"
                           @click="contactSelect('0x759c17Afe27707A9C2e3c06c943ac1df92166d0A')">
                            <img v-lazy="'img/theme/team-3-800x800.jpg'" class="rounded-circle" style="width:50px">
                            <div class="media-body ml-3">
                                <h5 class="heading text-primary mb-md-1">Kolton Dunn</h5>
                                <p class="description d-none d-md-inline-block mb-0">0x759c17Afe27707A9C2e3c06c943ac1df92166d0A</p>
                            </div>
                        </a>
                        
                        <a to="/userDashboard"
                        style="padding:10px"
                           class="media d-flex align-items-center"
                           @click="contactSelect('0x90E18A928Cc22173154B91b94a89C0a0c2B933A0')">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="fa fa-mobile"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-primary mb-md-1">Personal Wallet on phone</h5>
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
    <!-- Spend Window -->
    <modal :show.sync="modals.spend">
    <h4 slot="header" class="modal-title" id="modal-title-default">Spend your Ribbon Tokens</h4>
        <div class="row">
            <div class="col-4">
                <img v-lazy="'img/stores/clicks.png'" class="" style="width:135px; cursor: pointer; margin-top:35px;" @click="photoClick('Clicks')">
            </div>
            <div class="col-4">
                <img v-lazy="'img/stores/dischem.JPG'" class="" style="width:135px; cursor: pointer" @click="photoClick('Dischem')">
            </div>
            <div class="col-4">
                <img v-lazy="'img/stores/gautrain.jpg'" class="" style="width:135px; cursor: pointer; margin-top:10px" @click="photoClick('Gautrain')">
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-4">
                <img v-lazy="'img/stores/metrobus.jpg'" class="" style="width:135px; cursor: pointer" @click="photoClick('Metrobus')">
            </div>
            <div class="col-4">
                <img v-lazy="'img/stores/picknpay.jpg'" class="" style="width:135px; cursor: pointer; margin-top:45px" @click="photoClick('PicknPay')">
            </div>
            <div class="col-4">
                <img v-lazy="'img/stores/shopright.png'" class="" style="width:135px; cursor: pointer" @click="photoClick('Shopright')">
            </div>
        </div>        
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
    <!-- Patient Interaction Window -->
    <modal :show.sync="modals.patientInteraction">
    <h4 slot="header" class="modal-title" id="modal-title-default">Reward A Patient Activity</h4>
        <div class="row">
            <div class="col-12 text-center">
                <p>Reward a patient based on a predefined set of activities. Scan their QR code to send them their reward.</p>
            </div>
            </div>
                    
             <label>Patient Address</label>              
    
       <div class="row" >
       <div class="col-6 pr-0">
       <input type="text" class="form-control form-control-alternative" v-model="withdrawAddress" style="margin-right:20px">  
       </div>
       <div class="col-4 m-r-2">
               <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="btn btn-neutral btn-icon" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <i class="ni ni-circle-08"></i>
                        <span class="nav-link-inner--text">Contacts</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <a to="/userDashboard"
                        style="padding:10px"
                           class="media d-flex align-items-center">
                            <img v-lazy="'img/theme/team-5-800x800.jpg'" class="rounded-circle" style="width:50px">
                            <div class="media-body ml-3"
                            @click="contactSelect('0x3f04D2d3711507f81e0Fcd0E8c1810BCE0B3CD84')">
                                <h5 class="heading text-primary mb-md-1">Ottoline Lambert</h5>
                                <p class="description d-none d-md-inline-block mb-0">0x3f04D2d3711507f81e0Fcd0E8c1810BCE0B3CD84</p>
                            </div>
                        </a>
                        <a to="/userDashboard"
                        style="padding:10px"
                           class="media d-flex align-items-center"
                           @click="contactSelect('0x190253F903cdE8298e572624aed44085BC04E810')">
                            <img v-lazy="'img/theme/team-2-800x800.jpg'" class="rounded-circle" style="width:50px">
                            <div class="media-body ml-3">
                                <h5 class="heading text-primary mb-md-1">Princess Poole</h5>
                                <p class="description d-none d-md-inline-block mb-0">0x190253F903cdE8298e572624aed44085BC04E810</p>
                            </div>
                        </a>
                        <a to="/userDashboard"
                        style="padding:10px"
                           class="media d-flex align-items-center"
                           @click="contactSelect('0x759c17Afe27707A9C2e3c06c943ac1df92166d0A')">
                            <img v-lazy="'img/theme/team-3-800x800.jpg'" class="rounded-circle" style="width:50px">
                            <div class="media-body ml-3">
                                <h5 class="heading text-primary mb-md-1">Kolton Dunn</h5>
                                <p class="description d-none d-md-inline-block mb-0">0x759c17Afe27707A9C2e3c06c943ac1df92166d0A</p>
                            </div>
                        </a>
                    </div>
                </base-dropdown>
       </div>
       <div class="col-1">
           <button type="button" class="btn btn-neutral btn-icon" @click="openQRScanner"><i class="fa fa-camera"></i></button>
       </div>
       </div>
                     <label class=" pt-5">Patient Activities</label>              
            <div class="row">
            
            <div class="col-sm-12">
                               <base-dropdown class="nav-item pb-2" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="btn btn-neutral btn-icon" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <i class="fa fa-hand-pointer-o"></i>
                        <span class="nav-link-inner--text">Activities</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <a to="/userDashboard"
                        style="padding:10px; cursor: pointer;"
                           class="media d-flex align-items-center" >
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="fa fa-search"></i>
                            </div>
                            <div class="media-body ml-3"
                            @click="awardPatient('General Checkup', 100)">
                                <h5 class="heading text-primary mb-md-1">General Checkup</h5>
                                <p class="description d-none d-md-inline-block mb-0">100 Ribbon Tokens</p>
                            </div>
                        </a>
                        <a to="/userDashboard"
                        style="padding:10px; cursor: pointer;"
                           class="media d-flex align-items-center"
                           @click="awardPatient('HIV Test', 1500)">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="fa fa-question"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-primary mb-md-1">HIV Test</h5>
                                <p class="description d-none d-md-inline-block mb-0">1500</p>
                            </div>
                        </a>
                        <a to="/userDashboard"
                        style="padding:10px; cursor: pointer;"
                           class="media d-flex align-items-center"
                           @click="awardPatient('STD Test', 800)">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="fa fa-male"></i> <i class="fa fa-female"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-primary mb-md-1">STD Test</h5>
                                <p class="description d-none d-md-inline-block mb-0">800  Ribbon Tokens</p>
                            </div>
                        </a>
                        
                        <a to="/userDashboard"
                        style="padding:10px; cursor: pointer;"
                           class="media d-flex align-items-center"
                           @click="awardPatient('TB Medication Dispensary', 500)">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="fa fa-hospital-o"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-primary mb-md-1">TB Medication Dispensary</h5>
                                <p class="description d-none d-md-inline-block mb-0">500 Ribbon Tokens</p>
                            </div>
                        </a>
                        <a to="/userDashboard"
                        style="padding:10px; cursor: pointer;"
                           class="media d-flex align-items-center"
                           @click="awardPatient('Complected Antibiotics course', 600)">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="fa fa-medkit"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-primary mb-md-1">Complected Antibiotics course</h5>
                                <p class="description d-none d-md-inline-block mb-0">600 Ribbon Tokens</p>
                            </div>
                        </a>
                    </div>
                </base-dropdown>
                <div v-if="rewardsToSendTotal>0">
                <table class="table mb-0">
                <thead>            
                </thead>
                        <tbody>
                            <tr v-for="reward in rewardsToSend">
                                <td>{{reward.award}}</td>
                                <td>{{reward.value}}</td>
                                <td> <base-button type="secondary" icon="fa fa-trash" @click="removeAward(reward)"></base-button></td>
                            </tr>
                        </tbody>
                </table>
                <p class="description text-left">Total: <strong>{{rewardsToSendTotal}}</strong></p>
                </div>
            </div>
            </div>      
    <template slot="footer">
                    <base-button type="primary" :disabled="rewardsToSendTotal==0 || withdrawAddress==''">Award</base-button>
                    <base-button type="link" class="ml-auto" @click="modals.patientInteraction = false">Cancel
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
        withdraw: false,
        spend: false,
        deposit: false,
        patientInteraction: false
      },
      withdrawValue: 0,
      walletBalance: 3724,
      customAddress: false,
      withdrawAddress: "",
      rewardsToSend: [],
      rewardsToSendTotal: 0
    };
  },
  methods: {
    setMaxWithdraw() {
      this.withdrawValue = this.walletBalance;
    },
    contactSelect(address) {
      this.withdrawAddress = address;
    },
    openQRScanner() {
      this.$notify({
        group: "foo",
        title: "Scanning QR codes is not yet enabled",
        text: "Please either enter the address directly or use the contacts"
      });
    },
    photoClick(companyName) {
      console.log(companyName);
      this.$notify({
        group: "foo",
        title: "Spending of Ribbon tokens is not yet enabled",
        text: "Using your Ribbon tokens at an affiliate is not yet possib.le"
      });
    },
    awardPatient(award, value) {
      this.rewardsToSend.push({ award: award, value: value });
      this.rewardsToSendTotal += value;
    },
    removeAward(reward) {
      var index = this.rewardsToSend.indexOf(reward);
      if (index > -1) {
        this.rewardsToSend.splice(index, 1);
      }
      this.rewardsToSendTotal -= reward.value;
    }
  }
};
</script>
<style>
/* Container needed to position the button. Adjust the width as needed */
.container {
  position: relative;
  width: 50%;
}

/* Make the image responsive */
.container img {
  width: 100%;
  height: auto;
}

/* Style the button and place it in the middle of the container/image */
.container .viewBTN {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.container .viewBTN:hover {
  background-color: black;
}
</style>

