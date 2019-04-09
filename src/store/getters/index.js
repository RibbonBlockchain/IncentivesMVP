export const AuthGetters = {
  loginUser: (state, getters) => {
    return state.login;
  }
};

export const ModalGetters = {
  modal: (state, getters) => {
    return state.modals;
  }
};

export const PatientGetters = {
  modal: (state, getters) => {
    return state.patients;
  }
};
