"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LineChart,
  Line,
  Legend,
  ResponsiveContainer,
} from "recharts";

const supplierTypeData = [
  { name: "داخلی", value: 12 },
  { name: "خارجی", value: 5 },
];

const supplierStatusData = [
  { name: "فعال", value: 14 },
  { name: "غیرفعال", value: 3 },
];

const creditLimitData = [
  { range: "<1000", count: 5 },
  { range: "1000-5000", count: 8 },
  { range: ">5000", count: 4 },
  { range: "بدون اعتبار", count: 0 },
];

const newSuppliersData = [
  { month: "فروردین", count: 3 },
  { month: "اردیبهشت", count: 4 },
  { month: "خرداد", count: 5 },
  { month: "تیر", count: 2 },
];

const customerTypeData = [
  { name: "حقیقی", value: 45 },
  { name: "حقوقی", value: 30 },
];

const customerProvinceData = [
  { province: "تهران", count: 20 },
  { province: "اصفهان", count: 15 },
  { province: "شیراز", count: 10 },
];

const newCustomersData = [
  { month: "فروردین", count: 5 },
  { month: "اردیبهشت", count: 8 },
  { month: "خرداد", count: 6 },
  { month: "تیر", count: 10 },
];

const warehouseCapacityData = [
  { name: "انبار ۱", capacity: 500 },
  { name: "انبار ۲", capacity: 300 },
  { name: "انبار ۳", capacity: 400 },
];

const warehouseMinStockData = [
  { name: "انبار ۱", min_stock: 50 },
  { name: "انبار ۲", min_stock: 30 },
  { name: "انبار ۳", min_stock: 40 },
];

export default function SuppliersReportsCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Supplier Type */}
      <Card>
        <CardHeader>
          <CardTitle>تعداد تامین‌کنندگان بر اساس نوع</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={supplierTypeData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                <Cell fill="#34A853" />
                <Cell fill="#F59E0B" />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Supplier Status */}
      <Card>
        <CardHeader>
          <CardTitle>وضعیت تامین‌کنندگان</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={supplierStatusData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                <Cell fill="#34A853" />
                <Cell fill="#EA4335" />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Credit Limit */}
      <Card>
        <CardHeader>
          <CardTitle>محدوده اعتبار تامین‌کنندگان</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={creditLimitData}>
              <XAxis dataKey="range" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* New Suppliers */}
      <Card>
        <CardHeader>
          <CardTitle>تامین‌کنندگان جدید هر ماه</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={newSuppliersData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="count" stroke="#7259B1" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>تعداد مشتریان بر اساس نوع</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={customerTypeData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                <Cell fill="#34A853" />
                <Cell fill="#F59E0B" />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Customer Province */}
      <Card>
        <CardHeader>
          <CardTitle>تعداد مشتریان بر اساس استان</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={customerProvinceData}>
              <XAxis dataKey="province" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* New Customers */}
      <Card>
        <CardHeader>
          <CardTitle>مشتریان جدید هر ماه</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={newCustomersData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="count" stroke="#7259B1" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* نمودار ظرفیت انبارها */}
      <Card>
        <CardHeader>
          <CardTitle>ظرفیت انبارها</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={warehouseCapacityData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="capacity" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* نمودار حداقل موجودی */}
      <Card>
        <CardHeader>
          <CardTitle>حداقل موجودی هر انبار</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={warehouseMinStockData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="min_stock" stroke="#F59E0B" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
