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

export const OrdersPDFDocument = ({ orders, title = "گزارش سفارش‌ها" }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>{title}</Text>
      {orders.map((order, idx) => (
        <OrderSection key={idx} order={order} />
      ))}
    </Page>
  </Document>
);
