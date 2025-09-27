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
import { Pencil, Trash, History } from "lucide-react";

const customers = [
  {
    id: 1,
    name: "شرکت الف",
    type: "عمده",
    phone: "09120000001",
    purchases: 25,
    lastPurchase: "1404/06/10",
  },
  {
    id: 2,
    name: "فروشگاه ب",
    type: "خرد",
    phone: "09120000002",
    purchases: 7,
    lastPurchase: "1404/05/28",
  },
  {
    id: 3,
    name: "آقای خاص",
    type: "خاص",
    phone: "09120000003",
    purchases: 42,
    lastPurchase: "1404/06/20",
  },
];

export default function CustomersTable() {
  return (
    <div className="p-4">
      <Table>
        <TableCaption>لیست مشتریان و سوابق خرید</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>شناسه</TableHead>
            <TableHead>نام مشتری</TableHead>
            <TableHead>نوع مشتری</TableHead>
            <TableHead>شماره تماس</TableHead>
            <TableHead>تعداد خرید</TableHead>
            <TableHead>آخرین خرید</TableHead>
            <TableHead className="text-center">عملیات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.id}</TableCell>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.type}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>{customer.purchases}</TableCell>
              <TableCell>{customer.lastPurchase}</TableCell>
              <TableCell className="flex gap-2 justify-center">
                <Button size="sm" variant="outline">
                  <Pencil className="w-4 h-4 mr-1" />
                  ویرایش
                </Button>
                <Button size="sm" variant="destructive">
                  <Trash className="w-4 h-4 mr-1" />
                  حذف
                </Button>
                <Button size="sm" variant="secondary">
                  <History className="w-4 h-4 mr-1" />
                  سوابق
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
