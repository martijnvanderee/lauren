<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Cart_card from "../components/Cart_card.vue";
import { useCartStore } from "~~/store/cart";

const { getAmount, getProducts } = useCartStore();
</script>

<template>
  <div>
    <Navbar />
    <template v-for="cart in getProducts" v-if="getAmount !== 0">
      <Cart_card :cart="cart" />
    </template>

    <Footer />
  </div>
</template>
