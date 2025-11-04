"use client";

import React from "react";
import { AlertCircle } from "lucide-react";
import StatsGrid from "@/components/StatsGrid/StatsGrid";

export default function DashboardSummaryStats({ DashboardStats }) {
  if (!DashboardStats || !DashboardStats.length) return null;

  const statsData = DashboardStats.map((item) => {
    const isLowStock = item.title.includes("کمبود موجودی");

    return {
      label: item.title,
      value:
        typeof item.value === "number"
          ? item.value.toLocaleString("fa-IR")
          : item.value,
      ...(isLowStock && {
        icon: AlertCircle,
        color: "bg-red-100 text-red-600",
      }),
    };
  });

  return <StatsGrid stats={statsData} columns={5} />;
}
