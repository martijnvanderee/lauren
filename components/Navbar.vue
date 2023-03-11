<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore } from "../store/cart";
import { NAVBAR_TEXT } from "../util/constants";
import Basket_card from "./Basket_card.vue";

const cart = useCartStore();
const { getTotalAmount, IsProductInCart, getTotalPrice, getProducts } =
  storeToRefs(cart);
</script>

<template>
  <div class="navbar bg-primary">
    <div class="flex-1">
      <NuxtLink class="btn btn-ghost normal-case text-xl text-white" to="/"
        >{{ NAVBAR_TEXT.LOGO }}
      </NuxtLink>
    </div>
    <div class="flex-none">
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 text-white">
          <li>
            <NuxtLink to="/about">About </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products">Products </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
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
            <span class="badge badge-sm indicator-item"
              >{{ getTotalAmount }}
            </span>
          </div>
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
