import Vue from "vue";
import Vuex from "vuex";

import { AuthMutations, ModalMutations, PatientMutations } from "./mutations";
import { AuthActions, PatientActions } from "./actions";
import { AuthGetters } from "./getters";

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
    interactions: [],
    modals: {
      resetModal: false
    }
  },
  getters: Object.assign({}, AuthGetters),
  mutations: Object.assign({}, AuthMutations, ModalMutations),
  actions: Object.assign({}, AuthActions, PatientActions),
  modules: {
    accounts
  }
});

export default store;
