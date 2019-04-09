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
  LIST_PATIENTS
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
  updatePassword({ commit }, payload) {
    new Promise(async (resolve, reject) => {
      const { user, password } = payload;
      const { requiredAttributes } = user.challengeParam;
      await user.completeNewPasswordChallenge(password, requiredAttributes, {
        onSuccess: function(session) {
          commit(CURRENT_USER, session);
          resolve();
        },
        onFailure: function(err) {
          commit(LOGIN_ERROR, err);
          reject();
        }
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
  loadPatient({ commit }, payload) {
    API.graphql(graphqlOperation(listPatients))
      .then(response => {
        commit(LIST_PATIENTS, response.data.listPatients.items);
      })
      .catch(err => commit(LIST_PATIENTS, []));
  },
  loadInteraction({ commit }, payload) {
    API.graphql(graphqlOperation(listEvents))
      .then(response => commit(PATIENT_ACTIVITY_SUCCESS, response.data))
      .catch(err => commit(PATIENT_ACTIVITY_SUCCESS, []));
  },
  addPatient({ commit }, payload) {
    commit(NEW_PATIENT_SUCCESS, payload);
  },
  async addInteraction({ commit }, payload) {
    await API.graphql(graphqlOperation(createEvent, payload))
      .then(response => commit(PATIENT_ACTIVITY_SUCCESS, response))
      .catch(err => commit(PATIENT_ACTIVITY_ERROR, err));
  }
};
