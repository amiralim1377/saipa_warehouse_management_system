"use client";

import React from "react";
import { AlertCircle } from "lucide-react";
import StatsGrid from "@/components/StatsGrid/StatsGrid";

export default function InventoryStats({ inventoryStats }) {
  const statsData = [
    { label: "مجموع تعداد کالاها در انبار", value: inventoryStats.total_stock },
    {
      label: "تعداد کالاهای کمبود موجودی",
      value: inventoryStats.low_stock_count,
      icon: AlertCircle,
      color: "bg-red-100 text-red-600",
    },
    { label: "تعداد انواع کالاها", value: inventoryStats.total_items },
    {
      label: "ارزش کل موجودی انبار",
      value: `${inventoryStats.total_value.toLocaleString()} تومان`,
    },
  ];

  return <StatsGrid stats={statsData} columns={4} />;
}
