"use client";

import Pagination from "@/components/Pagination/Pagination";
import WarehousePartsTable from "../WarehousePartsTable/WarehousePartsTable";
import NoProducts from "../NoProducts";
import ProductCategoryFilter from "@/components/ProductCategoryFilter/ProductCategoryFilter";
import { useProducts } from "../../context/ProductsContext";

function ProductPageContent({ message, products, currentPage, totalPages }) {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-4 p-4">
      <div className="flex-1 justify-between flex flex-col space-y-2 overflow-x-auto">
        {products.length > 0 ? (
          <>
            <WarehousePartsTable products={products} />
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </>
        ) : (
          <NoProducts message={message} />
        )}
      </div>

      {/* فیلتر */}
      <div className="w-full lg:w-1/6 overflow-y-auto p-2">
        <ProductCategoryFilter />
      </div>
    </div>
  );
}

export default ProductPageContent;
