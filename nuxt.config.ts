// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  extends: ['@nuxt/ui-pro'],
  modules: ["@nuxt/ui", '@nuxtjs/color-mode', 'nuxt-icon']
})
