import { defineStore } from "pinia";
import { computed } from "vue";

export const useCartStore = defineStore("cart", () => {
  const initialValue = [{ amount: 0, productId: "test" }];
  const cart = reactive(initialValue);

  const getAmount = computed(() =>
    cart.reduce((partialSum, product) => partialSum + product.amount, 0)
  );

  const increaseAmount = (productId: string) => {
    console.log("increaseAmount");
    const index = findIndexById(productId);

    console.log("increaseAmount", index);

    if (index === -1) return;

    cart[index] = { amount: cart[index].amount + 1, productId };
  };

  const decreaseAmount = (productId: string) => {
    const index = findIndexById(productId);

    if (index === -1) return;

    cart[index] = { amount: cart[index].amount - 1, productId };
  };

  const createProduct = (productId: string) => {
    const index = findIndexById(productId);

    if (index === -1) cart.push({ productId, amount: 1 });
  };

  const emptyCart = () => cart.splice(0);

  const deleteProduct = (id: string) => {
    const index = findIndexById(id);

    if (index === -1) return;

    cart.splice(index, 1);
  };

  const findIndexById = (id: string) =>
    cart.findIndex((product) => product.productId === id);

  return {
    cart,
    increaseAmount,
    decreaseAmount,
    createProduct,
    emptyCart,
    deleteProduct,
    getAmount,
  };
});
