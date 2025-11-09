import getLowStockAlerts from "@/services/getLowStockAlerts";
import ReportsCharts from "./components/ReportsCharts/ReportsCharts";
import ReportsStats from "./components/ReportsStats/ReportsStats";
import getCustomerTypePercentage from "./services/getCustomerTypePercentage";
import getReportsStats from "./services/getReportsStats";
import getSupplierTypePercentage from "./services/getSupplierTypePercentage";
import getWarehouseCapacityStats from "./services/getWarehouseCapacityStats";

export const dynamic = "force-dynamic";

async function ReportsPage() {
  const stats = await getReportsStats();
  const supplierTypePercentage = await getSupplierTypePercentage();
  const customerTypePercentage = await getCustomerTypePercentage();
  const { status, data: warehouseCapacityStats } =
    await getWarehouseCapacityStats();
  const {
    data: lowStockAlerts,
    message: alertsMessage,
    success: alertsSuccess,
  } = await getLowStockAlerts();

  return (
    <div className="p-6 space-y-6">
      {/* آمار کلیدی */}
      <section>
        <ReportsStats statsData={stats} />
      </section>

      {/* نمودارها و تحلیل‌ها */}
      <section>
        <h2 className="text-lg font-semibold mb-2 text-foreground">
          نمودارها و تحلیل‌ها
        </h2>
        <ReportsCharts
          supplierTypePercentage={supplierTypePercentage}
          customerTypePercentage={customerTypePercentage}
          lowStockAlerts={lowStockAlerts}
          warehouseCapacityStats={warehouseCapacityStats}
        />
      </section>
    </div>
  );
}

export default ReportsPage;
