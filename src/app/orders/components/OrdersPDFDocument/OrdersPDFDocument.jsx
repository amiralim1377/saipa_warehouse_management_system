"use client";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "../pdf/BasePDFStyles";
import {
  formatCurrencyFa,
  formatDateFa,
  formatNumberFa,
} from "../../utils/pdfFormatters";

const statusMap = {
  pending: "در انتظار",
  draft: "پیش‌نویس",
  confirmed: "تایید شده",
  cancelled: "لغو شده",
};

const OrderSection = ({ order }) => {
  const customerOrSupplier =
    order.customer_name || order.supplier_name || "[نامشخص]";

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>سفارش: {customerOrSupplier}</Text>

      <View style={styles.headerRow}>
        <Text style={[styles.cellHeader, styles.cellNarrow]}>
          نام مشتری/تامین‌کننده
        </Text>
        <Text style={styles.cellHeader}>نام قطعه</Text>
        <Text style={styles.cellHeader}>تعداد</Text>
        <Text style={styles.cellHeader}>قیمت واحد</Text>
      </View>

      {order.items?.map((item, idx) => {
        const productName = item.part_name ?? item.productName ?? "[نامشخص]";
        const quantity = formatNumberFa(item.quantity ?? item.qty ?? 0);
        const unitPrice = formatCurrencyFa(
          item.unit_price ?? item.unitPrice ?? 0
        );

        return (
          <View key={idx} style={styles.row}>
            <Text style={[styles.cell, styles.cellNarrow]}>
              {customerOrSupplier}
            </Text>
            <Text style={styles.cell}>{productName}</Text>
            <Text style={styles.cell}>{quantity}</Text>
            <Text style={styles.cell}>{unitPrice}</Text>
          </View>
        );
      })}

      <Text style={styles.footerText}>
        جمع مبلغ: {formatCurrencyFa(order.total_amount ?? 0)}
      </Text>
      <Text style={styles.footerText}>
        تاریخ: {formatDateFa(order.created_at)}
      </Text>
      <Text style={styles.footerText}>
        وضعیت: {statusMap[order.status] || order.status}
      </Text>
    </View>
  );
};

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

export default OrdersPDFDocument;
