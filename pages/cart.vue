<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

import { useCartStore } from "~~/store/cart";
const { getProducts } = useCartStore();

console.log(getProducts);
</script>

<template>
  <div>
    <Navbar />
    cart

    <Footer />
  </div>
</template>
