<!-- eslint-disable no-console -->
<template>
  <div>
    <p>Index page</p>
    <button @click="handleLogIn">Login</button>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'IndexPage',
  auth: false,
  methods: {
    async handleLogIn() {
      console.log(this.$auth)
      try {
        const response = await this.$auth.loginWith('local')
        // the auth package will set auth.local.pkce_state, auth.strategy, and auth.local.pkce_code_verifier in local storage and cookie
        console.log('response', response)
      } catch (err) {
        console.log('err', err)
      }
    },
  },
}
</script>