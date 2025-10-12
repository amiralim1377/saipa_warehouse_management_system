import OrdersAction from "@/components/OrdersAction/OrdersAction";
import OrdersTable from "@/app/orders/components/OrdersTable/OrdersTable";
import OrdersStats from "./components/OrdersStats/OrdersStats";
import { getConfirmedOrdersStats } from "./services/getConfirmedOrdersStats";
import { getDraftOrdersStats } from "./services/getDraftOrdersStats";

async function OrdersPage() {
  const {
    message: confirmedMessage,
    success: confirmedSuccess,
    data: confirmedOrdersStats,
  } = await getConfirmedOrdersStats();

  const {
    message: draftMessage,
    success: draftSuccess,
    data: draftOrdersStats,
  } = await getDraftOrdersStats();

  return (
    <div className="p-6">
      {/* آمار سفارش‌ها */}
      <OrdersStats
        confirmedOrdersStats={confirmedOrdersStats}
        draftOrdersStats={draftOrdersStats}
      />

      {/* بخش دسترسی سریع */}
      <h2 className="text-lg font-medium text-foreground mt-6 mb-3">
        دسترسی سریع
      </h2>
      <OrdersAction />

      {/* جدول سفارش‌ها */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-foreground mb-3">
          آخرین سفارش‌ها
        </h2>
        <OrdersTable />
      </div>
    </div>
  );
}

export default OrdersPage;
