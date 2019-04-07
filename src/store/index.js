import Vue from "vue";
import Vuex from "vuex";

import { AuthMutations, Modals } from "./mutations";
import { AuthActions } from "./actions";
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
    patients: [],
    interactions: [],
    modals: {
      resetModal: false
    }
  },
  getters: Object.assign({}, AuthGetters),
  mutations: Object.assign({}, AuthMutations, Modals),
  actions: Object.assign({}, AuthActions),
  modules: {
    accounts
  }
});

export default store;
