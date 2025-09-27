import NotificationsActions from "@/components/NotificationsActions/NotificationsActions";
import NotificationsFilters from "@/components/NotificationsFilters/NotificationsFilters";
import NotificationsStats from "@/components/NotificationsStats/NotificationsStats";
import NotificationsTable from "@/components/NotificationsTable/NotificationsTable";

function NotificationsPage() {
  return (
    <div>
      <NotificationsStats />
      <NotificationsFilters />
      <NotificationsActions />
      <NotificationsTable />
    </div>
  );
}

export default NotificationsPage;
