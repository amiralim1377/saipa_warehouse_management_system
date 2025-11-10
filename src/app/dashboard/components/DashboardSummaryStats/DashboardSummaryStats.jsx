"use client";

import React from "react";
import StatsGrid from "@/components/StatsGrid/StatsGrid";

export default function DashboardSummaryStats({ DashboardStats }) {
  if (!DashboardStats || !DashboardStats.length) return null;

  return <StatsGrid stats={DashboardStats} columns={5} />;
}
