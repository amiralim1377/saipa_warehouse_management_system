import ReportsCharts from "./components/ReportsCharts/ReportsCharts";
import ReportsStats from "./components/ReportsStats/ReportsStats";
import ReportsTable from "./components/ReportsTable/ReportsTable";

function ReportsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* آمار کلیدی */}
      <section>
        <ReportsStats />
      </section>

      {/* نمودارها و تحلیل‌ها */}
      <section>
        <h2 className="text-lg font-semibold mb-2 text-[var(--color-foreground)]">
          نمودارها و تحلیل‌ها
        </h2>
        <ReportsCharts />
      </section>

      {/* جدول جزئیات */}
      <section>
        <h2 className="text-lg font-semibold mb-2 text-[var(--color-foreground)]">
          جزئیات تراکنش‌ها
        </h2>
        <ReportsTable />
      </section>
    </div>
  );
}

export default ReportsPage;
