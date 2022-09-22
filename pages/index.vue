<template>
  <div>
    <p>Index page</p>
    <button id="button" @click="handleLogIn">Login</button>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'IndexPage',
  auth: false,
  mounted(){
    console.log('%clogging auth access from hooks', 'color:green;', this.$auth);
  },
  methods: {
    async handleLogIn() {
      await this.$auth.login();
    }
  }
}
</script>