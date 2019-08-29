import { Auth, API, graphqlOperation } from "aws-amplify";
import {
  listPatients,
  listInteractions,
  listPractitioners,
  getChw
} from "../../graphql/queries";
import {
  LOGIN_ERROR,
  CURRENT_USER,
  NEW_PATIENT_SUCCESS,
  NEW_ACTIVITY_SUCCESS,
  OPEN_RESET_MODAL,
  LIST_PATIENTS,
  LIST_ACTIVITIES,
  LIST_PRACTITIONERS,
  NEW_PRACTITIONER_SUCCESS,
  SET_CHW,
  WEB3_BALANCE,
  TOKEN_BALANCE
} from "../types";

import abi from "../../abi.json";

import { ethers } from "ethers";

const contractAddr = "0x180170386b1794ccf5bb5bb420658b76bcdb5262";
const contractAbi = abi;
let provider = new ethers.providers.Web3Provider(web3.currentProvider);

const signer = provider.getSigner();
const contract = new ethers.Contract(
  contractAddr,
  contractAbi,
  provider.getSigner(0)
);

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
    API.graphql(
      graphqlOperation(listPatients, {
        limit: 1000
      })
    )
      .then(response => {
        commit(LIST_PATIENTS, response.data.listPatients.items);
      })
      .catch(err => commit(LIST_PATIENTS, []));
  },
  loadEvents({ commit }, payload) {
    API.graphql(
      graphqlOperation(listInteractions, {
        limit: 1000
      })
    )
      .then(response => {
        commit(LIST_ACTIVITIES, response.data.listInteractions.items);
      })
      .catch(err => commit(LIST_ACTIVITIES, []));
  },
  addPatient({ commit }, payload) {
    commit(NEW_PATIENT_SUCCESS, payload);
  },
  addInteraction({ commit }, payload) {
    commit(NEW_ACTIVITY_SUCCESS, payload);
  }
};

export const Web3Actions = {
  async loadBalance({ commit }, payload) {
    await contract.balanceOf(payload).then(balance => {
      commit(WEB3_BALANCE, ethers.utils.formatEther(balance));
    });
  },
  async loadTokenBalance({ commit }, payload) {
    let _account = signer.provider._web3Provider.selectedAddress;
    await contract.balanceOf(_account).then(balance => {
      commit(TOKEN_BALANCE, ethers.utils.formatEther(balance));
    });
  }
};
export const PractitionerActions = {
  loadPractitioners({ commit }, payload) {
    API.graphql(
      graphqlOperation(listPractitioners, {
        limit: 1000
      })
    )
      .then(response => {
        commit(LIST_PRACTITIONERS, response.data.listPractitioners.items);
      })
      .catch(err => commit(LIST_PRACTITIONERS, []));
  },

  addPractitioner({ commit }, payload) {
    commit(NEW_PRACTITIONER_SUCCESS, payload);
  }
};

export const CHWActions = {
  loadCHW({ commit }, payload) {
    const input = {
      id: payload
    };
    API.graphql(graphqlOperation(getChw, input))
      .then(response => {
        commit(SET_CHW, response.data.getCHW);
      })
      .catch(err => {
        commit(SET_CHW, {});
      });
  },
  setCHW({ commit }, payload) {
    commit(SET_CHW, payload);
  }
};
