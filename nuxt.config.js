import tailwindTypography from '@tailwindcss/typography'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content",'@nuxt/image-edge', '@pinia/nuxt',  '@pinia-plugin-persistedstate/nuxt'],
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dta9vptzh/image/upload/v1660031583/lauren/',
    },
  },
   tailwindcss: {
    config: {
      plugins: [tailwindTypography]
    }
  }
});





