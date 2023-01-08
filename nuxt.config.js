// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dta9vptzh/image/upload/",
    },
  },
});



