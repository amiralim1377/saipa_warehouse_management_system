"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function InventoryAlertsTable({ lowStockAlerts }) {
  const getProgressColor = (product) => {
    if (product.stock < product.min_stock) return "bg-destructive";
    return "bg-primary";
  };

  const getProgressWidth = (product) => {
    const ratio = Math.min(product.stock / product.min_stock, 1);
    return `${ratio * 100}%`;
  };

  const getStatusColor = (product) => {
    if (product.stock < product.min_stock) return "text-destructive";
    return "text-muted-foreground";
  };

  const getStatusContent = (product) => {
    if (product.stock < product.min_stock) {
      return (
        <span className="flex items-center justify-center gap-2">
          <span className="relative flex items-center gap-2">
            <span className="absolute inline-flex h-3 w-3 rounded-full bg-red-500 opacity-75 animate-ping"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
            <span>کم‌تر از حداقل</span>
          </span>
        </span>
      );
    }
    return <span>نرمال</span>;
  };

  return (
    <div className="p-6 mx-auto ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">کد کالا</TableHead>
            <TableHead className="text-center">نام کالا</TableHead>
            <TableHead className="text-center">موجودی</TableHead>
            <TableHead className="text-center">حداقل موجودی</TableHead>
            <TableHead className="text-center">کمبود</TableHead>
            <TableHead className="text-center">وضعیت</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {lowStockAlerts.map((product) => (
            <TableRow key={product.part_id} className="text-center">
              <TableCell>{product.part_code}</TableCell>
              <TableCell className="text-start">{product.part_name}</TableCell>

              <TableCell>
                <div className="flex flex-col items-center">
                  <span className="text-sm mb-1">{product.stock}</span>
                  <div className="relative w-full h-4 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`${getProgressColor(
                        product
                      )} h-4 rounded-full`}
                      style={{ width: getProgressWidth(product) }}
                    ></div>
                  </div>
                </div>
              </TableCell>

              <TableCell>{product.min_stock}</TableCell>
              <TableCell>{product.shortage}</TableCell>
              <TableCell className={getStatusColor(product)}>
                {getStatusContent(product)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default InventoryAlertsTable;
