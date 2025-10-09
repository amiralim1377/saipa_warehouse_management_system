import { getSalesOrdersDraft } from "../../services/getSalesOrdersDraft";
import LastConfirmedPurchaseOrder from "../LastConfirmedPurchaseOrder/LastConfirmedPurchaseOrder";
import LastConfirmedSalesOrder from "../LastConfirmedSalesOrder/LastConfirmedSalesOrder";
import LastTemporaryPurchaseOrder from "../LastTemporaryPurchaseOrder/LastTemporaryPurchaseOrder";
import LastTemporarySalesOrder from "../LastTemporarySalesOrder/LastTemporarySalesOrder";

async function OrdersTable() {
  const {
    data: myTemporarySalesOrders,
    message,
    status,
  } = await getSalesOrdersDraft();

  console.log(myTemporarySalesOrders);
  return (
    <div className="space-y-6">
      <LastConfirmedSalesOrder />
      <LastConfirmedPurchaseOrder />
      <LastTemporarySalesOrder orders={myTemporarySalesOrders} />
      <LastTemporaryPurchaseOrder />
    </div>
  );
}

export default OrdersTable;
