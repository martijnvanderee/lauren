<script setup lang="ts">
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
import { useCartStore } from "../../store/cart";

const route = useRoute();
const { IsInDatabase, increaseAmount, createProduct, getProductFile } =
  useCartStore();

const id = route.params.id as string;

const handleClick = async (productId: string) => {
  const product = await getProductFile(productId);

  return IsInDatabase(productId)
    ? increaseAmount(productId)
    : createProduct(product);
};
</script>

<template>
  <Navbar />
  <button @click="handleClick(id)">kopen</button>
  <Footer />
</template>
