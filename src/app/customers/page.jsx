import CustomersActions from "@/components/CustomersActions/CustomersActions";
import CustomersStats from "@/components/CustomersStats/CustomersStats";
import CustomersTable from "@/components/CustomersTable/CustomersTable";

function CustomersPage() {
  return (
    <div className="p-6 space-y-6">
      {/* آمار مشتریان */}
      <section>
        <CustomersStats />
      </section>

      {/* دسترسی سریع */}
      <section>
        <h2 className="text-lg font-semibold mb-2 text-[var(--color-foreground)]">
          دسترسی سریع
        </h2>
        <CustomersActions />
      </section>

      {/* جدول مشتریان */}
      <section>
        <h2 className="text-lg font-semibold mb-2 text-[var(--color-foreground)]">
          لیست مشتریان
        </h2>
        <CustomersTable />
      </section>
    </div>
  );
}

export default CustomersPage;
