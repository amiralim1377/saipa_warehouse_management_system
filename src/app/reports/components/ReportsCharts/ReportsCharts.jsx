"use client";

import DynamicPieChart from "@/components/DynamicPieChart/DynamicPieChart";
import InventoryStackedChart from "@/components/InventoryStackedChart/InventoryStackedChart";
import WarehouseCapacityChart from "@/components/WarehouseCapacityChart/WarehouseCapacityChart";

export default function SuppliersReportsCharts({
  supplierTypePercentage,
  customerTypePercentage,
  lowStockAlerts,
  warehouseCapacityStats,
}) {
  const supplierChartData = supplierTypePercentage?.map((item) => ({
    name: item.type_name === "individual" ? "حقیقی" : "حقوقی",
    value: item.percentage,
  }));

  const customerChartData = customerTypePercentage?.map((item) => ({
    name: item.type_name === "individual" ? "حقیقی" : "حقوقی",
    value: item.percentage,
  }));

  return (
    <div className="grid  w-full space-y-4 grid-cols-1 lg:grid-cols-1 gap-4">
      <section className="flex w-full flex-col space-y-2 md:flex-row md:justify-between">
        <div className="md:w-full">
          <DynamicPieChart
            title="درصد تامین‌کنندگان بر اساس نوع"
            data={supplierChartData}
          />
        </div>

        <div className="md:w-full">
          <DynamicPieChart
            title="درصد مشتریان بر اساس نوع"
            data={customerChartData}
          />
        </div>
      </section>

      <InventoryStackedChart data={lowStockAlerts} />
      <WarehouseCapacityChart
        title={"جدول ظرفیت انبار ها"}
        data={warehouseCapacityStats}
      />
    </div>
  );
}
