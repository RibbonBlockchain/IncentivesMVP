import Vue from "vue";
import Vuex from "vuex";

import {
  AuthMutations,
  ModalMutations,
  PatientMutations,
  PractitionerMutation,
  InteractionMutation
} from "./mutations";
import { AuthActions, PatientActions, PractitionerActions } from "./actions";
import { AuthGetters, PatientGetters, PractitionerGetters } from "./getters";

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
    web3: {}
  },
  getters: Object.assign({}, AuthGetters, PatientGetters, PractitionerGetters),
  mutations: Object.assign(
    {},
    AuthMutations,
    ModalMutations,
    PatientMutations,
    PractitionerMutation,
    InteractionMutation
  ),
  actions: Object.assign({}, AuthActions, PatientActions, PractitionerActions),
  modules: {
    accounts
  }
});

export default store;
