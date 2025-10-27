"use client";

import React from "react";

function LatestSuppliedParts({ latestPartsBySupplier }) {
  return (
    <div className="w-full mt-8">
      <h2 className="text-lg font-semibold text-[var(--color-foreground)] mb-6 text-center sm:text-right">
        آخرین قطعات تأمین‌شده توسط تأمین‌کنندگان
      </h2>

      <div className="w-full overflow-x-auto border border-border rounded-lg">
        <table className="w-full text-right border-collapse">
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="px-4 py-2 border-b">تأمین‌کننده</th>
              <th className="px-4 py-2 border-b">کد قطعه</th>
              <th className="px-4 py-2 border-b">نام قطعه</th>
              <th className="px-4 py-2 border-b">دسته‌بندی</th>
              <th className="px-4 py-2 border-b">زیردسته</th>
              <th className="px-4 py-2 border-b">تعداد وارد شده</th>
              <th className="px-4 py-2 border-b">تاریخ ورود</th>
              <th className="px-4 py-2 border-b">قیمت واحد</th>
              <th className="px-4 py-2 border-b">ارزش کل</th>
            </tr>
          </thead>
          <tbody>
            {latestPartsBySupplier.map((part) => (
              <tr
                key={part.id}
                className={part.stock <= 2 ? "bg-destructive/10" : ""}
              >
                <td className="px-4 py-2 border-b">{part.supplier_name}</td>
                <td className="px-4 py-2 border-b">{part.part_code}</td>
                <td className="px-4 py-2 border-b">{part.part_name}</td>
                <td className="px-4 py-2 border-b">{part.category_name}</td>
                <td className="px-4 py-2 border-b">{part.subcategory_name}</td>
                <td className="px-4 py-2 border-b">{part.stock}</td>
                <td className="px-4 py-2 border-b">
                  {new Date(part.entry_date).toLocaleDateString("fa-IR")}
                </td>
                <td className="px-4 py-2 border-b">
                  {part.unit_price?.toLocaleString()}
                </td>
                <td className="px-4 py-2 border-b">
                  {part.total_value?.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LatestSuppliedParts;
