import getCustomerStats from "./services/getCustomerStats";
import getCustomers from "./services/getCustomers";
import CustomersTable from "./components/CustomersTable/CustomersTable";
import CustomersStats from "./components/CustomersStats/CustomersStats";
import CustomersActions from "./components/CustomersActions/CustomersActions";

export const dynamic = "force-dynamic";

async function CustomersPage() {
  const CustomersData = await getCustomerStats();
  const customers = await getCustomers();

  return (
    <div className=" space-y-6">
      {/* آمار مشتریان */}
      <section>
        <CustomersStats CustomersData={CustomersData} />
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
        <h2 className="text-lg font-semibold mb-2 text-foreground">
          لیست مشتریان
        </h2>
        <CustomersTable customers={customers} />
      </section>
    </div>
  );
}

export default CustomersPage;
