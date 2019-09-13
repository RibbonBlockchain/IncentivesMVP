import Vue from "vue";
import Vuex from "vuex";

import {
  AuthMutations,
  ModalMutations,
  PatientMutations,
  PractitionerMutation,
  InteractionMutation,
  CHWMutation,
  Web3Mutations
} from "./mutations";
import {
  AuthActions,
  PatientActions,
  PractitionerActions,
  CHWActions,
  Web3Actions
} from "./actions";
import {
  AuthGetters,
  PatientGetters,
  PractitionerGetters,
  CHWGetters,
  Web3Getters
} from "./getters";

Vue.use(Vuex);

const accounts = {};

const store = new Vuex.Store({
  strict: true,
  state: {
    login: {
      isLoading: null,
      error: null,
      user: {}
    },
    patients: {
      data: [],
      error: null
    },
    activities: {
      data: [],
      error: null
    },
    modals: {
      resetModal: false
    },
    practitioners: {
      data: [],
      error: null
    },
    chw: {
		walletAddress: null
	},
    web3: {
      balance: 0,
      rbn: 0
    }
  },
  getters: Object.assign(
    {},
    AuthGetters,
    PatientGetters,
    PractitionerGetters,
    CHWGetters,
    Web3Getters
  ),
  mutations: Object.assign(
    {},
    AuthMutations,
    ModalMutations,
    PatientMutations,
    PractitionerMutation,
    InteractionMutation,
    CHWMutation,
    Web3Mutations
  ),
  actions: Object.assign(
    {},
    AuthActions,
    PatientActions,
    PractitionerActions,
    CHWActions,
    Web3Actions
  ),
  modules: {
    accounts
  }
});

export default store;
