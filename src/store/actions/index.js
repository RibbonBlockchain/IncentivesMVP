import { Auth, API, graphqlOperation } from "aws-amplify";
import { listPatients, listEvents } from "../../graphql/queries";
import {
  LOGIN_ERROR,
  CURRENT_USER,
  NEW_PATIENT_SUCCESS,
  PATIENT_ACTIVITY_SUCCESS,
  OPEN_RESET_MODAL,
  LIST_PATIENTS,
  LIST_ACTIVITIES,
  REGISTER_WEB3_INSTANCE
} from "../types";

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
