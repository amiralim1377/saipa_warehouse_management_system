"use client";

import React, { useState, useMemo } from "react";
import { PackageOpen, FileDown } from "lucide-react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { OrdersPDFDocument } from "../OrdersPDFDocument/OrdersPDFDocument";
import {
  formatNumberFa,
  formatDateFa,
  formatTimeFa,
  toPersianDigits,
  shortId,
} from "../../utils/pdfFormatters";

const statusMap = {
  draft: "پیش‌نویس",
  pending: "در انتظار",
  confirmed: "تایید شده",
  cancelled: "لغو شده",
};

function LastTemporaryPurchaseOrder({ orders = [] }) {
  const hasOrders = orders.length > 0;
  const [showPDF, setShowPDF] = useState(false);

  const allOrdersDoc = useMemo(
    () => (
      <OrdersPDFDocument
        orders={orders}
        title="گزارش همه سفارش‌های خرید موقت"
      />
    ),
    [orders]
  );

  if (!hasOrders) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-muted-foreground">
        <PackageOpen className="w-12 h-12 mb-3 text-muted" />
        <p className="text-lg font-medium">
          هنوز هیچ سفارش خرید موقتی ثبت نشده است.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-background p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">جدول آخرین سفارش‌های خرید موقت</h2>

        {hasOrders && (
          <div className="flex items-center gap-2">
            {/* نمایش PDF آنلاین */}
            <button
              onClick={() => setShowPDF(!showPDF)}
              className="flex items-center gap-2 bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition-colors"
            >
              <FileDown className="w-5 h-5" />
              <span>مشاهده PDF</span>
            </button>

            {/* دانلود PDF کل سفارش‌ها */}
            <PDFDownloadLink
              document={allOrdersDoc}
              fileName="temporary-purchase-orders.pdf"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-3 py-2 rounded-md hover:opacity-90"
            >
              {({ loading }) => (loading ? "در حال ساخت PDF..." : "دانلود PDF")}
            </PDFDownloadLink>
          </div>
        )}
      </div>

      {showPDF ? (
        <div className="w-full h-[600px] border rounded-md overflow-hidden">
          <PDFViewer width="100%" height="100%">
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
                      {item.name} - تعداد: {formatNumberFa(item.quantity)} -
                      قیمت: {formatNumberFa(item.unitPrice)}
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

                {/* دانلود PDF تک سفارش */}
                <td className="px-4 py-2 border border-border">
                  <PDFDownloadLink
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
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LastTemporaryPurchaseOrder;
