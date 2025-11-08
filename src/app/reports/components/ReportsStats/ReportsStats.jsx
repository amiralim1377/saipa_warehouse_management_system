import StatsGrid from "@/components/StatsGrid/StatsGrid";

export default function ReportsStats({ statsData }) {
  if (!statsData) return null;

  const stats = [
    { label: "کل کالاها", value: statsData.total_parts },
    { label: "کالاهای کم موجودی", value: statsData.low_stock_items },
    { label: "کل ارزش موجودی", value: statsData.total_inventory_value },
    { label: "کل تامین‌کنندگان", value: statsData.total_suppliers },
  ];

  return <StatsGrid stats={stats} />;
}
