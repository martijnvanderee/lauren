<script setup lang="ts">
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
import { useCartStore } from "../../store/cart";

const route = useRoute();
const { IsInDatabase, increaseAmount, createProduct, getProduct } =
  useCartStore();

console.log(route.params);
const id = route.params.id as string;
const product = await getProduct(id);

// const handleClick = async (productId: string) =>
//   IsInDatabase(productId) ? increaseAmount(productId) : createProduct(product);
</script>

<template>
  <Navbar />
  <!-- <button class="btn" @click="handleClick(id)">kopen</button> -->
  <Footer />
</template>
