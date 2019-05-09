import {
  LOGIN_ERROR,
  CURRENT_USER,
  LOGIN_PENDING,
  OPEN_LOGIN_MODAL,
  OPEN_RESET_MODAL,
  CLOSE_LOGIN_MODAL,
  CLOSE_RESET_MODAL,
  NEW_PATIENT_SUCCESS,
  NEW_PATIENT_ERROR,
  LIST_PATIENTS,
  LIST_ACTIVITIES,
  PATIENT_ACTIVITY_SUCCESS,
  REGISTER_WEB3_INSTANCE
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

export const ModalMutations = {
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

export const PatientMutations = {
  [LIST_PATIENTS](state, payload) {
    state.patients.data = payload;
    state.patients.error = null;
  },
  [LIST_ACTIVITIES](state, payload) {
    state.activities.data = payload;
    state.activities.error = null;
  },
  [NEW_PATIENT_SUCCESS](state, payload) {
    const { firstName, lastName, id, phone } = payload;
    const data = {
      firstName,
      lastName,
      id,
      phone
    };
    state.patients.data = state.patients.data.concat(data);
    state.patients.error = null;
  },
  [PATIENT_ACTIVITY_SUCCESS](state, payload) {
    state.activities.data = state.patients.data.concat(payload);
    state.activities.error = null;
  },
  [NEW_PATIENT_ERROR](state, payload) {
    state.patients.data = state.patients.data;
    stable.patients.error = payload;
  }
};

export const Web3Mutations = {
  [REGISTER_WEB3_INSTANCE](state, payload) {
    state.web3.web3Instance = Object.assign({}, payload.web3);
    state.web3.contract = Object.assign({}, payload.contract);
  }
};
