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
            <div class="row justify-content-center mb-5">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img
                      v-lazy="'img/practitioners/communityhealthcarworker.JPG'"
                      class="rounded-circle"
                    >
                  </a>
                </div>
              </div>
              <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                <div class="card-profile-actions py-4 mt-lg-0"></div>
              </div>
              <div class="col-lg-4 order-lg-1 pb-0 mb-0">
                <div class="card-profile-stats d-flex justify-content-space-between pb-0 mb-0">
                  <base-button
                    type="info"
                    size="sm"
                    class="mr-4"
                    @click="modals.onboard = true"
                  >New Patient</base-button>
                  <base-button
                    type="default"
                    size="sm"
                    class="ml-4"
                    @click="modals.patientInteraction = true"
                  >Patient Interaction</base-button>
                </div>
                <hr class="mt-2">
                <div class="card-profile-stats d-flex justify-content-center pt-0 mt-0 ml-4">
                  <div>
                    <span class="description">
                      Remaining Allowance
                      <strong>2918</strong>
                      <br>Total people helped:
                      <strong>4521</strong>
                      <br>People helped last month:
                      <strong>18</strong>
                    </span>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div class="text-center mt-5 mt--100">
              <h5>{{ user.email }}</h5>
              <div class="h6">
                <!-- <i class="ni business_briefcase-24 mr-2"></i>Community healthcare worker - She Conquers -->
              </div>
              <div class="h6 font-weight-300">
                <!-- <i class="ni location_pin mr-2"></i>Gauteng, South Africa -->
              </div>
            </div>
            <div class="mt-3 text-center">
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
                    <!-- <tbody>
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
                    </tbody>-->
                  </table>
                  <!-- <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                      <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">
                          <i class="fa fa-angle-left"></i>
                          <span class="sr-only">Previous</span>
                        </a>
                      </li>
                      <li class="page-item active">
                        <a class="page-link" href="#">1</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">2</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">3</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          <i class="fa fa-angle-right"></i>
                          <span class="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>-->
                </div>
              </div>
            </div>
          </div>
        </card>
        <div class="col-md-4"></div>
      </div>
    </section>
    <!-- MODALS -->
    <!-- onboard modal -->
    <modal :show.sync="modals.onboard">
      <h4 slot="header" class="modal-title" id="modal-title-default">Register new Patient</h4>

      <div class="row">
        <div class="col-6">
          <label>First Name</label>
          <input type="text" class="form-control form-control-alternative" v-model="firstName">
        </div>
        <div class="col-6">
          <label>Last Name</label>
          <input type="text" class="form-control form-control-alternative" v-model="lastName">
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <label>Phone Number</label>
          <input type="text" class="form-control form-control-alternative" v-model="phoneNumber">
        </div>
      </div>

      <template slot="footer">
        <base-button type="primary" @click.prevent="createNewPatient">Register Patient</base-button>
        <base-button type="link" class="ml-auto" @click="modals.onboard = false">Cancel</base-button>
      </template>
    </modal>
    <!-- Patient Interaction Window -->
    <modal :show.sync="modals.patientInteraction">
      <h4 slot="header" class="modal-title" id="modal-title-default">Record A Patient Activity</h4>
      <div class="row">
        <div class="col-12 text-center">
          <p>Record a patient activity.</p>
        </div>
      </div>

      <label>Patient Phone Number</label>

      <div class="row">
        <div class="col-8 pr-0">
          <input
            type="text"
            class="form-control form-control-alternative"
            v-model="activity.phoneNumber"
            style="margin-right:20px"
          >
        </div>
        <div class="col-4 m-r-2">
          <base-dropdown class="nav-item" menu-classes="dropdown-menu-lg">
            <a
              slot="title"
              href="#"
              class="btn btn-neutral btn-icon"
              data-toggle="dropdown"
              role="button"
            >
              <i class="ni ni-ui-04 d-lg-none"></i>
              <i class="ni ni-circle-08"></i>
              <span class="nav-link-inner--text">Contacts</span>
            </a>
            <div class="dropdown-menu-inner">
              <a to="/userDashboard" style="padding:10px" class="media d-flex align-items-center">
                <img
                  v-lazy="'img/theme/team-5-800x800.jpg'"
                  class="rounded-circle"
                  style="width:50px"
                >
                <div class="media-body ml-3" @click="contactSelect('+2348062457326')">
                  <h5 class="heading text-primary mb-md-1">Ottoline Lambert</h5>
                  <p class="description d-none d-md-inline-block mb-0">+2348062457326</p>
                </div>
              </a>
              <a
                to="/userDashboard"
                style="padding:10px"
                class="media d-flex align-items-center"
                @click="contactSelect('+2348062457326')"
              >
                <img
                  v-lazy="'img/theme/team-2-800x800.jpg'"
                  class="rounded-circle"
                  style="width:50px"
                >
                <div class="media-body ml-3">
                  <h5 class="heading text-primary mb-md-1">Princess Poole</h5>
                  <p class="description d-none d-md-inline-block mb-0">+2348062457326</p>
                </div>
              </a>
              <a
                to="/userDashboard"
                style="padding:10px"
                class="media d-flex align-items-center"
                @click="contactSelect('+2348062457326')"
              >
                <img
                  v-lazy="'img/theme/team-3-800x800.jpg'"
                  class="rounded-circle"
                  style="width:50px"
                >
                <div class="media-body ml-3">
                  <h5 class="heading text-primary mb-md-1">Kolton Dunn</h5>
                  <p class="description d-none d-md-inline-block mb-0">+2348062457326</p>
                </div>
              </a>
            </div>
          </base-dropdown>
        </div>
      </div>
      <label class="pt-5">Patient Activities</label>
      <div class="row">
        <div class="col-sm-12">
          <base-dropdown class="nav-item pb-2" menu-classes="dropdown-menu-xl">
            <a
              slot="title"
              href="#"
              class="btn btn-neutral btn-icon"
              data-toggle="dropdown"
              role="button"
            >
              <i class="ni ni-ui-04 d-lg-none"></i>
              <i class="fa fa-hand-pointer-o"></i>
              <span class="nav-link-inner--text">Activities</span>
            </a>
            <div class="dropdown-menu-inner">
              <a
                to="/userDashboard"
                style="padding:10px; cursor: pointer;"
                class="media d-flex align-items-center"
              >
                <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                  <i class="fa fa-search"></i>
                </div>
                <div class="media-body ml-3" @click="awardPatient('General Checkup', 100)">
                  <h5 class="heading text-primary mb-md-1">General Checkup</h5>
                  <p class="description d-none d-md-inline-block mb-0">100 Ribbon Tokens</p>
                </div>
              </a>
              <a
                to="/userDashboard"
                style="padding:10px; cursor: pointer;"
                class="media d-flex align-items-center"
                @click="awardPatient('HIV Test', 1500)"
              >
                <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                  <i class="fa fa-question"></i>
                </div>
                <div class="media-body ml-3">
                  <h5 class="heading text-primary mb-md-1">HIV Test</h5>
                  <p class="description d-none d-md-inline-block mb-0">1500</p>
                </div>
              </a>
              <a
                to="/userDashboard"
                style="padding:10px; cursor: pointer;"
                class="media d-flex align-items-center"
                @click="awardPatient('STD Test', 800)"
              >
                <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                  <i class="fa fa-male"></i>
                  <i class="fa fa-female"></i>
                </div>
                <div class="media-body ml-3">
                  <h5 class="heading text-primary mb-md-1">STD Test</h5>
                  <p class="description d-none d-md-inline-block mb-0">800 Ribbon Tokens</p>
                </div>
              </a>

              <a
                to="/userDashboard"
                style="padding:10px; cursor: pointer;"
                class="media d-flex align-items-center"
                @click="awardPatient('TB Medication Dispensary', 500)"
              >
                <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                  <i class="fa fa-hospital-o"></i>
                </div>
                <div class="media-body ml-3">
                  <h5 class="heading text-primary mb-md-1">TB Medication Dispensary</h5>
                  <p class="description d-none d-md-inline-block mb-0">500 Ribbon Tokens</p>
                </div>
              </a>
              <a
                to="/userDashboard"
                style="padding:10px; cursor: pointer;"
                class="media d-flex align-items-center"
                @click="awardPatient('Complected Antibiotics course', 600)"
              >
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
              <thead></thead>
              <tbody>
                <tr v-for="reward in rewardsToSend">
                  <td>{{reward.award}}</td>
                  <td>{{reward.value}}</td>
                  <td>
                    <base-button type="secondary" icon="fa fa-trash" @click="removeAward(reward)"></base-button>
                  </td>
                </tr>
              </tbody>
            </table>
            <p class="description text-left">
              Total:
              <strong>{{rewardsToSendTotal}}</strong>
            </p>
          </div>
        </div>
      </div>
      <template slot="footer">
        <base-button
          type="primary"
          @click="recordActivity"
          :disabled="rewardsToSendTotal==0 || phoneNumber==''"
        >Record</base-button>
        <base-button type="link" class="ml-auto" @click="modals.patientInteraction = false">Cancel</base-button>
      </template>
    </modal>
  </div>
</template>
<script>
import { components } from "aws-amplify-vue";
import { Auth, API, graphqlOperation } from "aws-amplify";
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import Modal from "@/components/Modal.vue";
import BaseDropdown from "@/components/BaseDropdown";
import VuePlotly from "@statnett/vue-plotly";

import { listPatients } from "../graphql/queries.js";
import { createPatient } from "../graphql/mutations";
import { onCreatePatient } from "../graphql/subscriptions";

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
        onboard: false,
        patientInteraction: false
      },
      phoneNumber: "",
      firstName: "",
      lastName: "",
      activity: {
        phoneNumber: ""
      },
      rewardsToSend: [],
      rewardsToSendTotal: 0
    };
  },
  computed: {
    user: function() {
      return this.$store.state.login.user.attributes;
    }
  },
  methods: {
    createNewPatient() {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber
      };
      this.$store
        .dispatch("createPatientRecord", data)
        .then(() => {})
        .catch(err => {
          console.log(err);
        });
    },
    recordActivity() {
      const data = {
        phoneNumber: this.activity.phoneNumber,
        activities: this.rewardsToSend,
        total: this.rewardsToSendTotal
      };
      this.$store.dispatch("addInteraction", data);
    },
    contactSelect(phoneNumber) {
      this.activity.phoneNumber = phoneNumber;
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

