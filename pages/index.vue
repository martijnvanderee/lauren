<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Card from "../components/Card.vue";
</script>

<script setup lang="ts">
useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});
</script>

<template>
  <Navbar />

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
