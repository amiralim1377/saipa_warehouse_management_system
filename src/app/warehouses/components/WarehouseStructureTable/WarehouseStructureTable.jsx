"use client";

import React from "react";

export default function WarehouseStructureTable({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="mt-6 p-6 text-center text-muted-foreground bg-card rounded-2xl border border-border shadow-sm">
        هیچ انباری ثبت نشده است.
      </div>
    );
  }

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-card to-muted/20 shadow-sm">
      <div className="p-5 border-b border-border bg-card/60 backdrop-blur-sm flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">
          ساختار ظرفیت انبارها
        </h2>
      </div>

      <div className="relative hidden sm:block">
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent hover:scrollbar-thumb-border transition-all">
          <table className="min-w-full text-sm text-foreground border-separate border-spacing-0">
            <thead className="bg-muted/40 text-muted-foreground uppercase tracking-wide">
              <tr>
                <th className="px-5 py-3 text-right font-medium sticky left-0 bg-muted/40 backdrop-blur-sm">
                  نام انبار
                </th>
                <th className="px-5 py-3 text-center font-medium">زون‌ها</th>
                <th className="px-5 py-3 text-center font-medium">راهروها</th>
                <th className="px-5 py-3 text-center font-medium">رک‌ها</th>
                <th className="px-5 py-3 text-center font-medium">طبقات</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={item.warehouse_id || index}
                  className={`transition-all duration-200 border-t border-border hover:bg-muted/40 ${
                    index % 2 === 0 ? "bg-card/50" : "bg-muted/10"
                  }`}
                >
                  <td className="px-5 py-4 font-medium text-right whitespace-nowrap">
                    {item.warehouse_name}
                  </td>
                  <td className="px-5 py-4 text-center whitespace-nowrap">
                    {item.zones_count}
                  </td>
                  <td className="px-5 py-4 text-center whitespace-nowrap">
                    {item.aisles_count}
                  </td>
                  <td className="px-5 py-4 text-center whitespace-nowrap">
                    {item.racks_count}
                  </td>
                  <td className="px-5 py-4 text-center whitespace-nowrap">
                    {item.shelves_count}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="block sm:hidden p-4 space-y-4">
        {data.map((item) => (
          <div
            key={item.warehouse_id}
            className="border border-border bg-card rounded-xl shadow-sm p-4 transition-all hover:bg-muted/30 hover:shadow-md"
          >
            <p className="font-semibold text-foreground text-base mb-3 border-b border-border pb-2">
              {item.warehouse_name}
            </p>
            <div className="grid grid-cols-2 gap-y-2 text-sm text-muted-foreground">
              <span>زون‌ها:</span>
              <span className="text-foreground">{item.zones_count}</span>
              <span>راهروها:</span>
              <span className="text-foreground">{item.aisles_count}</span>
              <span>رک‌ها:</span>
              <span className="text-foreground">{item.racks_count}</span>
              <span>طبقات:</span>
              <span className="text-foreground">{item.shelves_count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
