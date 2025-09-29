import EmptyWarehouseState from "./components/EmptyWarehouseState/EmptyWarehouseState";
import WarehouseListView from "./components/WarehouseListView/WarehouseListView";
import getWarehouses from "./services/getWarehouses";

async function WarehousesTable() {
  const warehouses = await getWarehouses();
  return (
    <>
      {!warehouses || warehouses.length === 0 ? (
        <EmptyWarehouseState />
      ) : (
        <WarehouseListView warehouses={warehouses} />
      )}
    </>
  );
}

export default WarehousesTable;
