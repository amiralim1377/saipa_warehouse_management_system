"use client";

import React from "react";
import { AlertCircle } from "lucide-react";
import StatsGrid from "@/components/StatsGrid/StatsGrid";

export default function DashboardSummaryStats({ DashboardStats }) {
  console.log(DashboardStats);
  if (!DashboardStats || !DashboardStats.length) return null;

  return <StatsGrid stats={DashboardStats} columns={5} />;
}
