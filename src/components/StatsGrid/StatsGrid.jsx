"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function StatsGrid({ stats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 p-4 sm:p-6">
      {stats.map((stat, i) => (
        <Card
          key={stat.id ?? i}
          className="p-5 sm:p-6 rounded-lg shadow-md text-center w-full"
        >
          <CardContent className="grid gap-1">
            <p className="text-2xl sm:text-2xl md:text-3xl font-semibold truncate">
              {typeof stat.value === "number"
                ? stat.value.toLocaleString("fa-IR")
                : stat.value}
            </p>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base truncate">
              {stat.label}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
