import ReportsCharts from "./components/ReportsCharts/ReportsCharts";
import ReportsStats from "./components/ReportsStats/ReportsStats";
import ReportsTable from "./components/ReportsTable/ReportsTable";
import getReportsStats from "./services/getReportsStats";

async function ReportsPage() {
  const stats = await getReportsStats();

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
        <ReportsCharts />
      </section>

      {/* جدول جزئیات */}
      <section>
        <h2 className="text-lg font-semibold mb-2 text-foreground">
          جزئیات تراکنش‌ها
        </h2>
        <ReportsTable />
      </section>
    </div>
  );
}

export default ReportsPage;
