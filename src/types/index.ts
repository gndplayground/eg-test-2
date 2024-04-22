export interface Product {
  handle: string;
  id: number;
  title: string;
  vendor: string;
  tags: string;
  image: ImageProduct;
  variants: Variant[];
}

export interface ImageProduct {
  id: number;
  src: string;
}

export interface Variant {
  id: number;
  sku: string;
  price: string;
  compare_at_price: string;
  inventory_management: null | string;
  inventory_policy: string;
  inventory_quantity: number;
}
