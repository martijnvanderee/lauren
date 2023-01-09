<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Card from "../components/Card.vue";

useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});

const query: QueryBuilderParams = {
  path: "/products",
  limit: 5,
};
</script>

<template>
  <Navbar />

  <div class="grid sm:grid-cols-2 gap-4">
    <ContentList :query="query" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <Card
          :title="article.title"
          :description="article.discription"
          :image="article.image"
          :price="article.price"
        />
      </div>
    </ContentList>
  </div>

  <Footer />
</template>
