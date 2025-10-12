"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function StatsGrid({ stats }) {
  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {stats.map((stat, i) => (
        <Card key={i} className="p-6 rounded-lg shadow-md text-center">
          <CardContent className="grid gap-2">
            <p className="text-3xl font-semibold">{stat.value}</p>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
