<script setup lang="ts">
import type { Cart } from "../types";

const props = withDefaults(
  defineProps<{
    cart: Cart;
  }>(),
  {}
);
</script>

<template>
  <NuxtLink
    :to="'/product/' + props.cart.id"
    class="flex flex-col items-center bg-white border border-gray-200 shadow md:flex-row md:max-w-xl hover:bg-gray-100"
  >
    <img
      class="object-cover w-full h-20 md:h-auto md:w-20"
      src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
      alt=""
    />
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {{ props.cart.product.title }}
      </h5>
      <p class="mb-3 font-normal text-gray-700">
        {{ props.cart.product.price }}
      </p>

      <p class="mb-3 font-normal text-gray-700">
        {{ props.cart.amount }}
      </p>
    </div>
  </NuxtLink>
</template>
