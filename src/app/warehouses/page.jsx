import WarehousesActions from "./components/WarehousesActions/WarehousesActions";
import WarehousesStats from "./components/WarehousesStats/WarehousesStats";
import WarehouseStructureTable from "./components/WarehouseStructureTable/WarehouseStructureTable";
import getWarehouseStats from "./services/getWarehouseStats";
import { getWarehouseStructureSummary } from "./services/getWarehouseStructureSummary";

async function WarehousesPage() {
  const warehouseStats = await getWarehouseStats();
  const { data, success } = await getWarehouseStructureSummary();

  return (
    <div>
      <WarehousesStats warehouseStats={warehouseStats} />
      <WarehousesActions />
      <WarehouseStructureTable data={data || []} />
    </div>
  );
}

export default WarehousesPage;
