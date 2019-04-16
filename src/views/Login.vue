<template>
  <section class="section section-shaped section-lg my-0">
    <div class="container pt-xs-sm pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="text-center text-muted mb-4">
            <small>Sign in with credentials</small>
          </div>
          <form role="form" @submit="login">
            <base-input
              alternative
              class="mb-3"
              placeholder="Email"
              v-model="email"
              addon-left-icon="ni ni-email-83"
            ></base-input>
            <base-input
              alternative
              type="password"
              placeholder="Password"
              v-model="password"
              addon-left-icon="ni ni-lock-circle-open"
            ></base-input>
            <div class="text-center">
              <base-button type="primary" @click="login" :disabled="validate || isLoading" class="my-4">Sign In</base-button>
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
  data() {
    return {
      email: "",
      password: "",
      user: this.$store.state.login,
      isLoading: false
    };
  },
  computed: {
    validate() {
      let emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return !emailRegEx.test(this.email) || this.password.length < 4;
    }
  },
  methods: {
    login: async function() {
      this.isLoading = true;
      await Auth.signIn({
        username: this.email,
        password: this.password
      })
        .then(user => {
          this.isLoading = false;
          if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
            this.$emit("closeModal");
            this.$store.dispatch("updateCurrentUser", user);
            this.$emit("showNewPasswordModal");
          } else {
            this.$store.dispatch("updateCurrentUser", user);
            this.$emit("closeModal");
            // this.$router.go()
          }
        })
        .catch(err => {
          this.isLoading = false;
          this.$notify({
            group: "foo",
            title: "Login failed",
            text: err.message ? err.message : err
          });
        });
    }
  }
};
</script>
<style>
</style>
