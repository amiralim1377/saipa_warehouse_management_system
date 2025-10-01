import InventoryOutboundSearch from "./components/InventoryOutboundSearch/InventoryOutboundSearch";
import NoWarehouses from "./components/NoWarehouses/NoWarehouses";
import OutboundResultList from "./components/OutboundResultList/OutboundResultList";
import { InventoryOutboundProvider } from "./context/InventoryOutboundProvider";
import getWarehouses from "./services/getWarehouses";
import { QueryClientProviderWrapper } from "@/providers/QueryClientProviderWrapper";

async function InventoryOutboundPage() {
  const { message, success, warehouses } = await getWarehouses();

  if (!success || !warehouses || warehouses.length === 0) {
    return <NoWarehouses message={message} />;
  }

  return (
    <>
      <QueryClientProviderWrapper>
        <InventoryOutboundProvider warehouses={warehouses}>
          <InventoryOutboundSearch />
          <OutboundResultList />
        </InventoryOutboundProvider>
      </QueryClientProviderWrapper>
    </>
  );
}

export default InventoryOutboundPage;
