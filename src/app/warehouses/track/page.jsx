import { getCategories } from "@/services/getCategories";
import WarehousesTrackForm from "./components/WarehousesTrackForm";
import getWarehouses from "@/services/getWarehouses";
import NoWarehouses from "../components/NoWarehouses/NoWarehouses";
import WarehouseTrackProvider from "./context/WarehouseTrackProvider";
import { QueryClientProviderWrapper } from "@/providers/QueryClientProviderWrapper/QueryClientProviderWrapper";
import { getSearchProducts } from "@/services/getSearchProducts";
import SearchResultList from "./components/SearchResultList";
import NoProducts from "@/components/NoProducts/NoProducts";

async function WarehousesTrackPage({ searchParams }) {
  const params = await searchParams;
  const {
    query = "",
    warehouse = "",
    zone = "",
    aisle = "",
    rack = "",
    shelf = "",
    category = "",
    subcategory = "",
  } = params || {};
  const {
    message: warehouseMessage,
    success: warehouseSuccess,
    warehouses,
  } = await getWarehouses();

  const {
    message: categoryMessage,
    success: categorySuccess,
    categories,
  } = await getCategories();

  if (!warehouseSuccess || !warehouses || warehouses.length === 0) {
    return <NoWarehouses message={warehouseMessage} />;
  }

  const searchFilters = {
    query,
    warehouse,
    zone,
    aisle,
    rack,
    shelf,
    category,
    subcategory,
  };

  const {
    data: searchResults,
    message,
    success,
  } = await getSearchProducts(searchFilters, warehouses);

  console.log(searchResults);
  console.log(message);
  console.log(success);
  return (
    <>
      <QueryClientProviderWrapper>
        <WarehouseTrackProvider warehouses={warehouses} categories={categories}>
          <WarehousesTrackForm />
          {searchResults && searchResults.length > 0 ? (
            <SearchResultList results={searchResults} />
          ) : (
            <NoProducts message={message || "هیچ محصولی یافت نشد."} />
          )}
        </WarehouseTrackProvider>
      </QueryClientProviderWrapper>
    </>
  );
}

export default WarehousesTrackPage;
