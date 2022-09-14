export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'auth-b2c-js',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Auth
  auth: {
    vuex: ['store/auth'],
    redirect: {
      login: '/unsecure-example',
      callback: '/auth/callback-web',
    },
    strategies: {
      local: {
        scheme: 'oauth2',
        token: {
          property: 'access_token',
          maxAge: 1800,
          global: true,
          // type: 'Bearer'
        },
        refreshToken: {
          property: 'refresh_token',
          data: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30,
        },
        endpoints: {
          // Even though docs show objects with url and method properties, it only take a string, the url
          authorization: process.env.AUTHORIZATION_ENDPOINT,
          login: { url: process.env.AUTHORIZATION_ENDPOINT, method: 'post' },
          token: { url: process.env.TOKEN_ENDPOINT, method: 'post' },
          refresh: process.env.TOKEN_ENDPOINT,
          logout: { url: process.env.LOGOUT_ENDPOINT, method: 'post' },
        },
        responseType: 'code id_token',
        grantType: 'authorization_code',
        accessType: 'offline',
        clientId: process.env.AUTHORIZATION_CLIENT_ID,
        codeChallengeMethod: 'S256',
        scope: ['openid', 'profile'],
        autoLogout: true,
        autoFetchUser: true,
      },
    },
  },

  router: {
    middleware: ['auth'],
  },
}
