"use client";

import React from "react";
import StatsGrid from "@/components/StatsGrid/StatsGrid";

export default function OrdersStats({
  confirmedOrdersStats,
  draftOrdersStats,
}) {
  console.log(confirmedOrdersStats);
  // آمار سفارش‌های تایید شده
  const confirmedStats = [
    {
      label: "سفارش‌های خرید تایید شده",
      value: confirmedOrdersStats.total_purchase_orders,
    },
    {
      label: "سفارش‌های فروش تایید شده",
      value: confirmedOrdersStats.total_sales_orders,
    },
    {
      label: "مبلغ کل خرید تایید شده",
      value: confirmedOrdersStats.total_purchase_amount,
    },
    {
      label: "مبلغ کل فروش تایید شده",
      value: confirmedOrdersStats.total_sales_amount,
    },
  ];

  // آمار سفارش‌های موقت
  const pendingStats = [
    {
      label: "سفارش‌های خرید موقت",
      value: draftOrdersStats.total_draft_purchase_count,
    },
    {
      label: "سفارش‌های فروش موقت",
      value: draftOrdersStats.total_draft_sales_count,
    },
    {
      label: "مبلغ کل خرید موقت",
      value: draftOrdersStats.total_draft_purchase,
    },
    {
      label: "مبلغ کل فروش موقت",
      value: draftOrdersStats.total_draft_sales,
    },
  ];

  return (
    <div className="space-y-8 p-6">
      <div>
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          آمار سفارش‌های تایید شده
        </h2>
        <StatsGrid stats={confirmedStats} columns={4} />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          آمار سفارش‌های موقت
        </h2>
        <StatsGrid stats={pendingStats} columns={4} />
      </div>
    </div>
  );
}
