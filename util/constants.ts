import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

export const productPath = (path: string) => `/products/${path}`;
export const productFileToProduct = (ProductFile: ParsedContent) => ({
  id: ProductFile.id,
  productTitle: ProductFile.productTitle,
  description: ProductFile.description,
  date: ProductFile.date,
  price: ProductFile.price,
  image: ProductFile.image,
});
