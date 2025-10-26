import Link from "next/link";
import { getSuppliers } from "../services/getSuppliers";

export default async function SuppliersDetailsPage() {
  const { status, message, suppliers: suppliersData } = await getSuppliers();

  const suppliers = suppliersData.map((sup) => ({
    id: sup.id,
    name: sup.name,
    phone: sup.phone,
    email: sup.email || "",
    website: sup.website || "",
    status: sup.status,
    created_at: sup.created_at ? new Date(sup.created_at).toISOString() : null,
    type: sup.supplier_type === "company" ? "حقوقی" : "حقیقی",
  }));

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
        لیست تأمین‌کنندگان
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-[700px] w-full text-right border border-border rounded-lg">
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="p-2 border-b">نام</th>
              <th className="p-2 border-b">شماره تماس</th>
              <th className="p-2 border-b">ایمیل / وب‌سایت</th>
              <th className="p-2 border-b">نوع تأمین‌کننده</th>
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
                  {sup.email || sup.website || "-"}
                </td>
                <td className="p-2 border-b">{sup.type}</td>
                <td className="p-2 border-b">
                  {sup.status ? "فعال" : "غیرفعال"}
                </td>
                <td className="p-2 border-b">
                  {sup.created_at
                    ? new Date(sup.created_at).toLocaleDateString("fa-IR")
                    : "-"}
                </td>
                <td className="p-2 border-b">
                  <Link
                    href={`/suppliers/details/${sup.id}`}
                    className="bg-muted text-muted-foreground px-3 py-1 rounded-lg"
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
