"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function WarehousesStats({ warehouseStats }) {
  const stats = [
    {
      title: "تعداد انبارها",
      value: warehouseStats.totalWarehouses,
    },
    {
      title: "ظرفیت کل انبارها",
      value: warehouseStats.totalCapacity,
    },
    {
      title: "میانگین ظرفیت انبارها",
      value: Math.round(Number(warehouseStats.avgCapacity)),
    },
    {
      title: "انبارهای بحرانی",
      value: warehouseStats.criticalWarehouses,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
      {stats.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{item.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default WarehousesStats;
