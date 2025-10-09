"use client";
import React, { useState, useMemo } from "react";
import { PackageOpen, FileDown } from "lucide-react";
import {
  PDFViewer,
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// 📌 فونت فارسی
Font.register({
  family: "YekanBakh",
  src: "/fonts/yekanbakh/Yekan.ttf",
});

// 🛠️ کمک‌تابع‌ها برای فرمت فارسی
const toPersianDigits = (val) =>
  val?.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]) ?? "";

const formatNumberFa = (n) =>
  typeof n === "number"
    ? toPersianDigits(n.toLocaleString("fa-IR"))
    : toPersianDigits(n);

const formatCurrencyFa = (n) => `${formatNumberFa(n)} تومان`;

const formatDateFa = (dateStr) =>
  toPersianDigits(new Date(dateStr).toLocaleDateString("fa-IR"));

const formatTimeFa = (dateStr) =>
  toPersianDigits(
    new Date(dateStr).toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );

const shortId = (id) => (id ? id.toString().slice(0, 8) : "");

// 🎨 استایل PDF
const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontSize: 12,
    fontFamily: "YekanBakh",
    textAlign: "right",
    lineHeight: 1.6,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 24,
    fontWeight: "bold",
    color: "#222",
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "bold",
    color: "#333",
  },
  headerRow: {
    flexDirection: "row-reverse",
    backgroundColor: "#f2f2f2",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingVertical: 6,
    marginBottom: 4,
  },
  row: {
    flexDirection: "row-reverse",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    paddingVertical: 6,
  },
  cell: {
    flex: 1,
    textAlign: "center",
    paddingHorizontal: 6,
    fontSize: 11,
    color: "#111",
  },
  cellHeader: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 12,
    color: "#222",
  },
  cellNarrow: {
    flex: 0.7,
    textAlign: "center",
    paddingHorizontal: 6,
  },
  footerText: {
    marginTop: 6,
    fontSize: 11,
    color: "#444",
    textAlign: "right",
  },
  section: {
    marginBottom: 20,
  },
});

// 🗺️ نگاشت وضعیت‌ها به فارسی
const statusMap = {
  pending: "در انتظار",
  draft: "پیش‌نویس",
  confirmed: "تایید شده",
  cancelled: "لغو شده",
};

// 🧩 بخش مشترک برای نمایش یک سفارش در PDF
const OrderSection = ({ order }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>سفارش مشتری: {order.customer_name}</Text>

    <View style={styles.headerRow}>
      <Text style={[styles.cellHeader, styles.cellNarrow]}>نام مشتری</Text>
      <Text style={styles.cellHeader}>نام قطعه</Text>
      <Text style={styles.cellHeader}>تعداد</Text>
      <Text style={styles.cellHeader}>قیمت واحد</Text>
    </View>

    {order.items?.map((item, idx) => (
      <View key={idx} style={styles.row}>
        <Text style={[styles.cell, styles.cellNarrow]}>
          {order.customer_name}
        </Text>
        <Text style={styles.cell}>{item.part_name}</Text>
        <Text style={styles.cell}>{formatNumberFa(item.quantity)}</Text>
        <Text style={styles.cell}>{formatCurrencyFa(item.unit_price)}</Text>
      </View>
    ))}

    <Text style={styles.footerText}>
      جمع مبلغ: {formatCurrencyFa(order.total_amount)}
    </Text>
    <Text style={styles.footerText}>
      تاریخ: {formatDateFa(order.created_at)}
    </Text>
    <Text style={styles.footerText}>
      وضعیت: {statusMap[order.status] || order.status}
    </Text>
  </View>
);

// 📄 سند PDF (چند سفارش یا تک سفارش)
const OrdersPDFDocument = ({ orders, title = "گزارش سفارش‌ها" }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>{title}</Text>
      {orders.map((order, idx) => (
        <OrderSection key={idx} order={order} />
      ))}
    </Page>
  </Document>
);

function LastTemporarySalesOrder({ orders = [] }) {
  const hasOrders = orders.length > 0;
  const [showPDF, setShowPDF] = useState(false);

  // ⚡ بهینه‌سازی: جلوگیری از رندر دوباره PDF
  const allOrdersDoc = useMemo(
    () => <OrdersPDFDocument orders={orders} title="گزارش همه سفارش‌ها" />,
    [orders]
  );

  return (
    <div className="overflow-x-auto bg-background p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">جدول آخرین سفارش‌های فروش موقت</h2>

        {hasOrders && (
          <div className="flex items-center gap-2">
            {/* دکمه نمایش PDF */}
            <button
              onClick={() => setShowPDF(!showPDF)}
              className="flex items-center gap-2 bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition-colors"
            >
              <FileDown className="w-5 h-5" />
              <span>مشاهده PDF</span>
            </button>

            {/* دانلود همه سفارش‌ها */}
            <PDFDownloadLink
              document={allOrdersDoc}
              fileName="temporary-sales-orders.pdf"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-3 py-2 rounded-md hover:opacity-90"
            >
              {({ loading }) => (loading ? "در حال ساخت PDF..." : "دانلود PDF")}
            </PDFDownloadLink>
          </div>
        )}
      </div>

      {/* حالت بدون سفارش */}
      {!hasOrders ? (
        <div className="flex flex-col items-center justify-center py-10 text-muted-foreground">
          <PackageOpen className="w-12 h-12 mb-3 text-muted" />
          <p className="text-lg font-medium">
            هنوز هیچ سفارش فروش موقتی ثبت نشده است.
          </p>
        </div>
      ) : showPDF ? (
        // نمایش آنلاین PDF
        <div className="w-full h-[600px] border rounded-md overflow-hidden">
          <PDFViewer width="100%" height="100%">
            {allOrdersDoc}
          </PDFViewer>
        </div>
      ) : (
        // جدول سفارش‌ها
        <table className="min-w-full border border-border text-foreground">
          <thead className="bg-primary text-primary-foreground">
            <tr>
              <th className="px-4 py-2 border border-border">شناسه سفارش</th>
              <th className="px-4 py-2 border border-border">نام مشتری</th>
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
                  {order.customer_name}
                </td>
                <td className="px-4 py-2 border border-border text-right">
                  {order.items?.map((item, idx) => (
                    <div key={idx}>
                      {item.part_name} - تعداد: {formatNumberFa(item.quantity)}{" "}
                      - قیمت: {formatNumberFa(item.unit_price)}
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
                    fileName={`order-${order.id}.pdf`}
                    className="flex items-center justify-center  gap-1 bg-primary text-primary-foreground px-2 py-1 rounded-md hover:opacity-90 cursor-pointer"
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

export default LastTemporarySalesOrder;
