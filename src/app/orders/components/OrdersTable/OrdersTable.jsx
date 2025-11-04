"use client";
import LastConfirmedPurchaseOrder from "../LastConfirmedPurchaseOrder/LastConfirmedPurchaseOrder";
import LastConfirmedSalesOrder from "../LastConfirmedSalesOrder/LastConfirmedSalesOrder";
import LastTemporaryPurchaseOrder from "../LastTemporaryPurchaseOrder/LastTemporaryPurchaseOrder";
import LastTemporarySalesOrder from "../LastTemporarySalesOrder/LastTemporarySalesOrder";

function OrdersTable({
  confirmedSalesOrders,
  confirmedPurchaseOrders,
  temporarySalesOrders,
  temporaryPurchaseOrders,
}) {
  return (
    <div className="space-y-6">
      <LastConfirmedSalesOrder orders={confirmedSalesOrders} />
      <LastConfirmedPurchaseOrder orders={confirmedPurchaseOrders} />
      <LastTemporarySalesOrder orders={temporarySalesOrders} />
      <LastTemporaryPurchaseOrder orders={temporaryPurchaseOrders} />
    </div>
  );
}

export default OrdersTable;
