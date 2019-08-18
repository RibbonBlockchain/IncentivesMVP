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
            <div class="row mt-3">
              <div class="col-xs-12 col-sm-12 col-md-8 col-lg-6">
                <div class="d-flex justify-content-space-between">
                  <base-button
                    type="info"
                    size="sm"
                    @click="$bvModal.show('patient-modal')"
                  >New Patient</base-button>
                  <base-button
                    type="default"
                    size="sm"
                    @click="$bvModal.show('practitioner-modal')"
                  >New Practitioner</base-button>
                  <base-button
                    type="default"
                    size="sm"
                    @click="$bvModal.show('interaction-modal')"
                  >Patient Interaction</base-button>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-4 col-lg-6">
                <div class="text-right">
                  <div>{{ user.email }}</div>
                  <strong>{{ web3.balance }} RBN</strong>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <div class="row">
                <div class="col-12">
                  <div class="nav-wrapper">
                    <table
                      class="table table-striped"
                      style="width:100%"
                      v-if="activities.length > 0"
                    >
                      <thead>
                        <tr>
                          <th>Patient Name</th>
                          <th>Practitioner</th>
                          <th>Date</th>
                          <th>Interaction</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="activity in activities" v-bind:key="activity.id">
                          <td>
                            <a
                              href="#"
                              @click.prevent="openDetails(activity.patient)"
                            >{{ `${activity.patient.firstName} ${activity.patient.lastName}` }}</a>
                          </td>
                          <td>
                            <a
                              href="#"
                              @click.prevent="openDetails(activity.practitioner)"
                            >{{ `${activity.practitioner.firstName} ${activity.practitioner.lastName}` }}</a>
                          </td>
                          <td>{{ parseInt(activity.id) | moment("ddd, MMM Do YYYY") }}</td>
                          <td>{{ activity.interaction }}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div v-else>
                      <span>There is no registered interactions.</span>
                    </div>
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
    <modal :show.sync="modals.showDetailModal" :large="false">
      <h4
        slot="header"
        class="modal-title"
        id="modal-title-default"
      >{{ `${this.selectedPerson.firstName} ${this.selectedPerson.lastName}'s details`}}</h4>
      <div class="container pt-xs-sm">
        <div class="row">
          <div class="col-12 text-right">
            <span>
              Token Balance:
              <strong>{{ myBalance }} RBN</strong>
            </span>
          </div>
          <div class="col-12 mb-4">
            <div class="text-center mb-4">
              <amplify-s3-image
                :imagePath="this.selectedPerson.imageLink"
                v-if="this.selectedPerson.imageLink"
              ></amplify-s3-image>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="mb-3">
              <a
                target="_blank"
                rel="noopener"
                ref="no-referrer"
                :href="'https://rinkeby.etherscan.io/address/' +this.selectedPerson.walletAddress"
              >{{ this.selectedPerson.walletAddress }}</a>
            </div>
            <table style="width: 100%" class="pt-4">
              <tr>
                <td style="width: 50%">ID Number</td>
                <td>{{ this.selectedPerson.userId }}</td>
              </tr>
              <tr>
                <td style="width: 50%">Phone Number</td>
                <td>{{ this.selectedPerson.phoneNumber }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </modal>
    <!-- onboard modal -->
    <b-modal id="patient-modal" size="xl" title="Register New Patient">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-12">
              <label>Patient Number</label>
              <input
                type="text"
                class="form-control form-control-alternative"
                v-model="patient.idNumber"
              />
            </div>
            <div class="col-6">
              <label>First Name</label>
              <input
                type="text"
                class="form-control form-control-alternative"
                v-model="patient.firstName"
              />
            </div>
            <div class="col-6">
              <label>Last Name</label>
              <input
                type="text"
                class="form-control form-control-alternative"
                v-model="patient.lastName"
              />
            </div>
            <div class="col-12">
              <label>Phone Number</label>
              <input
                type="text"
                v-mask="'+## ## ### ####'"
                class="form-control form-control-alternative"
                v-model="patient.phoneNumber"
              />
            </div>
          </div>
        </div>
      </div>

      <div slot="modal-footer" class="w-100">
        <b-button
          variant="danger"
          size="md"
          class="float-left"
          @click="$bvModal.hide('patient-modal')"
        >Cancel</b-button>
        <b-button
          variant="primary"
          size="md"
          class="float-right"
          @click.prevent="createNewPatient"
        >Register Patient</b-button>
      </div>
    </b-modal>
    <b-modal id="practitioner-modal" size="xl" title="Register New Practitioner">
      <div class="row">
        <div class="col-12">
          <label>Practitioner Number</label>
          <input
            type="text"
            class="form-control form-control-alternative"
            v-model="practitioner.idNumber"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <label>First Name</label>
          <input
            type="text"
            class="form-control form-control-alternative"
            v-model="practitioner.firstName"
          />
        </div>
        <div class="col-6">
          <label>Last Name</label>
          <input
            type="text"
            class="form-control form-control-alternative"
            v-model="practitioner.lastName"
          />
        </div>
        <div class="col-12">
          <label>Phone Number</label>
          <input
            type="text"
            v-mask="'+## ## ### ####'"
            class="form-control form-control-alternative"
            v-model="practitioner.phoneNumber"
          />
        </div>
      </div>

      <div slot="modal-footer" class="w-100">
        <b-button
          variant="danger"
          size="md"
          class="float-left"
          @click="$bvModal.hide('practitioner-modal')"
        >Cancel</b-button>
        <b-button
          variant="primary"
          size="md"
          class="float-right"
          @click.prevent="createNewPractitioner"
        >Register Practitioner</b-button>
      </div>
    </b-modal>
    <!-- Patient Interaction Window -->
    <b-modal id="interaction-modal" size="xl" title="Record A Patient Activity">
      <div class="row">
        <div class="col-12 text-center">
          <p>Record a patient activity.</p>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="row">
            <div class="col-12">
              <label>Select Patient</label>
              <div class="form-group">
                <model-select
                  :options="patients"
                  v-model="activity.patient"
                  placeholder="select patient"
                ></model-select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <label>Select Practitioner</label>
              <div class="form-group">
                <model-select
                  :options="practitioners"
                  v-model="activity.practitioner"
                  placeholder="select practitioner"
                ></model-select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <label>Select Activity</label>
              <div class="form-group">
                <multi-select
                  :options="events"
                  :selected-options="activity.activity"
                  placeholder="select activity"
                  @select="onInteractionSelect"
                ></multi-select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <label>Select Prescriptions</label>
              <div class="form-group">
                <multi-select
                  :options="prescriptions"
                  :selected-options="activity.prescriptions"
                  placeholder="select prescriptions"
                  @select="onPrescriptionSelect"
                ></multi-select>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="row">
            <div class="text-center">
              <h3>Rating</h3>
            </div>
            <div class="col-12">
              <table style="width: 100%">
                <tr v-for="healthcare in healthcareServices" :key="healthcare.key">
                  <td>
                    <span for="health_services">{{ healthcare.value }}</span>
                  </td>
                  <td>
                    <star-rating v-model="rating[healthcare.key]"></star-rating>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div slot="modal-footer" class="w-100">
        <b-button
          variant="danger"
          size="md"
          class="float-left"
          @click="$bvModal.hide('interaction-modal')"
        >Cancel</b-button>
        <b-button
          variant="primary"
          size="md"
          class="float-right"
          @click.prevent="recordActivity"
        >Record Interaction</b-button>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { components } from "aws-amplify-vue";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { S3Image } from "aws-amplify-vue";
import StarRating from "vue-star-rating";
import VdtnetTable from "vue-datatables-net";
import Avatar from "vue-avatar";
import { ModelSelect, MultiSelect } from "vue-search-select";

import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import Modal from "@/components/Modal.vue";
import BaseDropdown from "@/components/BaseDropdown";
import Uploader from "@/components/Uploader";
import VuePlotly from "@statnett/vue-plotly";
import Web3 from "web3";
import Tx from "ethereumjs-tx";
import { toBuffer } from "ethereumjs-util";

import "datatables.net-bs4/js/dataTables.bootstrap4.js";
import "datatables.net-select-bs4";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import "datatables.net-select-bs4/css/select.bootstrap4.min.css";

import {
  listPatients,
  listInteractions,
  listPractitioners
} from "../graphql/queries.js";
import {
  createPatient,
  createInteraction,
  createPractitioner
} from "../graphql/mutations";
import {
  onCreatePatient,
  onCreateInteraction,
  onCreatePractitioner
} from "../graphql/subscriptions";

import token from "../util/token";
import { blobToDataURL } from "../util/helpers";
import eventData from "../store/events.json";
import healthcareServices from "../store/healthcare.json";
import prescriptions from "../store/prescriptions.json";

import abi from "../abi.json";

import { ethers } from "ethers";

// const web3 = new Web3(
//   window.web3.currentProvider
// );

// const privateKey =
//   "97cbbf9b269f0f58d1c4b0f3af662dc627937a2a1a6aa959219c7051b4306371"; 
const contractAddr = "0x180170386b1794ccf5bb5bb420658b76bcdb5262";
const contractAbi = abi;

let provider = new ethers.providers.Web3Provider(web3.currentProvider);
// let wallet = new ethers.Wallet(privateKey ,provider);
const contract = new ethers.Contract(contractAddr, contractAbi, provider.getSigner(0));
console.log(web3.eth.accounts[0])

export default {
  components: {
    Tabs,
    TabPane,
    Modal,
    BaseDropdown,
    VuePlotly,
    Avatar,
    StarRating,
    Uploader,
    ModelSelect,
    MultiSelect
  },
  data() {
    return {
      modals: {
        onboard: false,
        patientInteraction: false,
        newPractitioner: false,
        showDetailModal: false
      },
      selectedPerson: {},
      healthcareServices: healthcareServices,
      prescriptions: prescriptions,
      web3: {
        balance: 0
      },
      myBalance: 0,
      account: null,
      patient: {
        idNumber: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        imageKey: ""
      },
      practitioner: {
        idNumber: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        imageKey: ""
      },
      activity: {
        patient: {},
        practitioner: {},
        prescriptions: [],
        lastSelectedPrescription: {},
        activity: [],
        lastSelectedActivity: {}
      },
      rewardsToSend: [],
      rewardsToSendTotal: 0,
      rating: {},
      avatar: {
        imageURL: null
      },
      imageKey: "",
      mediaStream: null,
      video: {},
      canvas: {},
      webCam: {
        captureButton: true,
        setPictureButton: false,
        showCaptureDiv: false,
        showPictureDiv: false
      }
    };
  },
  async created() {
    this.$store.dispatch("loadEvents");
    this.$store.dispatch("loadPatients");
    this.$store.dispatch("loadPractitioners");

    // const accounts = await web3.eth.getAccounts();
    this.account = web3.eth.accounts[0];
    // const options = { address: accounts[0], provider: provider };

    await contract.balanceOf(this.account).then(balance => {
      this.web3 = {
        balance: ethers.utils.formatEther(balance)
      };
    });

  },

  mounted: function() {
    API.graphql(graphqlOperation(onCreateInteraction)).subscribe({
      next: data => {
        this.$store.dispatch(
          "addInteraction",
          data.value.data.onCreateInteraction
        );
      }
    });
    API.graphql(graphqlOperation(onCreatePatient)).subscribe({
      next: data => {
        this.$store.dispatch("addPatient", data.value.data.onCreatePatient);
      }
    });
    API.graphql(graphqlOperation(onCreatePractitioner)).subscribe({
      next: data => {
        this.$store.dispatch(
          "addPractitioner",
          data.value.data.onCreatePractitioner
        );
      }
    });
  },
  computed: {
    user: function() {
      return this.$store.state.login.user.attributes;
    },
    patients: function() {
      return this.$store.state.patients.data.map(patient => {
        return {
          value: patient,
          text: `(${patient.userId}) - ${patient.firstName}, ${patient.lastName}`
        };
      });
    },
    practitioners: function() {
      return this.$store.state.practitioners.data.map(practitioner => {
        return {
          value: practitioner,
          text: `(${practitioner.userId}) - ${practitioner.firstName}, ${practitioner.lastName}`
        };
      });
    },
    activities: function() {
      return this.$store.state.activities.data.sort((a, b) => (a.id > b.id)*2-1);
    },
    events: function() {
      return eventData.sort((a, b) => (a.text > b.text)*2-1).map(event => {
        return {
          value: event,
          text: `${event.text} - (${Number(event.value).toFixed(4)} RBN)`
        };
      });
    },
    validateInteractionForm: function() {
      return (
        !this.activity.patient ||
        !this.activity.activity ||
        !this.activity.practitioner
      );
    },
    validatePatientForm() {
      return (
        !this.patient.idNumber ||
        !this.patient.firstName ||
        !this.patient.lastName ||
        !this.patient.phoneNumber ||
        !this.avatar.imageURL
      );
    },
    validatePractitionerForm() {
      return (
        !this.practitioner.idNumber ||
        !this.practitioner.firstName ||
        !this.practitioner.lastName ||
        !this.practitioner.phoneNumber ||
        !this.avatar.imageURL
      );
    }
  },
  methods: {
    capture() {
      this.webCam.showCaptureDiv = true;
      this.avatar = {};
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then(mediaStream => {
            this.mediaStream = mediaStream;
            this.$refs.video.srcObject = mediaStream;
            this.webCam.captureButton = false;
            this.webCam.setPictureButton = true;
            this.$refs.video.play();
          })
          .catch(err => console.error("getUserMedia() error: ", err));
      }
    },
    async setPicture() {
      this.webCam.showCaptureDiv = false;
      this.webCam.showPictureDiv = true;
      const mediaStreamTrack = await this.mediaStream.getVideoTracks()[0];
      const imageCapture = new window.ImageCapture(mediaStreamTrack);
      await imageCapture.takePhoto().then(async blob => {
        await blobToDataURL(blob, data => {
          this.avatar.imageURL = data;
          this.webCam.captureButton = true;
          this.webCam.setPictureButton = false;
        });
      });
    },
    toHex(string) {
      let result = "";
      for (let i = 0; i < string.length; i++) {
        result += string.charCodeAt(i).toString(16);
      }
      return result;
    },

    openDetails({
      firstName,
      lastName,
      phoneNumber,
      id,
      walletAddress,
      imageLink,
      userId
    }) {
      this.selectedPerson = {
        firstName,
        lastName,
        phoneNumber,
        id,
        walletAddress,
        imageLink,
        userId
      };
      token.methods
        .balanceOf(walletAddress)
        .call()
        .then(balance => {
          this.myBalance = ethers.utils.formatEther(balance);
        });

      this.modals.showDetailModal = true;
    },

    createNewPatient() {
      const input = {
        firstName: this.patient.firstName,
        lastName: this.patient.lastName,
        userId: this.patient.idNumber,
        phoneNumber: this.patient.phoneNumber,
        walletAddress: web3.eth.accounts.create().address
      };
      API.graphql(graphqlOperation(createPatient, { input }))
        .then(response => {
          this.$notify({
            group: "foo",
            title: "New Patient",
            text: `Patient ${this.patient.idNumber} has been registered.`
          });
          this.patient = {};
          this.avatar = {};
          this.$bvModal.hide("patient-modal");
        })
        .catch(error => {
          const err = [];
          this.$notify({
            group: "foo",
            title: "New Patient",
            text: `${error}`
          });
        });
    },

    createNewPractitioner() {
      const input = {
        firstName: this.practitioner.firstName,
        lastName: this.practitioner.lastName,
        userId: this.practitioner.idNumber,
        phoneNumber: this.practitioner.phoneNumber,
        walletAddress: web3.eth.accounts.create().address
      };
      API.graphql(graphqlOperation(createPractitioner, { input }))
        .then(response => {
          this.$notify({
            group: "foo",
            title: "New Practitioner",
            text: `Practitioner ${this.practitioner.idNumber} has been registered.`
          });
          this.practitioner = {};
          this.avatar = null;
          this.$bvModal.hide("practitioner-modal");
        })
        .catch(errors => {
          console.log("Errors ", errors);
          const err = [];
          errors.map(error, index => err.push(error));
          this.$notify({
            group: "foo",
            title: "New Practitioner",
            text: `${errros[0]}`
          });
        });
    },

    async recordActivity() {
      // assign the patient to each of the events
      const input = {
        id: new Date().getTime(),
        interactionPatientId: this.activity.patient.value.id,
        interactionPractitionerId: this.activity.practitioner.value.id,
        interaction: this.activity.activity.map(item => item.text).join(", "),
        ratings: this.rating,
        prescriptions: this.activity.prescriptions
      };
      let patientWallet = this.activity.patient.value.walletAddress;
      let practitionerWallet = this.activity.practitioner.value.walletAddress;
      await API.graphql(graphqlOperation(createInteraction, { input }))
        .then(async response => {
          await this.$notify({
            group: "foo",
            title: "New Interaction",
            text: `Interaction has been recorded.`

		  });
		  const rewardToBeSent = this.activity.activity.reduce((acc, balance) =>  acc + balance.reward, 0);
      console.log(rewardToBeSent)
      
      //amount sent to patient
		  this.sendToken(patientWallet, rewardToBeSent.toString());

      //sum of ratings object
      const sumRatings = (obj) => Object.keys(obj).reduce((acc, value) => acc + obj[value], 0);
      // amount sent to practitioner
      const rewardToPractitioner = parseFloat(rewardToBeSent)*0.10 + parseFloat((sumRatings(this.rating)/30))*0.05
      
      this.sendToken(practitionerWallet, rewardToPractitioner.toString());

      //amount sent to CommunityHealthWorker
      const rewardToHealthWorker = parseFloat(rewardToBeSent)*0.15
      this.sendToken(this.account, rewardToHealthWorker.toString());
      this.$bvModal.hide('interaction-modal')

        })
        .catch(async error => {
          await this.$notify({
            group: "foo",
            title: "New Patient",
            text: `${JSON.stringify(error)}`
          });
        });
    },

    async sendToken(receiver, amount) {
      const numberOfDecimals = 18;
      // const numberOfTokens = ethers.utils.bigNumberify(amount);
      const numberOfTokens = ethers.utils.parseUnits('1.0', numberOfDecimals);

      let overrides = {
        gasLimit: 750000,
      };

      // send tokens
      await contract.transfer(receiver, numberOfTokens, overrides).then(function(tx) {
        console.log(tx);
      });
    },

    onInteractionSelect(activities, lastSelectedActivity) {
      this.activity.activity = activities;
      this.activity.lastSelectedActivity = lastSelectedActivity;
    },
    onPrescriptionSelect(prescriptions, lastSelectedPrescription) {
      this.activity.prescriptions = prescriptions;
      this.activity.lastSelectedPrescription = lastSelectedPrescription;
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
    },
    updateUploadLink(link) {
      this.imageKey = link;
    },
    closeOnboardModal() {
      this.imageKey = "";
      this.avatar = {};
      this.patient = {};
      this.practitioner = {};
      this.modals.onboard = false;
      this.modals.newPractitioner = false;
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

.cursor {
  cursor: pointer;
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

.vue-star-rating-star svg {
  width: 20px;
}
</style>

