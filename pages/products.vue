<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const query: QueryBuilderParams = {
  path: "/products",
  limit: 5,
};
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <ContentList :query="query" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <div>
          <Card
            :title="article.title"
            :description="article.description"
            :image="article.image"
            :price="article.price"
          />
        </div>
      </div>
    </ContentList>
  </div>
</template>
