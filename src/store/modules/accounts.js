import * as types from "../types";

const actions = {
  [types.ACCOUNTS_REGISTER]: ({ commit }, options) =>
    account.register(options).then(response => {
      commit(types.ACCOUNTS_REGISTER, res.data);
      commit(types.NOTIFICATION_SUCCESS, "Sign Up successful");
    })
};
