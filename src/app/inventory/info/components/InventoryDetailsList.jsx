"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

function InventoryDetailsList({ data }) {
  console.log(data);
  if (!data || data.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-6">
        هیچ محصولی در موجودی ثبت نشده است.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-border shadow-sm bg-card">
      <table className="min-w-full border-collapse text-right">
        <thead className="bg-muted text-foreground">
          <tr>
            <th className="px-4 py-3 border-b border-border">نام قطعه</th>
            <th className="px-4 py-3 border-b border-border">کد قطعه</th>
            <th className="px-4 py-3 border-b border-border">موجودی فعلی</th>
            <th className="px-4 py-3 border-b border-border">حداقل موجودی</th>
            <th className="px-4 py-3 border-b border-border">تاریخ ثبت</th>
            <th className="px-4 py-3 border-b border-border text-center">
              اقدامات
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((product, index) => (
            <tr
              key={product.id || index}
              className="hover:bg-muted/50 transition-colors"
            >
              <td className="px-4 py-2 border-b border-border text-foreground">
                {product.part_name}
              </td>
              <td className="px-4 py-2 border-b border-border">
                {product.part_code}
              </td>

              <td className="px-4 py-2 border-b border-border text-center">
                {product.stock}
              </td>
              <td className="px-4 py-2 border-b border-border text-center">
                {product.min_stock ?? "-"}
              </td>
              <td className="px-4 py-2 border-b border-border text-muted-foreground text-sm">
                {new Date(product.created_at).toLocaleDateString("fa-IR")}
              </td>
              <td className="px-4 py-2 border-b border-border text-center">
                <Link href={`/inventory/info/${product.id}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-white rounded-md"
                  >
                    مشاهده جزئیات
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

export default InventoryDetailsList;
