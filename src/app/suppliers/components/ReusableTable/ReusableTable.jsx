"use client";

import DeleteItemButton from "@/components/Form/DeleteItemButton/DeleteItemButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { deleteSupplier } from "../../actions/deleteSupplier";

function ReusableTable({ suppliers, label }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-[var(--color-foreground)] mb-3">
        {label}
      </h2>

      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-[700px] w-full text-right border border-border rounded-lg">
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="p-2 border-b">نام شرکت</th>
              <th className="p-2 border-b">شماره تماس</th>
              <th className="p-2 border-b">ایمیل / وب‌سایت</th>
              <th className="p-2 border-b">وضعیت</th>
              <th className="p-2 border-b">تاریخ ثبت</th>
              <th className="p-2 border-b w-[280px]">اقدامات</th>
            </tr>
          </thead>

          <tbody>
            {suppliers.map((sup) => (
              <tr key={sup.id} className="hover:bg-muted/50 transition-colors">
                <td className="p-2 border-b">{sup.name}</td>
                <td className="p-2 border-b">{sup.phone}</td>
                <td className="p-2 border-b">
                  {sup.website ? sup.website : sup.email || "-"}
                </td>
                <td className="p-2 border-b">
                  {sup.status ? "فعال" : "غیرفعال"}
                </td>
                <td className="p-2 border-b">
                  {sup.created_at
                    ? new Date(sup.created_at).toLocaleDateString("fa-IR")
                    : "-"}
                </td>

                {/* دکمه‌ها کنار هم + بدون wrap + پهنای ثابت */}
                <td className="p-2 border-b">
                  <div className="flex gap-2 flex-nowrap">
                    <Link href={`/suppliers/edit/${sup.id}`}>
                      <Button className="bg-amber-500 text-accent-foreground px-3 py-1 rounded-lg">
                        ویرایش
                      </Button>
                    </Link>

                    <DeleteItemButton
                      itemId={sup.id}
                      itemType="تأمین‌کننده"
                      deleteFunction={deleteSupplier}
                      onDeleted={() => {}}
                    />

                    <Link href={`/suppliers/details/${sup.id}`}>
                      <Button className="bg-blue-500 text-accent-foreground px-3 py-1 rounded-lg hover:text-black">
                        جزئیات
                      </Button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReusableTable;
