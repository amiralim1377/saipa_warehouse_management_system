"use client";
import DeleteItemButton from "@/components/Form/DeleteItemButton/DeleteItemButton";
import Link from "next/link";
import { deleteSupplier } from "../../actions/deleteSupplier";

function RecentSuppliers({ newestSuppliersData }) {
  const suppliers = newestSuppliersData || [];

  if (!suppliers.length) {
    return (
      <p className="text-sm text-muted-foreground mt-4">
        هیچ تأمین‌کننده‌ای برای نمایش وجود ندارد.
      </p>
    );
  }

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-foreground mb-3">
        لیست آخرین تأمین‌کنندگان
      </h2>
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-[600px]  w-full text-right border border-border rounded-lg">
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
                  <Link
                    href={`/suppliers/edit/${sup.id}`}
                    className="bg-amber-500 hover:bg-primary  text-accent-foreground px-3 py-1 rounded-lg"
                  >
                    ویرایش
                  </Link>
                  <DeleteItemButton
                    itemId={sup.id}
                    itemType="تأمین‌کننده"
                    deleteFunction={deleteSupplier}
                    onDeleted={() => {}}
                  />
                  <Link
                    href={`/suppliers/details/${sup.id}`}
                    className="bg-blue-500 hover:text-black hover:bg-primary text-accent-foreground px-3 py-1 rounded-lg"
                  >
                    جزئیات
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

export default RecentSuppliers;
