import getLowStockAlerts from "@/services/getLowStockAlerts";
import DashboardNotifications from "./components/DashboardNotifications/DashboardNotifications";
import DashboardQuickActions from "./components/DashboardQuickActions/DashboardQuickActions";
import DashboardSummaryStats from "./components/DashboardSummaryStats/DashboardSummaryStats";
import getDashboardSummaryStats from "./services/getDashboardSummaryStats";
import InventoryAlertsTable from "@/components/InventoryAlertsTable/InventoryAlertsTable";
import NoProducts from "../products/components/NoProducts";

async function DashboradPage() {
  const DashboardStats = await getDashboardSummaryStats();
  const {
    data: lowStockAlerts,
    message: alertsMessage,
    success: alertsSuccess,
  } = await getLowStockAlerts();
  return (
    <div>
      <DashboardSummaryStats DashboardStats={DashboardStats} />
      <DashboardQuickActions />
      <DashboardNotifications />

      <h3 className="text-lg font-semibold  my-4">هشدارهای موجودی</h3>
      {lowStockAlerts.length > 0 ? (
        <InventoryAlertsTable lowStockAlerts={lowStockAlerts} />
      ) : (
        <NoProducts />
      )}
    </div>
  );
}

export default DashboradPage;
