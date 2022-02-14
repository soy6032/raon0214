import colors from 'vuetify/es5/util/colors'

export default {
  dev: process.env.NODE_ENV !== 'production',

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '꾸럼이',
    title: '꾸럼이',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'google', value: 'notranslate', content: 'notranslate' },
      { name: 'google-site-verification', content: 'cOX9iNvASpuo31WSee7sRR-ij4NHIIKB4iP3wrNw0cA' },
      { name: 'naver-site-verification', content: '1ccff850ea05845b0161f1163af528faf8ee9b54' } 
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-html2pdf', mode: 'client' },
    //{ src: '@/plugins/html2canvas' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
    // ,
    // ['@nuxtjs/eslint-module', {
    //   fix: true
    // }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-socket-io'
  ],
  io: {
    sockets: [
      {
        // name: socket 식별자 기본값으로 취급되지않는 소켓에 필요
        name: 'projectRoom',
        // url: socket io 서버의 url (window.location 하면 대체로 사용가능)
        //url: 'http://package.eventconnector.net',
        url: process.env.BASE_URL,
        // 기본적으로 사용할 소켓을 지정
        default: true,
        vuex: {},
        namespaces: {}
      }
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: '/api',
    // baseURL: process.env.BASE_URL || 'http://package.eventconnector.net/api'
    withCredentials: true,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    // theme: {
    //   dark: true,
    //   themes: {
    //     dark: {
    //       primary: colors.blue.darken2,
    //       accent: colors.grey.darken3,
    //       secondary: colors.amber.darken3,
    //       info: colors.teal.lighten1,
    //       warning: colors.amber.base,
    //       error: colors.deepOrange.accent4,
    //       success: colors.green.accent3
    //     }
    //   }
    // }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS:true,
    filenames:{
      app: ({ isDev }) => isDev ? '[name].js' : '[contenthash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[contenthash].js',
      css: ({ isDev }) => isDev ? '[name].css' : '[contenthash].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[name].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
    }
  },
  server: {
    port: 80, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
  serverMiddleware: [
    '~/api'
  ]
}