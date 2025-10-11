"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { PackageOpen, FileDown } from "lucide-react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import OrdersPDFDocument from "../OrdersPDFDocument/OrdersPDFDocument";
import {
  formatNumberFa,
  formatDateFa,
  formatTimeFa,
  toPersianDigits,
  shortId,
} from "../../utils/pdfFormatters";
import DeleteItemButton from "@/components/Form/DeleteItemButton/DeleteItemButton";
import { deletePurchaseOrder } from "../../actions/deletePurchaseOrder";
import TableRowActions from "../TableRowActions/TableRowActions";
import ApproveItemButton from "@/components/Form/ApproveItemButton/ApproveItemButton";
import { approvePurchaseOrder } from "../../actions/approvePurchaseOrder";

const statusMap = {
  draft: "پیش‌نویس",
  pending: "در انتظار",
  confirmed: "تایید شده",
  cancelled: "لغو شده",
};

function LastTemporaryPurchaseOrder({ orders = [] }) {
  const hasOrders = orders.length > 0;
  const [showPDF, setShowPDF] = useState(false);

  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current++;
  }, [orders]);

  const allOrdersDoc = useMemo(() => {
    if (!orders || orders.length === 0) return null;
    return (
      <OrdersPDFDocument
        orders={orders}
        title="گزارش همه سفارش‌های خرید موقت"
      />
    );
  }, [orders]);

  if (!hasOrders) {
    return (
      <div className="overflow-x-auto bg-background p-4 rounded-lg shadow-md">
        <div className="w-full bg-card border border-border rounded-lg p-8 flex flex-col items-center justify-center text-muted-foreground">
          <PackageOpen className="w-12 h-12 mb-3 text-muted" />
          <p className="text-lg font-medium mb-2">
            هنوز هیچ سفارش خرید موقتی ثبت نشده است.
          </p>
          <p className="text-sm text-muted-foreground/80">
            اینجا جدول سفارش‌ها نمایش داده می‌شود.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-background p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">جدول آخرین سفارش‌های خرید موقت</h2>

        {hasOrders && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowPDF(!showPDF)}
              className="flex items-center gap-2 bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition-colors"
            >
              <FileDown className="w-5 h-5" />
              <span>مشاهده PDF</span>
            </button>

            {allOrdersDoc && (
              <PDFDownloadLink
                key={renderCount.current}
                document={allOrdersDoc}
                fileName="temporary-purchase-orders.pdf"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-3 py-2 rounded-md hover:opacity-90"
              >
                {({ loading }) =>
                  loading ? "در حال ساخت PDF..." : "دانلود PDF"
                }
              </PDFDownloadLink>
            )}
          </div>
        )}
      </div>

      {showPDF ? (
        <div className="w-full h-[600px] border rounded-md overflow-hidden">
          <PDFViewer key={renderCount.current} width="100%" height="100%">
            {allOrdersDoc}
          </PDFViewer>
        </div>
      ) : (
        <table className="min-w-full border border-border text-foreground">
          <thead className="bg-primary text-primary-foreground">
            <tr>
              <th className="px-4 py-2 border border-border">شناسه سفارش</th>
              <th className="px-4 py-2 border border-border">
                نام تامین‌کننده
              </th>
              <th className="px-4 py-2 border border-border">جزئیات سفارش</th>
              <th className="px-4 py-2 border border-border">جمع مبلغ</th>
              <th className="px-4 py-2 border border-border">تاریخ ایجاد</th>
              <th className="px-4 py-2 border border-border">وضعیت</th>
              <th className="px-4 py-2 border border-border">PDF</th>
              <th className="px-4 py-2 border border-border">اقدامات</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="text-center bg-card text-card-foreground hover:bg-accent transition-colors"
              >
                <td className="px-4 py-2 border border-border">
                  {toPersianDigits(shortId(order.id))}
                </td>
                <td className="px-4 py-2 border border-border">
                  {order.supplier_name || "[نامشخص]"}
                </td>
                <td className="px-4 py-2 border border-border text-right">
                  {order.items?.map((item, idx) => (
                    <div key={idx}>
                      {item.productName} - تعداد:{" "}
                      {formatNumberFa(item.quantity)} - قیمت:{" "}
                      {formatNumberFa(item.unitPrice)}
                    </div>
                  ))}
                </td>
                <td className="px-4 py-2 border border-border">
                  {formatNumberFa(order.total_amount)}
                </td>
                <td className="px-4 py-2 border border-border text-center">
                  <div className="flex justify-between">
                    <span>{formatTimeFa(order.created_at)}</span>
                    <span>{formatDateFa(order.created_at)}</span>
                  </div>
                </td>
                <td className="px-4 py-2 border border-border">
                  {statusMap[order.status] || order.status}
                </td>
                <td className="px-4 py-2 border border-border">
                  <PDFDownloadLink
                    key={order.id + "-" + renderCount.current}
                    document={
                      <OrdersPDFDocument
                        orders={[order]}
                        title={`گزارش سفارش شماره ${toPersianDigits(
                          shortId(order.id)
                        )}`}
                      />
                    }
                    fileName={`purchase-order-${order.id}.pdf`}
                    className="flex items-center justify-center gap-1 bg-primary text-primary-foreground px-2 py-1 rounded-md hover:opacity-90 cursor-pointer"
                  >
                    دانلود
                  </PDFDownloadLink>
                </td>
                <td className="px-4 py-2 border border-border">
                  <TableRowActions rowId={order.id}>
                    <DeleteItemButton
                      itemId={order.id}
                      itemType="سفارش"
                      deleteFunction={deletePurchaseOrder}
                      onDeleted={() => console.log("Deleted!")}
                    />
                    <ApproveItemButton
                      itemId={order.id}
                      itemType="سفارش"
                      approveFunction={approvePurchaseOrder}
                      onApproved={() => console.log("Approved!")}
                    />
                  </TableRowActions>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LastTemporaryPurchaseOrder;
