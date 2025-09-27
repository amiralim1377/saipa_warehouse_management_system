import OrdersAction from "@/components/OrdersAction/OrdersAction";
import OrdersStats from "@/components/OrdersStats/OrdersStats";
import OrdersTable from "@/components/OrdersTable/OrdersTable";

function OrdersPage() {
  return (
    <div className="p-6">
      {/* آمار سفارش‌ها */}
      <OrdersStats />

      {/* بخش دسترسی سریع */}
      <h2 className="text-lg font-medium text-[var(--color-foreground)] mt-6 mb-3">
        دسترسی سریع
      </h2>
      <OrdersAction />

      {/* جدول سفارش‌ها */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-[var(--color-foreground)] mb-3">
          آخرین سفارش‌ها
        </h2>
        <OrdersTable />
      </div>
    </div>
  );
}

export default OrdersPage;
