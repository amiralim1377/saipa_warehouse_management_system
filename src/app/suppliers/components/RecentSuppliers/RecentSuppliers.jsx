"use client";
import { Button } from "@/components/ui/button";

function RecentSuppliers({ newestSuppliersData }) {
  const suppliers = newestSuppliersData || [];

  const handleDelete = (id) => {
    console.log("حذف تأمین‌کننده با id:", id);
  };

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
      <div className="overflow-x-auto">
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
                  {sup.email ? sup.email : sup.website || "-"}
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
                  <Button className="bg-accent text-accent-foreground px-3 py-1 rounded-lg">
                    ویرایش
                  </Button>
                  <Button
                    className="bg-destructive text-destructive-foreground px-3 py-1 rounded-lg"
                    onClick={() => handleDelete(sup.id)}
                  >
                    حذف
                  </Button>
                  <Button className="bg-muted text-muted-foreground px-3 py-1 rounded-lg">
                    جزئیات
                  </Button>
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
