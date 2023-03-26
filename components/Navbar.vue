<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore } from "../store/cart";
import { NAVBAR_TEXT } from "../util/constants";
import Basket_card from "./Basket_card.vue";

const cart = useCartStore();
const { getTotalAmount, IsProductInCart, getTotalPrice, getProducts } =
  storeToRefs(cart);

useHead({
  script: [
    {
      src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
    },
  ],
});
</script>

<template>
  <div class="navbar bg-primary flex justify-between">
    <div class="">
      <NuxtLink class="btn btn-ghost normal-case text-xl text-white" to="/"
        >{{ NAVBAR_TEXT.LOGO }}
      </NuxtLink>
      <lottie-player
        src="https://assets9.lottiefiles.com/private_files/lf30_y71nkwza.json"
        background="transparent"
        speed="1"
        style="width: 75px; height: 50px"
        loop
        autoplay
      ></lottie-player>
    </div>
    <div class="">
      <div class="navbar-center lg:flex">
        <ul class="menu menu-horizontal px-1 text-white">
          <li>
            <NuxtLink to="/about">Over mij </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products">Producten </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="">
          <button class="btn glas gap-2 font-sans">
            Winkel
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="badge badge-sm indicator-item bg-primary"
                >{{ getTotalAmount }}
              </span>
            </div>
          </button>
        </label>

        <div
          tabindex="0"
          class="mt-3 card card-compact dropdown-content bg-base-100 shadow"
        >
          <div class="card-body w-72" v-if="IsProductInCart">
            <span class="text-info"> {{ getTotalPrice }}</span>
            <span class="text-info"
              >{{ getTotalAmount }} products in basket</span
            >
            <div class="card-actions">
              <button class="btn btn-primary btn-block">
                <NuxtLink to="/cart">View cart</NuxtLink>
              </button>
            </div>

            <template v-for="cart in getProducts">
              <Basket_card :cart="cart" />
            </template>
          </div>

          <div class="card-body" v-else>No items in basket</div>
        </div>
      </div>
    </div>
  </div>
</template>
