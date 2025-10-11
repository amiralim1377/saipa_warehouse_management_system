import { getPurchaseOrders } from "../../services/getPurchaseOrder";
import { getPurchaseOrdersDraft } from "../../services/getPurchaseOrdersDraft";
import { getSalesOrders } from "../../services/getSalesOrders";
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
    <div className="space-y-6">
      <LastConfirmedSalesOrder orders={myConfirmedSalesOrders} />
      <LastConfirmedPurchaseOrder orders={myConfirmedPurchaseOrders} />
      <LastTemporarySalesOrder orders={myTemporarySalesOrders} />
      <LastTemporaryPurchaseOrder orders={myTemporaryPurchaseOrders} />
    </div>
  );
}

export default OrdersTable;
