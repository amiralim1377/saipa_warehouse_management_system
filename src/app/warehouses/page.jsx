import WarehouseAlerts from "./components/WarehouseAlerts/WarehouseAlerts";
import WarehousesActions from "./components/WarehousesActions/WarehousesActions";
import WarehousesStats from "./components/WarehousesStats/WarehousesStats";
import getWarehouseStats from "./services/getWarehouseStats";

async function WarehousesPage() {
  const warehouseStats = await getWarehouseStats();

  console.log(warehouseStats);

  return (
    <div>
      <WarehousesStats warehouseStats={warehouseStats} />
      <WarehousesActions />
      <WarehouseAlerts />
    </div>
  );
}

export default WarehousesPage;
