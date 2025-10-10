"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DeleteItemButton from "@/components/Form/DeleteItemButton/DeleteItemButton";
import { deleteSupplier } from "../../actions/deleteSupplier";

function SuppliersListView({ initialSuppliers = [] }) {
  const [suppliers, setSuppliers] = useState(initialSuppliers);
  const router = useRouter();

  return (
    <div className="mt-6 p-4">
      <h2 className="text-lg font-semibold text-foreground mb-3">
        لیست تأمین‌کنندگان
      </h2>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-right border-collapse text-sm sm:text-base">
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="p-2 border-b">نام</th>
              <th className="p-2 border-b hidden sm:table-cell">نوع</th>
              <th className="p-2 border-b hidden md:table-cell">
                کد ملی / شناسه
              </th>
              <th className="p-2 border-b hidden lg:table-cell">تلفن</th>
              <th className="p-2 border-b hidden xl:table-cell">ایمیل</th>
              <th className="p-2 border-b hidden xl:table-cell">وضعیت</th>
              <th className="p-2 border-b">اقدامات</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr
                key={supplier.id}
                className="hover:bg-muted/40 transition-colors"
              >
                <td className="p-2 border-b">{supplier.name || "بدون نام"}</td>
                <td className="p-2 border-b hidden sm:table-cell">
                  {supplier.supplier_type === "individual" ? "حقیقی" : "حقوقی"}
                </td>
                <td className="p-2 border-b hidden md:table-cell">
                  {supplier.national_id || supplier.tax_code || "-"}
                </td>
                <td className="p-2 border-b hidden lg:table-cell">
                  {supplier.phone || "-"}
                </td>
                <td className="p-2 border-b hidden xl:table-cell">
                  {supplier.email || "-"}
                </td>
                <td className="p-2 border-b hidden xl:table-cell">
                  {supplier.status ? "فعال" : "غیرفعال"}
                </td>
                <td className="p-2 border-b">
                  <DeleteItemButton
                    itemId={supplier.id}
                    itemType="تأمین‌کننده"
                    deleteFunction={deleteSupplier}
                    onDeleted={() => {
                      setSuppliers((prev) =>
                        prev.filter((s) => s.id !== supplier.id)
                      );
                      router.refresh();
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SuppliersListView;
