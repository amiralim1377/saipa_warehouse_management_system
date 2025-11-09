"use client";

import DynamicPieChart from "@/components/DynamicPieChart/DynamicPieChart";
import InventoryStackedChart from "@/components/InventoryStackedChart/InventoryStackedChart";

export default function SuppliersReportsCharts({
  supplierTypePercentage,
  customerTypePercentage,
  lowStockAlerts,
}) {
  const supplierChartData = supplierTypePercentage.map((item) => ({
    name: item.type_name === "individual" ? "حقیقی" : "حقوقی",
    value: item.percentage,
  }));

  const customerChartData = customerTypePercentage.map((item) => ({
    name: item.type_name === "individual" ? "حقیقی" : "حقوقی",
    value: item.percentage,
  }));

  return (
    <div className="grid w-full grid-cols-1 lg:grid-cols-1 gap-4">
      <section className="flex flex-col md:flex-row items-center">
        <DynamicPieChart
          title="درصد تامین‌کنندگان بر اساس نوع"
          data={supplierChartData}
        />
        <DynamicPieChart
          title="درصد مشتریان بر اساس نوع"
          data={customerChartData}
        />
      </section>
      <InventoryStackedChart data={lowStockAlerts} />
    </div>
  );
}
