require('dotenv').config()

const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './components/**/*.vue',
    './components/**/*.js',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],

  whitelist: ['html', 'body', 'nuxt-progress'],
  whitelistPatterns: [
    // /^w-/, /^text-/, /^overflow-/,
  ],
})

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Ball Scrape',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ball Scrape' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#000',
    throttle: 0,
  },

  generate: {
    fallback: true,
  },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true,
    prefix: '/api'
  },

  proxy: {
    '/api': {
      target: process.env.BACKEND_URL,
      pathRewrite: {
        '^/api': '/api'
      }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    postcss: {
      plugins: [
        require('postcss-import')(),
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer'),
        require('postcss-nesting')(),
        ...process.env.NODE_ENV === 'production'
          ? [purgecss]
          : []
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
