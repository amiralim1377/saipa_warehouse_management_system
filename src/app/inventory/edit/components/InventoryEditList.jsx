"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

function InventoryEditList({ data }) {
  if (!data || data.length === 0)
    return (
      <p className="text-center text-muted-foreground mt-8">
        هیچ محصولی برای نمایش وجود ندارد.
      </p>
    );

  return (
    <div className="overflow-x-auto rounded-xl border border-border mt-6">
      <table className="w-full text-sm text-right border-collapse">
        <thead className="bg-muted text-muted-foreground border-b border-border">
          <tr>
            <th className="p-3 font-semibold">کد کالا</th>
            <th className="p-3 font-semibold">نام کالا</th>
            <th className="p-3 font-semibold">موجودی فعلی</th>
            <th className="p-3 font-semibold">حداقل موجودی</th>
            <th className="p-3 font-semibold">قیمت واحد</th>
            <th className="p-3 font-semibold text-center">اقدامات</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-border hover:bg-accent transition-colors"
            >
              <td className="p-3">{item.part_code}</td>
              <td className="p-3">{item.part_name}</td>
              <td className="p-3">{item.stock}</td>
              <td className="p-3">{item.min_stock}</td>
              <td className="p-3">
                {Number(item.unit_price).toLocaleString()} ریال
              </td>
              <td className="p-3 text-center">
                <Link href={`/inventory/edit/${item.id}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary"
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
  );
}

export default InventoryEditList;
