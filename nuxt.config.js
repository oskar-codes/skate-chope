export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'skate-shope',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  a:{
    apiKey: "AIzaSyAbUbveOjn6VMB1QaAZHIR2hYxFfEbQ2Qo",
    authDomain: "artridge-website.firebaseapp.com",
    databaseURL: "https://artridge-website.firebaseio.com",
    projectId: "artridge-website",
    storageBucket: "artridge-website.appspot.com",
    messagingSenderId: "554359864126",
    appId: "1:554359864126:web:56901925bba81278fb0a6f",
    measurementId: "G-0KJBNGLJL4"
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAbUbveOjn6VMB1QaAZHIR2hYxFfEbQ2Qo",
          authDomain: "artridge-website.firebaseapp.com",
          databaseURL: "https://artridge-website.firebaseio.com",
          projectId: "artridge-website",
          storageBucket: "artridge-website.appspot.com",
          messagingSenderId: "554359864126",
          appId: "1:554359864126:web:56901925bba81278fb0a6f",
          measurementId: "G-0KJBNGLJL4"
        },
        services: {
          auth: true
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
