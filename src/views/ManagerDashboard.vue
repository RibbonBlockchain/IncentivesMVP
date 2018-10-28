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
        <section class="section section-skew mt--100">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/managers/reaction.png'" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <!-- <base-button type="info" size="sm" class="mr-4" @click="transferManagement">Transfer Management</base-button> -->
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">Manager of of 1 program</span>
                                        
                                            <!-- <base-dropdown tag="li" class="nav-item description">
                                <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                                    <i class="ni ni-collection d-lg-none"></i>
                                    <span class="nav-link-inner--text">Select Program</span>
                                </a>
                                <router-link to="/landing" class="dropdown-item">Lola</router-link>
                            </base-dropdown> -->
                            <span class="description">Lola</span>
                                    </div>
    
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>Re-Action!
                                
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
                            <i class="fa fa-user-md"></i> Practitioners and Programs
                        </template>
                           <table class="table table-striped" style="width:800px">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Last Active</th>
                                <th>Total Awarded</th>
                                <th>Remaining Allowance</th>
                                <th>Edit</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Lola Program API</td>
                                <td>2018-10-28</td>
                                <td>123891 RBN</td>
                                <td>3759 RBN</td> 
                                <td>
                                    <button class="btn btn-icon btn-2 btn-secondary" type="button" @click="modals.practitioner = true">
	                                    <span class="btn-inner--icon"><i class="fa fa-pencil"></i></span>
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </tab-pane>

                    <tab-pane key="tab2">
                        <template slot="title">
                            <i class="fa fa-user"></i> Users and Patients
                        </template>

                        <div class="row">
                            <div class="col-12" style="width:100%">
                                 <table class="table table-striped" style="width:800px">
                            <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Last Active</th>
                                <th>Balance</th>
                                <th>remove</th>
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
                            <i class="fa fa-cogs"></i> Advanced
                        </template>
                           <div class="row" style="width:800px">
                        <div class="col-4">
                            <base-button type="secondary" class="mr-4" @click="advancedFunction">Transfer Management</base-button>
                        </div>
                        <div class="col-4">
                            <base-button type="secondary" class="mr-4" @click="advancedFunction">Change Program Name</base-button>
                        </div>
                           </div>
                        
                        <div class="col-4">
                            <base-button type="warning" class="mr-4" @click="advancedFunction">Delete Program</base-button>
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
    <!-- Deposit Window -->
    <modal :show.sync="modals.practitioner">
    <h4 slot="header" class="modal-title" id="modal-title-default">Lola Program API</h4>
        <div class="row">
            <div class="col-12 text-center">
                <p>This practitioner represent the wallet used to send RBN tokens for the main application API. Any interaction with the app that results in token distribution will go through this API.</p>
            </div>
            </div>
                    
             <table class="table">
                            <thead>
                            <!-- <tr>
                                <th>Program</th>
                                <th>Donation Date</th>
                                <th>Amount</th>
                            </tr> -->
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Total Tokens Awarded</td>
                                    <td>123891.19 RBN</td>   
                                </tr>
                                <tr>
                                    <td>Remaining Allowance</td>
                                    <td>{{programAllowance}} RBN</td>   
                                </tr>
                                <tr>
                                    <td>People awarded</td>
                                    <td>553</td>   
                                </tr>
                                <tr>
                                    <td>Date Created</td>
                                    <td>2018-10-05</td>   
                                </tr>
                                <tr>
                                    <td>Last active</td>
                                    <td>2018-10-28</td>   
                                </tr>
                            </tbody>
                        </table>
                        <hr>
                        <div class="row">
            <div class="col-5 text-center">
            Modify Allowance: 
            </div>
            
            <div class="col-7 text-center">
                <button class="btn btn-icon btn-3 btn-primary btn-sm" type="button" @click="modifyAllowance(5000)">
                <span class="btn-inner--icon"><i class="fa fa-arrow-up"></i></span>
                <span class="btn-inner--text">Increase</span>
            </button>
            <button class="btn btn-icon btn-3 btn-primary btn-sm" type="button" @click="modifyAllowance(-5000)">
                <span class="btn-inner--icon"><i class="fa fa-arrow-down"></i></span>
                <span class="btn-inner--text">Decrease</span>
            </button>
            
            </div>
            </div>

            <div class="row pt-3">
            <div class="col-7">
                <base-slider :range={min:0,max:100000} v-model="programAllowance"/><br>
            </div>
            <div class="col-5">
                <input type="number" v-model="programAllowance">
            </div>
        </div>
        <template slot="footer">
                    <base-button :disabled="programAllowance==originalAllowance" type="primary">Save</base-button>
                    <base-button type="link" class="ml-auto" @click="modals.practitioner = false">Cancel</base-button>
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
    Modal,
    BaseDropdown
  },
  data() {
    return {
      modals: {
        practitioner: false
      },
      originalAllowance: 0,
      programAllowance: 3759.32
    };
  },
  methods: {
    modifyAllowance(change) {
      let oldValue = parseFloat(this.programAllowance);

      this.programAllowance = oldValue + change;
    },
    advancedFunction() {
      this.$notify({
        group: "foo",
        title: "This not yet enabled on the front end",
        text:
          "In the future, you will be able to do some advanced stuff here..."
      });
    }
  },
  mounted() {
    this.originalAllowance = this.programAllowance;
  }
};
</script>
<style>
</style>
