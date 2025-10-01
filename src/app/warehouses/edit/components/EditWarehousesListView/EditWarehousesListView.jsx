"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function EditWarehousesListView({ initialWarehouses = [] }) {
  const [warehouses] = useState(initialWarehouses);

  return (
    <div className="mt-6 p-4">
      <h2 className="text-lg font-semibold text-foreground mb-3">
        لیست انبارها
      </h2>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-right border-collapse text-sm sm:text-base">
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="p-2 border-b">نام انبار</th>
              <th className="p-2 border-b hidden sm:table-cell">مکان</th>
              <th className="p-2 border-b hidden md:table-cell">
                حداقل موجودی
              </th>
              <th className="p-2 border-b hidden lg:table-cell">ظرفیت</th>
              <th className="p-2 border-b hidden xl:table-cell">تاریخ ایجاد</th>
              <th className="p-2 border-b">اقدامات</th>
            </tr>
          </thead>
          <tbody>
            {warehouses.map((warehouse) => (
              <tr
                key={warehouse.id}
                className="hover:bg-muted/40 transition-colors"
              >
                <td className="p-2 border-b">{warehouse.name}</td>
                <td className="p-2 border-b hidden sm:table-cell">
                  {warehouse.location || "-"}
                </td>
                <td className="p-2 border-b hidden md:table-cell">
                  {warehouse.min_stock ?? 0}
                </td>
                <td className="p-2 border-b hidden lg:table-cell">
                  {warehouse.capacity ?? "-"}
                </td>
                <td className="p-2 border-b hidden xl:table-cell">
                  {warehouse.created_at
                    ? new Date(warehouse.created_at).toLocaleDateString("fa-IR")
                    : "-"}
                </td>
                <td className="p-2 border-b">
                  <Link
                    href={`/warehouses/edit/${encodeURIComponent(
                      warehouse.id
                    )}`}
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="px-3 py-1 text-xs sm:text-sm"
                    >
                      ویرایش
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EditWarehousesListView;
