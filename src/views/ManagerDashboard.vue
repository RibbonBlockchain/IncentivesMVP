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
                                    <base-button type="info" size="sm" class="mr-4">Transfer Management</base-button>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">Manager of of 1 program</span>
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
                            <i class="fa fa-user-md"></i> Practitioners
                        </template>
                           <table class="table table-striped" style="width:800px">
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
                            <i class="fa fa-user"></i> Users
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
                </card>
            </tabs> 
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
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
  }
};
</script>
<style>
</style>
