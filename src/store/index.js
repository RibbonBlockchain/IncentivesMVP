import Vue from "vue";
import Vuex from "vuex";

import {
  AuthMutations,
  ModalMutations,
  PatientMutations,
  Web3Mutations
} from "./mutations";
import { AuthActions, PatientActions, Web3Actions } from "./actions";
import { AuthGetters, PatientGetters, Web3Getters } from "./getters";

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
    web3: {
      web3Instance: {}
    }
  },
  getters: Object.assign({}, AuthGetters, PatientGetters, Web3Getters),
  mutations: Object.assign(
    {},
    AuthMutations,
    ModalMutations,
    PatientMutations,
    Web3Mutations
  ),
  actions: Object.assign({}, AuthActions, PatientActions, Web3Actions),
  modules: {
    accounts
  }
});

export default store;
