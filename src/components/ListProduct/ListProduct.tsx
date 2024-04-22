import { ProductCard } from "@components/ProductCard";
import { Product } from "@types";

export interface ListProductProps {
  products?: Product[];
  isLoading?: boolean;
}

export function ListProduct(props: ListProductProps) {
  const { products, isLoading } = props;

  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-6 relative">
      {isLoading && (
        <div
          className="
            absolute top-0 left-0 w-full h-full bg-white bg-opacity-80 flex items-center justify-center z-[1]
          "
        />
      )}
      {products &&
        products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              quantity={product.variants[0].inventory_quantity}
              title={product.title}
              img={product.image.src}
              price={product.variants[0].price}
              compareAtPrice={product.variants[0].compare_at_price}
            />
          );
        })}
    </div>
  );
}
