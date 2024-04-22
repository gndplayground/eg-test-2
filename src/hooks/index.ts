import { useCallback, useEffect, useState } from "react";

import { Product } from "@types";

const productsExample: Product[] = [
  {
    handle: "ashton-dress",
    id: 1,
    title: "Ashton Dress",
    vendor: "EGANY",
    tags: "ashton, dress, ashton dress",
    image: {
      id: 11,
      src: "https://cdn.shopify.com/s/files/1/0579/4237/6493/products/092121_Nicholas_F21D2058D_ASHTONCOTTONTWILLDROPSHOULDERMINIDRWBELT_PRUNE_2576_2048x_02163664-0416-4de5-b3de-730b91d28541_360x.jpg?v=1650875477",
    },
    variants: [
      {
        id: 111,
        sku: "ashton-dress",
        price: "149000",
        compare_at_price: "149000",
        inventory_management: null,
        inventory_policy: "deny",
        inventory_quantity: 50,
      },
    ],
  },
  {
    handle: "ava-dress",
    id: 2,
    title: "Ava Dress",
    vendor: "EGANY",
    tags: "ava, dress, ava dress",
    image: {
      id: 22,
      src: "https://cdn.shopify.com/s/files/1/0579/4237/6493/products/EmptyName_1425_1365x_c752034c-a5c3-46c4-ae1c-0471290d65fb_360x.jpg?v=1650875515",
    },
    variants: [
      {
        id: 222,
        sku: "ava-dress",
        price: "149000",
        compare_at_price: "199000",
        inventory_management: "manual",
        inventory_policy: "deny",
        inventory_quantity: 50,
      },
    ],
  },
  {
    handle: "brooklyn-top",
    id: 3,
    title: "Brooklyn Top",
    vendor: "EGANY",
    tags: "brooklyn, top, brooklyn top",
    image: {
      id: 33,
      src: "https://cdn.shopify.com/s/files/1/0579/4237/6493/products/EmptyName_853_1365x_1dfa9809-fb12-4d75-8682-3f5f547b0411_360x.jpg?v=1650875374",
    },
    variants: [
      {
        id: 333,
        sku: "brooklyn-top",
        price: "99000",
        compare_at_price: "149000",
        inventory_management: "manual",
        inventory_policy: "deny",
        inventory_quantity: -1,
      },
    ],
  },
  {
    handle: "buttoned-leggings",
    id: 4,
    title: "Buttoned Leggings",
    vendor: "EGANY",
    tags: "buttoned, leggings, buttoned leggings",
    image: {
      id: 44,
      src: "https://cdn.shopify.com/s/files/1/0579/4237/6493/products/5039029800_2_1_1_360x.jpg?v=1650875347",
    },
    variants: [
      {
        id: 444,
        sku: "buttoned-leggings",
        price: "99000",
        compare_at_price: "149000",
        inventory_management: "manual",
        inventory_policy: "allow",
        inventory_quantity: -1,
      },
    ],
  },
  {
    handle: "cropped-denim-shirt",
    id: 5,
    title: "Cropped Denim Shirt",
    vendor: "EGANY",
    tags: "cropped, denim, shirt, cropped denim shirt",
    image: {
      id: 55,
      src: "https://cdn.shopify.com/s/files/1/0579/4237/6493/products/6929016406_6_1_1_360x.jpg?v=1650875253",
    },
    variants: [
      {
        id: 555,
        sku: "cropped-denim-shirt",
        price: "99000",
        compare_at_price: "149000",
        inventory_management: null,
        inventory_policy: "deny",
        inventory_quantity: 10,
      },
    ],
  },
];

async function wait() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

export const useSearchProduct = (options: { isSearch?: boolean }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

  const { isSearch } = options;

  useEffect(() => {
    if (!isSearch) {
      setProducts(productsExample);
      setIsFetched(true);
    } else {
      setProducts([]);
      setIsFetched(false);
    }
  }, [isSearch]);

  const searchProduct = useCallback(
    async (search: string) => {
      if (!search) {
        setProducts(isSearch ? [] : productsExample);
        setIsFetched(false);
        return;
      }
      setIsLoading(true);
      await wait();
      const result = productsExample.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setProducts(result);
      setIsLoading(false);
      setIsFetched(true);
    },
    [isSearch]
  );

  return { searchProduct, products, isLoading, isFetched };
};
