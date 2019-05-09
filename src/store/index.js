import Vue from "vue";
import Vuex from "vuex";

import {
  AuthMutations,
  ModalMutations,
  PatientMutations,
} from "./mutations";
import { AuthActions, PatientActions } from "./actions";
import { AuthGetters, PatientGetters } from "./getters";

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
    web3: {}
  },
  getters: Object.assign({}, AuthGetters, PatientGetters),
  mutations: Object.assign(
    {},
    AuthMutations,
    ModalMutations,
    PatientMutations,
  ),
  actions: Object.assign({}, AuthActions, PatientActions),
  modules: {
    accounts
  }
});

export default store;
