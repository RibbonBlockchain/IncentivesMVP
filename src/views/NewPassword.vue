<template>
  <section class="section section-shaped section-lg my-0">
    <div class="container pt-xs-sm pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="text-center text-muted mb-4">
            <small>Change Your Password</small>
          </div>
          <form role="form" @submit.prevent="updatePassword">
            <base-input
              alternative
              type="password"
              placeholder="Password"
              v-model="password"
              addon-left-icon="ni ni-lock-circle-open"
            ></base-input>
            <div class="text-center">
              <base-button
                :disabled="!password"
                type="primary"
                @click="updatePassword"
                class="my-4"
              >Update My Password</base-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Auth } from "aws-amplify";

export default {
  name: "NewPassword",
  data() {
    return {
      password: ""
    };
  },
  methods: {
    async updatePassword() {
      const { user } = this.$store.state.login;
      const { requiredAttributes } = user.challengeParam;
      await Auth.completeNewPassword(user, this.password, requiredAttributes)
        .then(user => {
          this.$emit("closeModal");
          this.$store.dispatch("signOutSuccess");
          this.$notify({
            group: "foo",
            title: "Password Reset success",
            text:
              "Your password has been changed successfully. You can now login in"
          });
        })
        .catch(err => {
          this.$notify({
            group: "foo",
            title: "Password Reset Failed",
            text: err.message ? err.message : err
          });
        });
    }
  }
};
</script>
<style>
</style>
