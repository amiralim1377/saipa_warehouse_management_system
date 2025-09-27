import InventoryAction from "@/components/InventoryAction/InventoryAction";
import InventoryAlertsTable from "@/components/InventoryAlertsTable/InventoryAlertsTable";
import InventoryStats from "@/components/InventoryStats/InventoryStats";
import { getCategories } from "@/app/inventory/inbound/services/getCategories";

export default async function InventoryPage() {
  return (
    <div className="p-6 space-y-8">
      {/* بخش آمار موجودی */}
      <InventoryStats />

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
        <InventoryAlertsTable />
      </div>
    </div>
  );
}
