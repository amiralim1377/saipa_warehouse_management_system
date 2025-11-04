import InventoryAction from "@/components/InventoryAction/InventoryAction";
import InventoryStats from "./components/InventoryStats/InventoryStats";
import { getLowStockAlerts } from "./services/getLowStockAlerts";
import NoProducts from "../products/components/NoProducts";
import InventoryAlertsTable from "@/components/InventoryAlertsTable/InventoryAlertsTable";
import getInventoryStats from "./services/getInventoryStats";

export const dynamic = "force-dynamic";

export default async function InventoryPage() {
  const {
    data: statsData = [],
    message: statsMessage,
    success: statsSuccess,
  } = await getInventoryStats();
  const {
    data: lowStockAlerts = [],
    message: alertsMessage,
    success: alertsSuccess,
  } = await getLowStockAlerts();

  return (
    <div className="p-6 space-y-8">
      {/* بخش آمار موجودی */}
      <InventoryStats inventoryStats={statsData} />

      {/* بخش عملیات اصلی */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-2">
          عملیات سریع
        </h2>
        <InventoryAction />
      </div>

      {/* بخش هشدارهای موجودی */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-2">
          هشدارهای موجودی
        </h2>

        {lowStockAlerts.length > 0 ? (
          <InventoryAlertsTable lowStockAlerts={lowStockAlerts} />
        ) : (
          <NoProducts />
        )}
      </div>
    </div>
  );
}
