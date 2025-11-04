import { fetchProducts } from "./services/fetchProducts";
import NoProducts from "./components/NoProducts";
import Pagination from "@/components/Pagination/Pagination";
import WarehousePartsTable from "./components/WarehousePartsTable/WarehousePartsTable";
import ProductCategoryFilter from "@/components/ProductCategoryFilter/ProductCategoryFilter";
import ProductsStats from "./components/ProductsStats/ProductsStats";
import getProductsStats from "@/services/getProductsStats";

async function Productspage({ searchParams }) {
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const pageSize = 20;
  const { data, message, status, totalPages, currentPage } =
    await fetchProducts(page, pageSize);

  const {
    data: statsData,
    message: statsMessage,
    success: statsSuccess,
  } = await getProductsStats();

  return (
    <>
      <ProductsStats data={statsData} />
      <div className="flex flex-col lg:flex-row w-full gap-4 p-4">
        <div className="flex-1 flex flex-col space-y-2 overflow-x-auto">
          {status === "success" && data.length > 0 ? (
            <>
              <WarehousePartsTable products={data} />
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
    </>
  );
}

export default Productspage;
