import OutboundResultList from "./components/OutboundResultList/OutboundResultList";
import InventoryOutboundSearch from "./components/InventoryOutboundSearch/InventoryOutboundSearch";
import getWarehouses from "./services/getWarehouses";
import { QueryClientProviderWrapper } from "@/providers/QueryClientProviderWrapper";

async function InventoryOutboundPage() {
  const { message, success, warehouses } = await getWarehouses();
  return (
    <>
      <QueryClientProviderWrapper>
        <InventoryOutboundProvider>
          <InventoryOutboundSearch warehouses={warehouses} />
          <OutboundResultList />
        </InventoryOutboundProvider>
      </QueryClientProviderWrapper>
    </>
  );
}

export default InventoryOutboundPage;
