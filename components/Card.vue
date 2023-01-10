<script setup lang="ts">
export interface Props {
  title: string;
  description?: string;
  image: string;
  price: number;
}

withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div class="card bg-base-100 shadow-xl">
    <figure>
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
    </figure>
    <div class="card-body">
      <h2 class="card-title">Shoes!</h2>
      <p>{{ description }}</p>
      <div class="card-actions justify-end">
        <NuxtLink :to="'/product/' + title">
          <button class="btn btn-primary">Buy Now</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<!-- <NuxtImg
        provider="cloudinary"
        :src="image"
        width="1000"
        height="1000"
        :modifiers="{ effect: 'grayscale' }"
      /> -->
