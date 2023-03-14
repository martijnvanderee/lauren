import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
import type { Product } from "../types";

export const NAVBAR_TEXT = {
  LOGO: "Lauren Sleich",
  CART_TITLE: "Items",
};

const navlinks = [
  { name: "over Mij", link: "/about" },
  { name: "products", link: "/products" },
];

export const MAX_AMOUNT_PRODUCTS_HOMEPAGE = 6;
export const PRODUCT_PAGE = "/product";

export const productPath = (path: string) => `/products/${path}`;
export const productFileToProduct = (ProductFile: ParsedContent): Product => ({
  id: ProductFile.id,
  title: ProductFile.title,
  description: ProductFile.description,
  date: ProductFile.date,
  price: ProductFile.price,
  image: ProductFile.image,
  imageName: ProductFile.imageName,
});
