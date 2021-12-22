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
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyBxwx4DJ6mE91IyT-6FBaNm4XYNV36MlQ8",
          authDomain: "skate-shope.firebaseapp.com",
          databaseURL: "https://skate-shope-default-rtdb.firebaseio.com",
          projectId: "skate-shope",
          storageBucket: "skate-shope.appspot.com",
          messagingSenderId: "113383502619",
          appId: "1:113383502619:web:2d81ce57260f841ee199be",
          measurementId: "G-PXQMT83XNY"
        },
        services: {
          auth: true,
          database: true
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
