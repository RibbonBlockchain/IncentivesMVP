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
              <base-button :disabled="!password" type="primary" @click="updatePassword" class="my-4">Update My Password</base-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "NewPassword",
  data() {
    return {
      password: ""
    };
  },
  methods: {
    updatePassword() {
      const { user } = this.$store.state.login;
      this.$store
        .dispatch("updatePassword", {
          user,
          password: this.password
        })
        .then(() => {
          this.$router.push({
            path: "/dashboard"
          });
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
