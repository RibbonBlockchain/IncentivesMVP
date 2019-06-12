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
                  <base-button type="info" size="sm" @click="modals.onboard = true">New Patient</base-button>
                  <base-button
                    type="default"
                    size="sm"
                    @click="modals.newPractitioner = true"
                  >New Practitioner</base-button>
                  <base-button
                    type="default"
                    size="sm"
                    @click="modals.patientInteraction = true"
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
                    <table class="table table-striped" style="width:100%" v-if="events.length > 0">
                      <thead>
                        <tr>
                          <th>Patient Name</th>
                          <th>Practitioner</th>
                          <th>Date</th>
                          <th>Interaction</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="activity in events" v-bind:key="activity.id">
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
                          <td>{{activity.eventType }}</td>
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
                <td>{{ this.selectedPerson.id }}</td>
              </tr>
              <tr>
                <td style="width: 50%">Phone Number</td>
                <td>{{ this.selectedPerson.phone }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </modal>
    <!-- onboard modal -->
    <modal :show.sync="modals.onboard" :large="true">
      <h4 slot="header" class="modal-title" id="modal-title-default">Register new Patient</h4>

      <div class="row">
        <div class="col-8">
          <div class="row">
            <div class="col-12">
              <label>Patient Number</label>
              <input
                type="text"
                class="form-control form-control-alternative"
                v-model="patient.idNumber"
              >
            </div>
            <div class="col-6">
              <label>First Name</label>
              <input
                type="text"
                class="form-control form-control-alternative"
                v-model="patient.firstName"
              >
            </div>
            <div class="col-6">
              <label>Last Name</label>
              <input
                type="text"
                class="form-control form-control-alternative"
                v-model="patient.lastName"
              >
            </div>
            <div class="col-12">
              <label>Phone Number</label>
              <input
                type="text"
                v-mask="'+###-(###)-###-####'"
                class="form-control form-control-alternative"
                v-model="patient.phoneNumber"
              >
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col-12 text-center">
              <uploader v-model="avatar" @uploadLink="updateUploadLink">
                <div slot="activator">
                  <span v-if="!avatar" class="cursor">Click to capture patient passport</span>
                  <img
                    v-else
                    :src="avatar.imageURL"
                    class="cursor"
                    style="width: 160px; height: auto;"
                    alt="avatar"
                  >
                </div>
              </uploader>
              <input class="upload-file" type="file" style="display: none">
            </div>
          </div>
        </div>
      </div>

      <template slot="footer">
        <base-button
          type="primary"
          :disabled="validatePatientForm"
          @click.prevent="createNewPatient"
        >Register Patient</base-button>
        <base-button type="link" class="ml-auto" @click="closeOnboardModal">Cancel</base-button>
      </template>
    </modal>
    <modal :show.sync="modals.newPractitioner" :large="false">
      <h4 slot="header" class="modal-title" id="modal-title-default">Register a Practitioner</h4>

      <div class="row">
        <div class="col-12 text-center mt-4">
          <uploader v-model="avatar" @uploadLink="updateUploadLink">
            <div slot="activator">
              <span v-if="!avatar" class="cursor">Click to capture Practitioner Passport</span>
              <img
                v-else
                :src="avatar.imageURL"
                class="cursor"
                style="width: 160px; height: auto;"
                alt="avatar"
              >
            </div>
          </uploader>
          <input class="upload-file" type="file" style="display: none">
        </div>
        <div class="col-12">
          <label>Practitioner Number</label>
          <input
            type="text"
            class="form-control form-control-alternative"
            v-model="practitioner.idNumber"
          >
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <label>First Name</label>
          <input
            type="text"
            class="form-control form-control-alternative"
            v-model="practitioner.firstName"
          >
        </div>
        <div class="col-6">
          <label>Last Name</label>
          <input
            type="text"
            class="form-control form-control-alternative"
            v-model="practitioner.lastName"
          >
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <label>Phone Number</label>
          <input
            type="text"
            v-mask="'+###-(###)-###-####'"
            class="form-control form-control-alternative"
            v-model="practitioner.phoneNumber"
          >
        </div>
      </div>

      <template slot="footer">
        <base-button
          type="primary"
          :disabled="validatePractitionerForm"
          @click.prevent="createNewPractitioner"
        >Register Practitioner</base-button>
        <base-button type="link" class="ml-auto" @click="modals.newPractitioner = false">Cancel</base-button>
      </template>
    </modal>
    <!-- Patient Interaction Window -->
    <modal :show.sync="modals.patientInteraction" :large="false">
      <h4 slot="header" class="modal-title" id="modal-title-default">Record A Patient Activity</h4>
      <div class="row">
        <div class="col-12 text-center">
          <p>Record a patient activity.</p>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <label>Select Patient</label>
          <div class="form-group">
            <v-select style="width: 100%" label="id" v-model="activity.patient" :options="patients"></v-select>
          </div>
        </div>
        <div class="col-6">
          <label>Select Activities</label>
          <div class="form-group">
            <v-select
              style="width: 100%"
              label="eventName"
              taggable
              v-model="activity.activity"
              :options="eventData"
            ></v-select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <label>Select Practitioner</label>
          <div class="form-group">
            <v-select
              style="width: 100%"
              label="id"
              v-model="activity.practitioner"
              :options="practitioners"
            ></v-select>
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-12">
          <table style="width: 100%">
            <tr>
              <td>
                <span for="health_services">Access to health services</span>
              </td>
              <td>
                <star-rating v-model="rating.health_services"></star-rating>
              </td>
            </tr>
            <tr>
              <td>
                <span for="health_services">Medicines</span>
              </td>
              <td>
                <star-rating v-model="rating.medicines"></star-rating>
              </td>
            </tr>
            <tr>
              <td>
                <span for="health_services">Patients safety</span>
              </td>
              <td>
                <star-rating v-model="rating.patient_safety"></star-rating>
              </td>
            </tr>
            <tr>
              <td>
                <span for="health_services">Cleanliness, Infection prevention & control</span>
              </td>
              <td>
                <star-rating v-model="rating.cleanliness"></star-rating>
              </td>
            </tr>
            <tr>
              <td>
                <span for="health_services">Values and attitudes of staff</span>
              </td>
              <td>
                <star-rating v-model="rating.staff_attitude"></star-rating>
              </td>
            </tr>
            <tr>
              <td>
                <span for="health_services">Patient waiting time for care</span>
              </td>
              <td>
                <star-rating v-model="rating.wating_time"></star-rating>
              </td>
            </tr>
          </table>
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
import { Auth, API, graphqlOperation, Storage } from "aws-amplify";
import { S3Image } from "aws-amplify-vue";
import StarRating from "vue-star-rating";
import VdtnetTable from "vue-datatables-net";
import Avatar from "vue-avatar";

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
  listPractitioners,
  listEvents
} from "../graphql/queries.js";
import {
  createPatient,
  createEvent,
  createPractitioner
} from "../graphql/mutations";
import {
  onCreatePatient,
  onCreateEvent,
  onCreatePractitioner
} from "../graphql/subscriptions";

import token from "../util/token";
import eventData from "../store/events.json";

import abi from "../abi.json";

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/a8853810b5054964b0fbe19c8e02e9c1"
  )
);

const privateKey =
  "97cbbf9b269f0f58d1c4b0f3af662dc627937a2a1a6aa959219c7051b4306371";
export default {
  components: {
    Tabs,
    TabPane,
    Modal,
    BaseDropdown,
    VuePlotly,
    Avatar,
    StarRating,
    Uploader
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
      eventData: eventData,
      web3: {
        balance: 0
      },
      myBalance: 0,
      patient: {
        idNumber: "",
        firstName: "",
        lastName: "",
        phoneNumber: ""
      },
      practitioner: {
        idNumber: "",
        firstName: "",
        lastName: "",
        phoneNumber: ""
      },
      activity: {
        patient: {},
        practitioner: "",
        activity: {}
      },
      rewardsToSend: [],
      rewardsToSendTotal: 0,
      rating: {
        health_services: 5,
        medicines: 5,
        patient_safety: 5,
        cleanliness: 5,
        staff_attitude: 5,
        wating_time: 5
      },
      avatar: null,
      imageKey: ""
    };
  },
  async created() {
    this.$store.dispatch("loadEvents");
    this.$store.dispatch("loadPatients");
    this.$store.dispatch("loadPractitioners");
    await token.methods
      .owner()
      .call()
      .then(result => {
        token.methods
          .balanceOf(result)
          .call()
          .then(balance => {
            this.web3 = {
              balance: web3.utils.fromWei(balance.toString(), "ether")
            };
          });
      });
  },
  mounted: function() {
    API.graphql(graphqlOperation(onCreateEvent)).subscribe({
      next: data => {
        this.$store.dispatch("addInteraction", data.value.data.onCreateEvent);
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
      return this.$store.state.patients.data;
    },
    practitioners: function() {
      return this.$store.state.practitioners.data;
    },
    events: function() {
      return this.$store.state.activities.data;
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
        !this.imageKey
      );
    },
    validatePractitionerForm() {
      return (
        !this.practitioner.idNumber ||
        !this.practitioner.firstName ||
        !this.practitioner.lastName ||
        !this.practitioner.phoneNumber ||
        !this.imageKey
      );
    }
  },
  methods: {
    toHex(string) {
      let result = "";
      for (let i = 0; i < string.length; i++) {
        result += string.charCodeAt(i).toString(16);
      }
      return result;
    },
    async sendToken(receiver, amount) {
      //added async so we can use await
      const contractAddr = "0x180170386b1794ccf5bb5bb420658b76bcdb5262";
      const contractAbi = abi;
      const contractOwner = {
        addr: "0x1de929d52b94a06f21d57dafe202d36c6ca71c7a",
        key: privateKey
      };
      console.log(`Start to send ${amount} tokens to ${receiver}`);
      const contract = new web3.eth.Contract(contractAbi, contractAddr);
      // Was having some issues with the amount being sent in this function
      const data = contract.methods.transfer(receiver, `0x${this.toHex(amount.toString())}`).encodeABI(); // encodeABI() is required in order to get the method data into opcode/binary format
      const gasPrice = await web3.eth.getGasPrice(); // await added since the function returns a promise
      const nonce = await web3.eth.getTransactionCount(contractOwner.addr); //We need the nonce of the account added await since the function returns a promise
      const gasLimit = 1200000; //Increased the gaslimit after checking one of the successful transactions one the contract
      const rawTransaction = {
        from: contractOwner.addr,
        nonce: web3.utils.toHex(nonce),
        gasPrice: web3.utils.toHex(gasPrice),
        gasLimit: web3.utils.toHex(gasLimit),
        to: receiver,
        value: `0x${this.toHex(amount.toString())}`, //value should be hex
        data: data,
        chainId: 4
      };

      const privKey = Buffer.from(contractOwner.key, "hex");
      const tx = new Tx(rawTransaction);
      tx.sign(privKey);
      const serializedTx = tx.serialize();
      web3.eth
        .sendSignedTransaction("0x" + serializedTx.toString("hex")) //sendRawTransaction is now deprecated, replaced with sendSignedTransaction
        .on("transactionHash", function(hash) {
          console.log("hash:" + hash);
          web3.eth.getTransaction(hash).then(console.log);
        })
        .on("receipt", function(receipt) {
          console.log("receipt: " + receipt);
        })
        .on("error", console.error);
    },

    openDetails({ firstName, lastName, phone, id, walletAddress, imageLink }) {
      this.selectedPerson = {
        firstName,
        lastName,
        phone,
        id,
        walletAddress,
        imageLink
      };
      console.log(this.selectedPerson);
      token.methods
        .balanceOf(walletAddress)
        .call()
        .then(balance => {
          this.myBalance = web3.utils.fromWei(balance.toString(), "ether");
        });

      this.modals.showDetailModal = true;
    },

    createNewPatient() {
      const input = {
        id: parseInt(this.patient.idNumber),
        firstName: this.patient.firstName,
        lastName: this.patient.lastName,
        phone: this.patient.phoneNumber,
        walletAddress: web3.eth.accounts.create().address,
        imageLink: this.imageKey
      };
      API.graphql(graphqlOperation(createPatient, { input }))
        .then(response => {
          this.$notify({
            group: "foo",
            title: "New Patient",
            text: `Patient ${this.patient.idNumber} has been registered.`
          });
          this.patient = {};
          this.imageKey = "";
          this.avatar = null;
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
        id: parseInt(this.practitioner.idNumber),
        firstName: this.practitioner.firstName,
        lastName: this.practitioner.lastName,
        phone: this.practitioner.phoneNumber,
        walletAddress: web3.eth.accounts.create().address,
        imageLink: this.imageKey
      };
      API.graphql(graphqlOperation(createPractitioner, { input }))
        .then(response => {
          this.$notify({
            group: "foo",
            title: "New Practitioner",
            text: `Practitioner ${
              this.practitioner.idNumber
            } has been registered.`
          });
          this.practitioner = {};
          this.imageKey = "";
          this.avatar = null;
        })
        .catch(errors => {
          const err = [];
          errors.map(error, index => err.push(error));
          this.$notify({
            group: "foo",
            title: "New Practitioner",
            text: `${err}`
          });
        });
    },

    async recordActivity() {
      // assign the patient to each of the events
      const input = {
        id: new Date().getTime(),
        eventPatientId: parseInt(this.activity.patient.id),
        eventPractitionerId: parseInt(this.activity.practitioner.id),
        eventType: this.activity.activity.eventName
      };
      const patientWallet = this.activity.patient.walletAddress;

      API.graphql(graphqlOperation(createEvent, { input }))
        .then(async (response) => {
          await this.sendToken(
            this.activity.patient.walletAddress,
            this.activity.activity.reward
          );
          this.$notify({
            group: "foo",
            title: "New Interaction",
            text: `Interaction has been recorded.`
          });
      })
      .catch(error => {
        console.log('Error ', error)
        this.$notify({
          group: "foo",
          title: "New Patient",
          text: `${JSON.stringify(error)}`
        });
      });
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
      this.avatar = null;
      this.patient = {};
      this.practitioner = {};
      this.modals.onboard = false;
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

