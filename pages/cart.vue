<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Cart_card from "../components/Cart_card.vue";
import { useCartStore } from "~~/store/cart";

const { getAmount } = useCartStore();
</script>

<template>
  <div>
    <Navbar />

    cart
    <Cart_card v-if="getAmount === 0" />
    <Footer />
  </div>
</template>
