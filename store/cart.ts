import { defineStore } from "pinia";
import { computed } from "vue";
import { Product, Cart } from "../types";
import { productPath, productFileToProduct } from "../util/constants";

export const useCartStore = defineStore(
  "cart",
  () => {
    const cart = reactive<Cart[]>([]);

    const getProducts = computed(() => cart);

    const getTotalAmount = computed(() =>
      cart.reduce((partialSum, product) => partialSum + product.amount, 0)
    );

    const getTotalPrice = computed(() =>
      cart.reduce(
        (partialSum, product) =>
          partialSum + product.amount * product.product.price,
        0
      )
    );

    const IsProductInCart = computed(() => {
      return getTotalAmount.value === 0 ? false : true;
    });

    const increaseAmount = (id: string) => {
      const index = findIndexById(id);

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
      if (!IsInDatabase(id)) return;

      cart.splice(findIndexById(id), 1);
    };

    const findIndexById = (id: string) =>
      cart.findIndex((product) => {
        return product.id === id;
      });

    const IsInDatabase = (id: string) =>
      cart.findIndex((product) => product.id === id) === -1 ? false : true;

    const getProduct = async (id: string): Promise<Product> => {
      const ProductFile = await queryContent("products")
        .where({ id })
        .findOne();

      return productFileToProduct(ProductFile);
    };

    return {
      cart,
      increaseAmount,
      decreaseAmount,
      createProduct,
      emptyCart,
      deleteProduct,
      IsInDatabase,
      getProduct,
      getTotalAmount,
      getProducts,
      getTotalPrice,
      IsProductInCart,
    };
  },
  {
    persist: true,
  }
);
