"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function DashboardSummaryStats({ DashboardStats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-6">
      {DashboardStats.map((item, index) => (
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

export default DashboardSummaryStats;
