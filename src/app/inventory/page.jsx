import InventoryAction from "@/components/InventoryAction/InventoryAction";
import InventoryAlertsTable from "@/components/InventoryAlertsTable/InventoryAlertsTable";
import InventoryStats from "./components/InventoryStats/InventoryStats";
import { getInventoryStats } from "./services/getInventoryStats";
import { getLowStockAlerts } from "./services/getLowStockAlerts";

export default async function InventoryPage() {
  const {
    data: statsData,
    message: statsMessage,
    success: statsSuccess,
  } = await getInventoryStats();
  const {
    data: lowStockAlerts,
    message: alertsMessage,
    success: alertsSuccess,
  } = await getLowStockAlerts();

  console.log(lowStockAlerts);

  return (
    <div className="p-6 space-y-8">
      {/* بخش آمار موجودی */}
      <InventoryStats inventoryStats={statsData} />

      {/* بخش عملیات اصلی */}
      <div>
        <h2 className="text-xl font-semibold text-[var(--color-foreground)] mb-2">
          عملیات سریع
        </h2>
        <InventoryAction />
      </div>

      {/* بخش هشدارهای موجودی */}
      <div>
        <h2 className="text-xl font-semibold text-[var(--color-foreground)] mb-2">
          هشدارهای موجودی
        </h2>
        <InventoryAlertsTable lowStockAlerts={lowStockAlerts} />
      </div>
    </div>
  );
}
