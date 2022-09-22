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
// import jwt_decode from 'jwt-decode'

export default {
  name: 'CallbackWeb',
  auth: false,
  data() {
    return {
      token: '',
      decoded: null
    }
  },
  methods: {
    async setUser() {
      // some logic to get the user
    }
  }
}
</script>
