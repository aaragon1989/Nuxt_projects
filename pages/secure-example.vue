<template>
  <div>
    <p>Secure Example</p>
    <button @click="handleRefreshToken">Refresh Token</button>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'SecureExample',
  auth: true,
  methods: {
    handleRefreshToken() {
    //   console.log('handling refresh token')
    //   // Refresh tokens, but it's not working as there is no refresh token coming back from B2C and being saved in the local storage and cookie
    //   this.$auth.refreshTokens()
    },
  },
}
</script>