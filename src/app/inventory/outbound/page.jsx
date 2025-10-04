import InventoryOutboundSearch from "./components/InventoryOutboundSearch/InventoryOutboundSearch";
import NoProducts from "./components/NoProductsFound/NoProductsFound";
import NoWarehouses from "./components/NoWarehouses/NoWarehouses";
import OutboundResultList from "./components/OutboundResultList/OutboundResultList";
import { InventoryOutboundProvider } from "./context/InventoryOutboundProvider";
import { getCategories } from "./services/getCategories";
import { getSearchProducts } from "./services/getSearchProducts";
import getWarehouses from "./services/getWarehouses";
import { QueryClientProviderWrapper } from "@/providers/QueryClientProviderWrapper";

async function InventoryOutboundPage({ searchParams }) {
  const {
    query = "",
    warehouse = "",
    zone = "",
    aisle = "",
    rack = "",
    shelf = "",
    category = "",
    subcategory = "",
  } = searchParams || {};

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

  return (
    <>
      <QueryClientProviderWrapper>
        <InventoryOutboundProvider
          warehouses={warehouses}
          categories={categories}
        >
          <InventoryOutboundSearch />
          {searchResults && searchResults.length > 0 ? (
            <OutboundResultList results={searchResults} />
          ) : (
            <NoProducts message={message || "هیچ محصولی یافت نشد."} />
          )}
        </InventoryOutboundProvider>
      </QueryClientProviderWrapper>
    </>
  );
}

export default InventoryOutboundPage;
