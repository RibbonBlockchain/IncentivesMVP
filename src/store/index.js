import Vue from "vue";
import Vuex from "vuex";

import {
  AuthMutations,
  ModalMutations,
  PatientMutations,
  PractitionerMutation,
  InteractionMutation,
  CHWMutation
} from "./mutations";
import { AuthActions, PatientActions, PractitionerActions, CHWActions } from "./actions";
import { AuthGetters, PatientGetters, PractitionerGetters, CHWGetters } from "./getters";

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
	chw: {},
    web3: {}
  },
  getters: Object.assign({}, AuthGetters, PatientGetters, PractitionerGetters, CHWGetters),
  mutations: Object.assign(
    {},
    AuthMutations,
    ModalMutations,
    PatientMutations,
    PractitionerMutation,
	InteractionMutation,
	CHWMutation
  ),
  actions: Object.assign({}, AuthActions, PatientActions, PractitionerActions, CHWActions),
  modules: {
    accounts
  }
});

export default store;
