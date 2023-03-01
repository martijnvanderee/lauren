<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const query: QueryBuilderParams = {
  path: "/products",
  limit: 5,
};
</script>

<template>
  <Navbar />
  <div class="grid grid-cols-3 gap-4">
    <ContentList :query="query" v-slot="{ list }">
      <div v-for="product in list" :key="product._path">
        <div>
          <Card v-bind="product" />
        </div>
      </div>
    </ContentList>
  </div>
  <Footer />
</template>
