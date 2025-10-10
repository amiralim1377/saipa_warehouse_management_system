import { getPurchaseOrdersDraft } from "../../services/getPurchaseOrdersDraft";
import { getSalesOrdersDraft } from "../../services/getSalesOrdersDraft";
import LastConfirmedPurchaseOrder from "../LastConfirmedPurchaseOrder/LastConfirmedPurchaseOrder";
import LastConfirmedSalesOrder from "../LastConfirmedSalesOrder/LastConfirmedSalesOrder";
import LastTemporaryPurchaseOrder from "../LastTemporaryPurchaseOrder/LastTemporaryPurchaseOrder";
import LastTemporarySalesOrder from "../LastTemporarySalesOrder/LastTemporarySalesOrder";

async function OrdersTable() {
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

  console.log(myTemporaryPurchaseOrders);

  return (
    <div className="space-y-6">
      <LastConfirmedSalesOrder />
      <LastConfirmedPurchaseOrder />
      <LastTemporarySalesOrder orders={myTemporarySalesOrders} />
      <LastTemporaryPurchaseOrder orders={myTemporaryPurchaseOrders} />
    </div>
  );
}

export default OrdersTable;
