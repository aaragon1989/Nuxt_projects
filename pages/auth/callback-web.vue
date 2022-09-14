<template>
  <div>
    <p>Callback web</p>
    <hr />
    <p>This link takes you to a page that has "auth" set to true.</p>
    <NuxtLink to="/secure-example">Secure Example</NuxtLink>
  </div>
</template>

<script>
/* eslint-disable no-console */

// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'

export default {
  name: 'CallbackWeb',
  auth: false,
  data() {
    return {
      token: '',
      decoded: null,
    }
  },
  async mounted() {
    // We arrive here after you click "sign in" and go out to Azure B2C
    // Azure B2C will check its own cookie and if you are still signed it, you skip the sign in
    // Auth package will set auth.local.pkce_state, auth.strategy, and auth.local.pkce_code_verifier in local storage and cookie
    // We have to explicitely tell it to save the token, this sets it with key auth.token
    const token = this.$route.hash.split('id_token=')[1]
    this.token = token
    const decoded = jwt_decode(token)
    this.decoded = decoded
    this.$auth.$storage.setUniversal('token', token) // this sets it with just the token

    await this.setUser()
  },
  methods: {
    async setUser() {
      const userObject = {
        lastName: this.decoded.family_name,
        firstName: this.decoded.given_name,
        email: this.decoded.email,
      }
      await this.$auth.setUser(userObject)
      await this.$auth.setUserToken(this.token, this.token) // this sets it with 'Bearer%20' + the token
      // fetching the user is the secret sauce to getting the user to show as logged in, setting this info alone is not enough
      await this.$auth.fetchUser()
    },
  },
}
</script>
