"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const reportsData = [
  {
    id: 1,
    type: "خرید",
    customer: "شرکت الف",
    date: "1404/06/01",
    quantity: 50,
    status: "تکمیل شده",
  },
  {
    id: 2,
    type: "فروش",
    customer: "فروشگاه ب",
    date: "1404/06/02",
    quantity: 30,
    status: "در انتظار",
  },
  {
    id: 3,
    type: "خرید",
    customer: "شرکت ج",
    date: "1404/06/03",
    quantity: 20,
    status: "تکمیل شده",
  },
];

export default function ReportsTable() {
  return (
    <div className="p-4">
      <Table>
        <TableCaption>جزئیات تراکنش‌ها و سفارش‌ها</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>شناسه</TableHead>
            <TableHead>نوع تراکنش</TableHead>
            <TableHead>مشتری / تأمین‌کننده</TableHead>
            <TableHead>تاریخ</TableHead>
            <TableHead>تعداد</TableHead>
            <TableHead>وضعیت</TableHead>
            <TableHead className="text-center">عملیات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reportsData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.customer}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell className="flex gap-2 justify-center">
                <Button size="sm" variant="outline">
                  جزئیات
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
