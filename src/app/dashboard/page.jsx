import DashboardNotifications from "./components/DashboardNotifications/DashboardNotifications";
import DashboardQuickActions from "./components/DashboardQuickActions/DashboardQuickActions";
import DashboardQuickLists from "./components/DashboardQuickLists/DashboardQuickLists";
import DashboardSummaryStats from "./components/DashboardSummaryStats/DashboardSummaryStats";
import getDashboardSummaryStats from "./services/getDashboardSummaryStats";

async function DashboradPage() {
  const DashboardStats = await getDashboardSummaryStats();
  return (
    <div>
      <DashboardSummaryStats DashboardStats={DashboardStats} />
      <DashboardQuickActions />
      <DashboardNotifications />
      <DashboardQuickLists />
    </div>
  );
}

export default DashboradPage;
