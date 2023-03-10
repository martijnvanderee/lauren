export interface Product {
  id: string;
  title: string;
  description?: string;
  date: Date;
  price: number;
  image: string;
  imageName: string;
}

export interface Cart {
  product: Product;
  amount: number;
  id: string;
}
