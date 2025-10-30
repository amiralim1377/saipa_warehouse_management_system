"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function DashboardSummaryStats() {
  // داده‌های استاتیک (بعداً داینامیک می‌شن)
  const stats = [
    {
      title: "تعداد کل کالاها",
      value: 1280,
    },
    {
      title: "تعداد سفارش‌های خرید باز",
      value: 42,
    },
    {
      title: "تعداد سفارش‌های فروش باز",
      value: 31,
    },
    {
      title: "ارزش کل موجودی انبار (میلیون تومان)",
      value: 875,
    },
    {
      title: "تعداد کالاهای کمبود موجودی",
      value: 12,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-6">
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

export default DashboardSummaryStats;
