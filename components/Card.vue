<script setup lang="ts">
import { Product } from "../types";
import { formatMoney } from "../util/helpers/formatMoney";
interface Product {
  id: string;
  title: string;
  description?: string;
  date: Date;
  price: number;
  image: string[];
  imageName: string;
}

const props = defineProps<Product>();
</script>

<template>
  <div class="card bg-base-100 shadow-xl">
    <NuxtLink :to="'/product/' + props.id" class="cursor-pointer">
      <NuxtImg
        provider="cloudinary"
        :src="props.image[0]"
        width="1000"
        height="1000"
      />
    </NuxtLink>
    <div class="card-body">
      <h2 class="card-title">{{ props.title }}</h2>
      <p>{{ props.description }}</p>
      <p>{{ formatMoney(props.price) }}</p>
      <div class="card-actions justify-end">
        <NuxtLink :to="'/product/' + props.id">
          <button class="btn btn-primary font-sans">Koop nu</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
