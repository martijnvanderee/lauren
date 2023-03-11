<script setup lang="ts">
import { ref } from "vue";
import type { Cart } from "../types";
import { useCartStore } from "../store/cart";

const props = withDefaults(
  defineProps<{
    cart: Cart;
  }>(),
  {}
);

const cart = useCartStore();

const { increaseAmount, decreaseAmount, deleteProduct, getTotalAmount } =
  useCartStore();

const open = ref(true);

const handleMinus = () => {
  if (props.cart.amount > 1) decreaseAmount(props.cart.id);
};
const handlePlus = () => {
  increaseAmount(props.cart.id);
};

const handleCross = () => {
  deleteProduct(props.cart.id);
};
</script>

<template>
  <div class="max-w-lg">
    <div class="ml-4 flex flex-1 flex-col">
      <div>
        <div class="flex justify-between text-base font-medium text-gray-900">
          <h3>
            <a>{{ props.cart.product.title }}</a>
          </h3>
          <p class="ml-4">{{ props.cart.product.price }}</p>
        </div>
        <p class="mt-1 text-sm text-gray-500">green</p>
      </div>
      <div class="flex flex-1 items-end justify-between text-sm">
        <p class="text-gray-500">Qty {{ props.cart.amount }}</p>

        <div class="flex">
          <button
            @click="handleCross"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Remove
          </button>
        </div>
      </div>

      <div class="custom-number-input h-10 w-32">
        <div
          class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1"
        >
          <button
            @click="handleMinus"
            class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          >
            <span class="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            type="number"
            class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
            name="custom-input-number"
            :value="cart.amount"
          />
          <button
            @click="handlePlus"
            class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          >
            <span class="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.custom-number-input input:focus {
  outline: none !important;
}

.custom-number-input button:focus {
  outline: none !important;
}
</style>
