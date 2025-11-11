"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

function OutboundPartsList({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-6">
        هیچ خروجی ثبت نشده است.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-border shadow-sm bg-card">
      <table className="min-w-full border-collapse text-right">
        <thead className="bg-muted text-foreground">
          <tr>
            <th className="px-4 py-3 border-b border-border">کد قطعه</th>
            <th className="px-4 py-3 border-b border-border">نام قطعه</th>
            <th className="px-4 py-3 border-b border-border">تعداد</th>
            <th className="px-4 py-3 border-b border-border">نام مشتری</th>
            <th className="px-4 py-3 border-b border-border">شماره سفارش</th>
            <th className="px-4 py-3 border-b border-border text-center">
              تاریخ ثبت
            </th>
            <th className="px-4 py-3 border-b border-border text-center">
              اقدامات
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((part, index) => (
            <tr
              key={part.id || index}
              className="hover:bg-muted/50 transition-colors"
            >
              <td className="px-4 py-2 border-b border-border">
                {part.part_code}
              </td>
              <td className="px-4 py-2 border-b border-border">
                {part.part_name}
              </td>
              <td className="px-4 py-2 border-b border-border text-center">
                {part.quantity}
              </td>
              <td className="px-4 py-2 border-b border-border text-center">
                {part.customer_name ?? "-"}
              </td>
              <td className="px-4 py-2 border-b border-border text-center">
                {part.order_number ?? "-"}
              </td>
              <td className="px-4 py-2 border-b border-border text-muted-foreground text-sm text-center">
                {new Date(part.created_at).toLocaleDateString("fa-IR")}
              </td>
              <td className="px-4 py-2 border-b border-border text-center">
                <Link href={`/inventory/outbound-history/${part.id}`}>
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

export default OutboundPartsList;
