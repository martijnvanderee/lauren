<script setup lang="ts">
import { storeToRefs } from "pinia";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Cart_card from "../components/Cart_card.vue";
import { useCartStore } from "~~/store/cart";

const cart = useCartStore();
const { getProducts, IsProductInCart } = storeToRefs(cart);
</script>

<template>
  <div>
    <Navbar />

    <template v-if="!IsProductInCart">
      <div>Nothing Left in cart</div>
      <NuxtLink to="/" class="btn">go back </NuxtLink>
    </template>

    <template v-for="cart in getProducts" v-else>
      <Cart_card :cart="cart" />
    </template>

    <Footer />
  </div>
</template>
