"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const salesData = [
  { month: "فروردین", خرید: 30, فروش: 20 },
  { month: "اردیبهشت", خرید: 25, فروش: 22 },
  { month: "خرداد", خرید: 35, فروش: 30 },
  { month: "تیر", خرید: 40, فروش: 28 },
];

const stockData = [
  { name: "انبار ۱", موجودی: 120 },
  { name: "انبار ۲", موجودی: 80 },
  { name: "انبار ۳", موجودی: 60 },
];

export default function ReportsCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* نمودار فروش و خرید */}
      <Card>
        <CardHeader>
          <CardTitle>نمودار خرید و فروش</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={salesData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="خرید" stroke="#7259B1" />
              <Line type="monotone" dataKey="فروش" stroke="#34A853" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* نمودار موجودی بر اساس انبار */}
      <Card>
        <CardHeader>
          <CardTitle>موجودی کالا بر اساس انبار</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={stockData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="موجودی" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
