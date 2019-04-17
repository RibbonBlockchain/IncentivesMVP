import { Auth, API, graphqlOperation } from "aws-amplify";
import { createPatient, createEvent } from "../../graphql/mutations";
import { listPatients, listEvents } from "../../graphql/queries";
import {
  LOGIN_PENDING,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  CURRENT_USER,
  UPDATE_PASSWORD_ERROR,
  UPDATE_PASSWORD_SUCCESS,
  NEW_PATIENT_ERROR,
  NEW_PATIENT_SUCCESS,
  PATIENT_ACTIVITY_ERROR,
  PATIENT_ACTIVITY_SUCCESS,
  OPEN_RESET_MODAL,
  CLOSE_LOGIN_MODAL,
  LIST_PATIENTS,
  LIST_ACTIVITIES
} from "../types";
import getWeb3 from "../../util/getWeb3";
import getContract from "../../util/getContract";

export const AuthActions = {
  loginUser({ commit }, payload) {
    new Promise(async (resolve, reject) => {
      await Auth.signIn({
        username: payload.username,
        password: payload.password
      })
        .then(user => {
          if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
            commit(OPEN_RESET_MODAL, user);
          } else {
            commit(CURRENT_USER, user);
          }
          resolve();
        })
        .catch(err => {
          commit(LOGIN_ERROR, err);
          reject();
        });
    });
  },
  updateCurrentUser({ commit }, payload) {
    commit(CURRENT_USER, payload);
  },
  currentUser({ commit }, payload) {
    new Promise(async (resolve, reject) => {
      const user = await Auth.currentAuthenticatedUser();
      commit(CURRENT_USER, user);
    });
  },
  signOutSuccess({ commit }) {
    commit(CURRENT_USER, {});
  }
};

export const PatientActions = {
  loadPatients({ commit }, payload) {
    API.graphql(graphqlOperation(listPatients))
      .then(response => {
        commit(LIST_PATIENTS, response.data.listPatients.items);
      })
      .catch(err => commit(LIST_PATIENTS, []));
  },
  loadEvents({ commit }, payload) {
    API.graphql(graphqlOperation(listEvents))
      .then(response => commit(LIST_ACTIVITIES, response.data.listEvents.items))
      .catch(err => commit(LIST_ACTIVITIES, []));
  },
  addPatient({ commit }, payload) {
    commit(NEW_PATIENT_SUCCESS, payload);
  },
  addInteraction({ commit }, payload) {
    commit(PATIENT_ACTIVITY_SUCCESS, payload);
  }
};

export const Web3Actions = {
  registerWeb3({ commit }) {
    getWeb3
      .then(result => {
        console.log('Result ',result);
        commit("registerWeb3Instance", result);
      })
      .catch(err => console.log(err));
  },
  getContractInstance({ commit }) {
    getContract
      .then(result => {
        console.log("ContractInstance ", result);
        commit("registerContractInstance", result);
      })
      .catch(err => console.log(err));
  }
};
