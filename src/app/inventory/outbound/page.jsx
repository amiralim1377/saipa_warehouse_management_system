import OutboundResultList from "./components/OutboundResultList/OutboundResultList";
import InventoryOutboundSearch from "./components/InventoryOutboundSearch/InventoryOutboundSearch";
import getWarehouses from "./services/getWarehouses";

async function InventoryOutboundPage() {
  const { message, success, warehouses } = await getWarehouses();
  return (
    <>
      <InventoryOutboundSearch warehouses={warehouses} />
      <OutboundResultList />
    </>
  );
}

export default InventoryOutboundPage;
