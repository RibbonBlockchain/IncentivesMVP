<template>
  <section class="section section-shaped section-lg my-0">
    <div class="container pt-xs-sm pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="text-center text-muted mb-4">
            <small>Sign in with credentials</small>
          </div>
          <form role="form" @submit.prevent="login">
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
              <base-button
                type="primary"
                :disabled="isLoading =='true'"
                @click="login"
                class="my-4"
              >Sign In</base-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      user: this.$store.state.login
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.login.isLoading;
    }
  },
  methods: {
    login: function() {
      this.$store
        .dispatch("loginUser", {
          username: this.email,
          password: this.password
        })
        .then(() => {
          const { user } = this.$store.state.login;
          this.$emit("closeModal");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style>
</style>
