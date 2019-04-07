import {
  LOGIN_ERROR,
  CURRENT_USER,
  LOGIN_PENDING,
  OPEN_LOGIN_MODAL,
  OPEN_RESET_MODAL,
  CLOSE_LOGIN_MODAL,
  CLOSE_RESET_MODAL
} from "./types";

export const AuthMutations = {
  [LOGIN_PENDING](state) {
    state.login.isLoading = true;
    state.login.error = null;
    state.login.user = {};
  },
  [LOGIN_ERROR](state, payload) {
    state.login.isLoading = false;
    state.login.error = payload;
    state.login.user = {};
  },
  [CURRENT_USER](state, payload) {
    state.login.isLoading = false;
    state.login.error = null;
    state.login.user = payload;
  }
};

export const Modals = {
  [OPEN_LOGIN_MODAL](state) {
    state.modals.login = true;
  },
  [CLOSE_LOGIN_MODAL](state) {
    state.modals.login = false;
  },
  [OPEN_RESET_MODAL](state, payload) {
    state.modals.resetModal = true;
    state.login.user = payload;
  },
  [CLOSE_RESET_MODAL](state) {
    state.modals.resetModal = false;
  }
};
