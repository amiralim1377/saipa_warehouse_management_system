import DashboardNotifications from "./components/DashboardNotifications/DashboardNotifications";
import DashboardQuickActions from "./components/DashboardQuickActions/DashboardQuickActions";
import DashboardQuickLists from "./components/DashboardQuickLists/DashboardQuickLists";
import DashboardSummaryStats from "./components/DashboardSummaryStats/DashboardSummaryStats";

async function DashboradPage() {
  return (
    <div>
      <DashboardSummaryStats />
      <DashboardQuickActions />
      <DashboardNotifications />
      <DashboardQuickLists />
    </div>
  );
}

export default DashboradPage;
