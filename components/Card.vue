<script setup lang="ts">
export interface Props {
  title: string;
  description?: string;
  image: string;
  price: string;
}

withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div class="card card-compact w-96 bg-base-100 shadow-xl">
    <figure><img :src="image" /></figure>
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="card-actions justify-end">
        <span class="">{{ price }}</span>
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</template>
