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
                                    <base-button type="default" size="sm" class="float-right" @click="modals.spend = true">Spend</base-button>
                                
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
                            
                        </div>
                        <div class="mt-5  border-top text-center">
                           <table class="table table-striped">
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>Program</th>
                                <th>Action</th>
                                <th>Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>2018-07-24</td>
                                <td>Lola</td>
                                <td>Completed A survey</td>
                                <td>200</td>
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
        withdraw: false,
        spend: false
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
    },
    contactSelect(address) {
      this.withdrawAddress = address;
    },
    photoClick(companyName) {
      console.log(companyName);
      this.$notify({
        group: "foo",
        title: "Spending of Ribbon tokens is not yet enabled",
        text: "Using your Ribbon tokens at an affiliate is not yet possib.le"
      });
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
