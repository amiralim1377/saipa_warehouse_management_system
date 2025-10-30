"use client";
import DeleteItemButton from "@/components/Form/DeleteItemButton/DeleteItemButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { deleteSupplier } from "../../actions/deleteSupplier";

function IndividualSuppliers({ suppliers }) {
  return (
    <div className="mt-6 overflow-x-auto">
      <h2 className="text-lg font-semibold text-[var(--color-foreground)] mb-3">
        لیست تأمین‌کنندگان حقیقی
      </h2>
      <table className="min-w-[600px] w-full text-right border border-border rounded-lg">
        <thead className="bg-muted text-muted-foreground">
          <tr>
            <th className="p-2 border-b">نام</th>
            <th className="p-2 border-b">شماره تماس</th>
            <th className="p-2 border-b">ایمیل / وب‌سایت</th>
            <th className="p-2 border-b">وضعیت</th>
            <th className="p-2 border-b">تاریخ ثبت</th>
            <th className="p-2 border-b">اقدامات</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((sup) => (
            <tr key={sup.id}>
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
              <td className="p-2 border-b flex gap-2 flex-wrap">
                <Link href={`/suppliers/edit/${sup.id}`}>
                  <Button className="bg-accent text-accent-foreground px-3 py-1 rounded-lg">
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
                  <Button className="bg-muted hover:text-black  text-muted-foreground px-3 py-1 rounded-lg">
                    جزئیات
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

export default IndividualSuppliers;
