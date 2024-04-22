import { memo } from "react";

function formatPrice(price: string) {
  return parseFloat(price).toLocaleString("vi-VN", {
    style: "currency",
    currency: "vnd",
  });
}

export interface ProductCardProps {
  quantity: number;
  title: string;
  price: string;
  compareAtPrice: string;
  img: string;
}

export const ProductCard = memo((props: ProductCardProps) => {
  const { quantity, title, img, price, compareAtPrice } = props;

  const isOutOfStock = quantity <= 0;
  const percentage: number = Math.floor(
    ((Number(compareAtPrice) - Number(price)) / Number(compareAtPrice)) * 100,
  );

  return (
    <div>
      <a
        href="#"
        className="relative block w-full h-[300px] border rounded-lg overflow-hidden transition-transform transform hover:scale-105"
      >
        {isOutOfStock && (
          <span className="absolute z-[1] bottom-0 left-0 bg-red-500 text-white px-2 py-1 text-xs font-bold">
            Hết hàng
          </span>
        )}
        {percentage > 0 && (
          <span className="absolute z-[1] top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs font-bold">
            -{percentage}%
          </span>
        )}
        <img
          className=" w-full h-full object-cover object-center"
          src={img}
          alt={title}
        />
      </a>
      <h2 className="mt-4 text-base font-bold">
        <a href="#" className="hover:underline">
          {title}
        </a>
      </h2>
      {percentage > 0 && (
        <p>
          <span className="text-gray-500 line-through">
            {formatPrice(compareAtPrice)}
          </span>{" "}
          <span className="text-red-500">{formatPrice(price)}</span>
        </p>
      )}
      {percentage === 0 && (
        <p className="text-gray-500">{formatPrice(price)}</p>
      )}
    </div>
  );
});

ProductCard.displayName = "ProductCard";
