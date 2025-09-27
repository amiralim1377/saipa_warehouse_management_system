import WarehouseAlerts from "@/components/WarehouseAlerts/WarehouseAlerts";
import WarehousesActions from "@/components/WarehousesActions/WarehousesActions";
import WarehousesStats from "@/components/WarehousesStats/WarehousesStats";

function WarehousesPage() {
  return (
    <div>
      <WarehousesStats />
      <WarehousesActions />
      <WarehouseAlerts />
    </div>
  );
}

export default WarehousesPage;
