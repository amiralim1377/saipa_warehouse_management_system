"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { FileDown, PackageOpen } from "lucide-react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import OrdersPDFDocument from "../OrdersPDFDocument/OrdersPDFDocument";
import { shortId, toPersianDigits } from "../../utils/pdfFormatters";

const statusMap = {
  draft: "پیش‌نویس",
  pending: "در انتظار",
  confirmed: "تایید شده",
  cancelled: "لغو شده",
};

function LastConfirmedPurchaseOrder({ orders = [] }) {
  const hasOrders = orders.length > 0;
  const [showPDF, setShowPDF] = useState(false);

  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current++;
  }, [orders]);

  // ساخت PDF همه سفارش‌ها
  const allOrdersDoc = useMemo(() => {
    if (!orders || orders.length === 0) return null;
    return (
      <OrdersPDFDocument
        orders={orders}
        title="گزارش همه سفارش‌های خرید تایید شده"
      />
    );
  }, [orders]);

  if (!hasOrders) {
    return (
      <div className="bg-background p-4 rounded-lg shadow-md">
        <div className="w-full bg-card border border-border rounded-lg p-8 flex flex-col items-center justify-center text-muted-foreground">
          <PackageOpen className="w-12 h-12 mb-3 text-muted" />
          <p className="text-lg font-medium mb-2">هیچ سفارشی وجود ندارد.</p>
          <p className="text-sm text-muted-foreground/80">
            بعد از تأیید سفارش‌ها، این جدول پر می‌شود.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background p-4 rounded-lg shadow-md">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">
        <h2 className="text-xl font-bold">آخرین سفارش‌های خرید تایید شده</h2>

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
                fileName="confirmed-purchase-orders.pdf"
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
        <div className="w-full max-w-full h-[600px] border rounded-md overflow-hidden">
          <PDFViewer key={renderCount.current} width="100%" height="100%">
            {allOrdersDoc}
          </PDFViewer>
        </div>
      ) : (
        <>
          {/* Desktop/Tablet table */}
          <div className="overflow-x-auto hidden md:block">
            <table className="w-full min-w-[900px] border border-border text-foreground">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-4 py-2 border border-border">
                    شناسه سفارش
                  </th>
                  <th className="px-4 py-2 border border-border">
                    نام تامین‌کننده
                  </th>
                  <th className="px-4 py-2 border border-border">
                    جزئیات سفارش
                  </th>
                  <th className="px-4 py-2 border border-border">جمع مبلغ</th>
                  <th className="px-4 py-2 border border-border">
                    تاریخ ایجاد
                  </th>
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
                      <span className="break-words">
                        {order.supplier_name || order.supplier_id}
                      </span>
                    </td>
                    <td className="px-4 py-2 border border-border text-right">
                      <div className="space-y-1">
                        {order.items?.map((item, idx) => (
                          <div
                            key={idx}
                            className="break-words text-sm text-muted-foreground"
                          >
                            {item.name} - تعداد: {item.quantity} - قیمت:{" "}
                            {item.unitPrice}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-2 border border-border">
                      {order.total_amount}
                    </td>
                    <td className="px-4 py-2 border border-border">
                      <div className="flex flex-col items-center md:flex-row md:justify-between gap-1">
                        <span className="whitespace-nowrap">
                          {new Date(order.created_at).toLocaleDateString(
                            "fa-IR"
                          )}
                        </span>
                        <span className="whitespace-nowrap">
                          {new Date(order.created_at).toLocaleTimeString(
                            "fa-IR",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: false,
                            }
                          )}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-2 border text-green-600 border-border">
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
                        fileName={`confirmed-order-${order.id}.pdf`}
                        className="flex items-center justify-center gap-1 bg-primary text-primary-foreground px-2 py-1 rounded-md hover:opacity-90 cursor-pointer whitespace-nowrap"
                      >
                        دانلود
                      </PDFDownloadLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="grid md:hidden gap-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="border border-border rounded-lg p-4 bg-card text-card-foreground"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">شناسه</span>
                  <span>{toPersianDigits(shortId(order.id))}</span>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">نام تامین‌کننده</span>
                  <span className="break-words text-right">
                    {order.supplier_name || order.supplier_id}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="font-semibold">جزئیات سفارش</span>
                  <div className="mt-1 space-y-1">
                    {order.items?.map((item, idx) => (
                      <div
                        key={idx}
                        className="text-sm text-muted-foreground break-words"
                      >
                        {item.name} - تعداد: {item.quantity} - قیمت:{" "}
                        {item.price}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">جمع مبلغ</span>
                  <span className="whitespace-nowrap">
                    {order.total_amount}
                  </span>
                </div>

                <div className="flex items-start justify-between mb-2">
                  <span className="font-semibold">تاریخ ایجاد</span>
                  <div className="flex flex-col items-end">
                    <span className="whitespace-nowrap">
                      {new Date(order.created_at).toLocaleDateString("fa-IR")}
                    </span>
                    <span className="whitespace-nowrap text-muted-foreground">
                      {new Date(order.created_at).toLocaleTimeString("fa-IR", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      })}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold">وضعیت</span>
                  <span className="text-green-600">
                    {statusMap[order.status] || order.status}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <PDFDownloadLink
                    key={order.id + "-mobile-" + renderCount.current}
                    document={
                      <OrdersPDFDocument
                        orders={[order]}
                        title={`گزارش سفارش شماره ${toPersianDigits(
                          shortId(order.id)
                        )}`}
                      />
                    }
                    fileName={`confirmed-order-${order.id}.pdf`}
                    className="flex items-center justify-center gap-1 bg-primary text-primary-foreground px-3 py-2 rounded-md hover:opacity-90 cursor-pointer"
                  >
                    دانلود PDF
                  </PDFDownloadLink>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default LastConfirmedPurchaseOrder;
