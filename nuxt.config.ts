// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});
