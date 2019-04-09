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
                <!-- <div class="card-profile-image">
                  <a href="#">
                    <img
                      v-lazy="'img/practitioners/communityhealthcarworker.JPG'"
                      class="rounded-circle"
                    >
                    <avatar :username="user.username"></avatar>
                  </a>
                </div>-->
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
                      Registered Patients
                      <strong>{{patients.length}}</strong>
                    </span>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div class="text-center mt-5 mt--100">
              <h5>{{ user.email }}</h5>
              <div class="h6"></div>
              <div class="h6 font-weight-300"></div>
            </div>
            <div class="mt-3 text-center">
              <div class="row justify-content-center">
                <div class="nav-wrapper">
                  <table class="table table-striped" style="width:100%" v-if="patients.length > 0">
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
                      <tr v-for="patient in patients" v-bind:key="patient.id">
                        <td>{{patient.firstName}} {{ patient.lastName }}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div v-else>
                    <span>There is no registered patient.</span>
                  </div>
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
        <div class="col-12">
          <label>Patient Number</label>
          <input type="text" class="form-control form-control-alternative" v-model="patientNumber">
        </div>
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

      <div class="row">
        <div class="col-12">
          <label>Select Patient</label>
          <div class="form-group">
            <v-select style="width: 100%" label="id" v-model="activity.patient" :options="patients"></v-select>
          </div>
        </div>
        <div class="col-12">
          <label>Select Activities</label>
          <div class="form-group">
            <v-select
              style="width: 100%"
              label="eventName"
              multiple
              taggable
              v-model="activity.activities"
              :options="eventData"
            ></v-select>
          </div>
        </div>
        <div class="col-12">
          <star-rating v-model="rating"></star-rating>
        </div>
      </div>
      <template slot="footer">
        <base-button type="primary" @click="recordActivity">Record</base-button>
        <base-button type="link" class="ml-auto" @click="modals.patientInteraction = false">Cancel</base-button>
      </template>
    </modal>
  </div>
</template>
<script>
import { components } from "aws-amplify-vue";
import { Auth, API, graphqlOperation } from "aws-amplify";
import StarRating from 'vue-star-rating'
import Avatar from "vue-avatar";
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import Modal from "@/components/Modal.vue";
import BaseDropdown from "@/components/BaseDropdown";
import VuePlotly from "@statnett/vue-plotly";

import { listPatients } from "../graphql/queries.js";
import { createPatient, createEvent } from "../graphql/mutations";
import { onCreatePatient } from "../graphql/subscriptions";

import eventData from "../store/events.json";

export default {
  components: {
    Tabs,
    TabPane,
    Modal,
    BaseDropdown,
    VuePlotly,
    Avatar,
    StarRating
  },
  data() {
    return {
      modals: {
        onboard: false,
        patientInteraction: false
      },
      eventData: eventData,
      patientNumber: "",
      phoneNumber: "",
      firstName: "",
      lastName: "",
      activity: {
        patient: {},
        activities: []
      },
      rewardsToSend: [],
      rewardsToSendTotal: 0
    };
  },
  created() {
    this.$store.dispatch("loadPatient");
  },
  mounted: function() {
    API.graphql(graphqlOperation(onCreatePatient)).subscribe({
      next: data => {
        console.log(data.value.data.onCreatePatient)
        this.$store.dispatch("addPatient", data.value.data.onCreatePatient);
      }
    });
  },
  computed: {
    user: function() {
      return this.$store.state.login.user.attributes;
    },
    patients: function() {
      return this.$store.state.patients.data;
    },
    fullname: function(firstName, lastName) {
      return `${lastName} ${firstName}`;
    }
  },
  methods: {
    createNewPatient() {
      const input = {
        id: parseInt(this.patientNumber),
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phoneNumber
      };
      API.graphql(graphqlOperation(createPatient, { input }))
        .then(response => {
          this.$notify({
            group: "foo",
            title: "New Patient",
            text: `Patient ${this.patientNumber} has been registered.`
          });
          this.patientNumber = "";
          this.firstName = "";
          this.lastName = "";
          this.phoneNumber = "";
        })
        .catch(errors => {
          const err = [];
          errors.map(error, index => err.push(error));
          this.$notify({
            group: "foo",
            title: "New Patient",
            text: `${err}`
          });
        });
    },
    recordActivity() {
      // assign the patient to each of the events
      this.activity.activities.map((activity, index) => {
        const input = {
          patient: this.activity.patient,
          eventType: activity.eventName
        }
        API.graphql(graphqlOperation(createEvent, {input}))
          .then(response => {

          })
      })

      // const input = {
      //   patient: this.activity.patient,
      //   eventType: this.activity.activities
      // };
      // // compute total
      // API.graphql(graphqlOperation(createEvent, { input }))
      //   .then(response => {
      //     this.$notify({
      //       group: "foo",
      //       title: "Patient Interaction",
      //       text: `Patient ${
      //         this.activity.patient.id
      //       } activity has been recorded.`
      //     });
      //     this.activity = {};
      //   })
      //   .catch(errors => {
      //     console.log(errors);
      //     this.$notify({
      //       group: "foo",
      //       title: "Patient Interaction",
      //       text: `Internal server error. Please try again`
      //     });
      //   });
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

