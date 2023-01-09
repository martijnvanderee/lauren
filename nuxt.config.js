// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content",'@nuxt/image-edge'],
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dta9vptzh/image/upload/v1660031583/lauren/',
    },
  },
});





