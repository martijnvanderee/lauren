import { defineStore } from "pinia";
import { computed } from "vue";
import { Product } from "../types";
import { productPath, productFileToProduct } from "../util/constants";

const i = {
  amount: 0,
  product: {
    id: "string",
    title: "string",
    description: "string",
    date: new Date(),
    price: 4,
    image: "string",
  },
};

interface Cart {
  product: Product;
  amount: number;
  id: string;
}

export const useCartStore = defineStore("cart", () => {
  const initialValue: Cart[] = [];
  const cart = reactive(initialValue);

  const getAmount = computed(() =>
    cart.reduce((partialSum, product) => partialSum + product.amount, 0)
  );

  const increaseAmount = (id: string) => {
    const index = findIndexById(id);

    if (index === -1) return;

    cart[index] = {
      amount: cart[index].amount + 1,
      id,
      product: cart[index].product,
    };
  };

  const decreaseAmount = (id: string) => {
    const index = findIndexById(id);

    if (index === -1) return;

    cart[index] = {
      amount: cart[index].amount - 1,
      id,
      product: cart[index].product,
    };
  };

  const createProduct = (product: Product) => {
    cart.push({ product, amount: 1, id: product.id });
  };

  const emptyCart = () => cart.splice(0);

  const deleteProduct = (id: string) => {
    if (IsInDatabase(id)) return;

    cart.splice(findIndexById(id), 1);
  };

  const findIndexById = (id: string) =>
    cart.findIndex((product) => product.id === id);

  const IsInDatabase = (id: string) =>
    !!cart.findIndex((product) => product.id === id);

  const getProductFile = async (id: string) => {
    const queryString = productPath(id);

    const ProductFile = await queryContent(queryString).findOne();

    return productFileToProduct(ProductFile);
  };

  const isProductFileValid = () => {};

  return {
    cart,
    increaseAmount,
    decreaseAmount,
    createProduct,
    emptyCart,
    deleteProduct,
    IsInDatabase,
    getProductFile,
    getAmount,
  };
});
