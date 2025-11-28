import OrdersAction from "@/components/OrdersAction/OrdersAction";
import OrdersTable from "@/app/orders/components/OrdersTable/OrdersTable";
import OrdersStats from "./components/OrdersStats/OrdersStats";
import { getConfirmedOrdersStats } from "./services/getConfirmedOrdersStats";
import { getDraftOrdersStats } from "./services/getDraftOrdersStats";
import { getSalesOrdersDraft } from "./services/getSalesOrdersDraft";
import { getPurchaseOrdersDraft } from "./services/getPurchaseOrdersDraft";
import { getSalesOrders } from "./services/getSalesOrders";
import { getPurchaseOrders } from "./services/getPurchaseOrder";

export const dynamic = "force-dynamic";

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

  const {
    data: myTemporarySalesOrders,
    message: salesMessage,
    status: salesStatus,
  } = await getSalesOrdersDraft();

  const {
    data: myTemporaryPurchaseOrders,
    message: purchaseMessage,
    status: purchaseStatus,
  } = await getPurchaseOrdersDraft();

  const {
    data: myConfirmedSalesOrders,
    message: confirmedSalesMessage,
    status: confirmedSalesStatus,
  } = await getSalesOrders();

  const {
    data: myConfirmedPurchaseOrders,
    message: confirmedPurchaseMessage,
    status: confirmedPurchaseStatus,
  } = await getPurchaseOrders();

  return (
    <div className="">
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
        <OrdersTable
          confirmedSalesOrders={myConfirmedSalesOrders}
          confirmedPurchaseOrders={myConfirmedPurchaseOrders}
          temporarySalesOrders={myTemporarySalesOrders}
          temporaryPurchaseOrders={myTemporaryPurchaseOrders}
        />
      </div>
    </div>
  );
}

export default OrdersPage;
