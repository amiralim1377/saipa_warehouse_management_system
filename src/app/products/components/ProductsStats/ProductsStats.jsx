"use client";

import React from "react";
import { AlertCircle } from "lucide-react";
import StatsGrid from "@/components/StatsGrid/StatsGrid";

export default function ProductsStats({ data }) {
  if (!data || !data[0]) return null;

  const { low_stock_count, total_items, total_value, total_stock } = data[0];

  const statsData = [
    {
      label: "مجموع تعداد کالاها در انبار",
      value: total_stock,
    },
    {
      label: "تعداد کالاهای کمبود موجودی",
      value: low_stock_count,
      icon: AlertCircle,
      color: "bg-red-100 text-red-600",
    },
    {
      label: "تعداد انواع کالاها",
      value: total_items,
    },
    {
      label: "ارزش کل موجودی انبار",
      value: `${Number(total_value).toLocaleString("fa-IR")} تومان`,
    },
  ];

  return <StatsGrid stats={statsData} columns={4} />;
}
