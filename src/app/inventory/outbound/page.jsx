import InventoryOutboundSearch from "./components/InventoryOutboundSearch/InventoryOutboundSearch";
import NoWarehouses from "./components/NoWarehouses/NoWarehouses";
import OutboundResultList from "./components/OutboundResultList/OutboundResultList";
import { InventoryOutboundProvider } from "./context/InventoryOutboundProvider";
import { getCategories } from "./services/getCategories";
import getWarehouses from "./services/getWarehouses";
import { QueryClientProviderWrapper } from "@/providers/QueryClientProviderWrapper";

async function InventoryOutboundPage() {
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

  return (
    <>
      <QueryClientProviderWrapper>
        <InventoryOutboundProvider
          warehouses={warehouses}
          categories={categories}
        >
          <InventoryOutboundSearch />
          <OutboundResultList />
        </InventoryOutboundProvider>
      </QueryClientProviderWrapper>
    </>
  );
}

export default InventoryOutboundPage;
