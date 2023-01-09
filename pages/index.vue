<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

import Navbar from "../components/Navbar.vue";
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

  <ContentList :query="query" v-slot="{ list }">
    <div v-for="article in list" :key="article._path">
      <h2>{{ article.title }}</h2>
      <NuxtImg
        provider="cloudinary"
        :src="article.image"
        width="30"
        height="20"
        :modifiers="{ roundCorner: 'max', effect: 'grayscale' }"
      />
    </div>
  </ContentList>

  <div class="grid sm:grid-cols-2 gap-4">
    <Card
      title="this is a card"
      description="If a dog chews shoes whose shoes does he choose?"
      image="https://placeimg.com/400/225/arch"
      price="13.99"
    />

    <Card
      title="this is a card"
      description="If a dog chews shoes whose shoes does he choose?"
      image="https://placeimg.com/400/225/arch"
      price="13.99"
    />

    <Card
      title="this is a card"
      description="If a dog chews shoes whose shoes does he choose?"
      image="https://placeimg.com/400/225/arch"
      price="13.99"
    />

    <Card
      title="this is a card"
      description="If a dog chews shoes whose shoes does he choose?"
      image="https://placeimg.com/400/225/arch"
      price="13.99"
    />

    <Card
      title="this is a card"
      description="If a dog chews shoes whose shoes does he choose?"
      image="https://placeimg.com/400/225/arch"
      price="13.99"
    />

    <Card
      title="this is a card"
      description="If a dog chews shoes whose shoes does he choose?"
      image="https://placeimg.com/400/225/arch"
      price="13.99"
    />
  </div>
</template>
