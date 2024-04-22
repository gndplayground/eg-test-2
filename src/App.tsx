import debounce from "lodash.debounce";
import { useCallback, useMemo, useState } from "react";

import { ListProduct } from "@components";
import { LoadingSpinner } from "@components/LoadingSpinner";
import { useSearchProduct } from "@hooks";

export function App() {
  const [displayAll, setDisplayAll] = useState(false);
  const [search, setSearch] = useState("");

  const { products, searchProduct, isLoading, isFetched } = useSearchProduct({
    isSearch: !displayAll,
  });

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    searchProductionDebounce(e.target.value);
  }

  const memoizedCallback = useMemo(() => {
    return debounce((search: string) => {
      searchProduct(search);
    }, 500);
  }, [searchProduct]);

  const searchProductionDebounce = useCallback(memoizedCallback, [
    memoizedCallback,
  ]);

  const isNotFound = search && isFetched && !isLoading && products.length === 0;

  return (
    <main>
      <div className="max-w-[600px] mx-auto py-20">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            {displayAll ? "Tất cả sản phẩm" : "Tìm sản phẩm"}
          </h1>
          <button
            className="ml-auto px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => {
              setDisplayAll(!displayAll);
              setSearch("");
            }}
          >
            {displayAll ? "Sang tìm kiếm" : "Hiện tất cả"}
          </button>
        </div>

        {!displayAll && (
          <div className="mt-2 relative">
            <input
              type="text"
              placeholder="Enter the product name to search"
              className="w-full pl-4 pr-10 py-2 border rounded-lg"
              value={search}
              onChange={handleSearch}
            />
            {isLoading && (
              <div className="absolute top-0 right-0 bottom-0 flex items-center pr-4">
                <LoadingSpinner />
              </div>
            )}
          </div>
        )}
        <div className="mt-6">
          {isNotFound && (
            <h2 className="text-center text-lg font-bold">
              Không tìm thấy sản phẩm
            </h2>
          )}
          <ListProduct isLoading={isLoading} products={products} />
        </div>
      </div>
    </main>
  );
}
