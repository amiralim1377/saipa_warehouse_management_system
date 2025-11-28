"use client";

import Pagination from "@/components/Pagination/Pagination";
import WarehousePartsTable from "../WarehousePartsTable/WarehousePartsTable";
import NoProducts from "../NoProducts";
import ProductCategoryFilter from "@/components/ProductCategoryFilter/ProductCategoryFilter";

function ProductPageContent({ message, products, currentPage, totalPages }) {
  return (
    <div className="flex flex-col items-start   lg:flex-row w-full gap-4 ">
      <div className="flex-1    rounded-lg flex flex-col space-y-2 overflow-x-auto">
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
      <div className="w-full lg:w-1/6  ">
        <ProductCategoryFilter />
      </div>
    </div>
  );
}

export default ProductPageContent;
