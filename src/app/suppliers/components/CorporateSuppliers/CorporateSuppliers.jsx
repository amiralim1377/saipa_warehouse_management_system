"use client";
import { Button } from "@/components/ui/button";

function CorporateSuppliers() {
  // نمونه داده‌ها: تأمین‌کنندگان حقوقی
  const suppliers = [
    {
      id: 1,
      name: "شرکت تامین‌کننده ۱",
      phone: "02112345678",
      email: "corp1@example.com",
      status: "فعال",
      lastOrder: "2025-09-20",
    },
    {
      id: 2,
      name: "شرکت تامین‌کننده ۲",
      phone: "02122334455",
      email: "corp2@example.com",
      status: "غیرفعال",
      lastOrder: "2025-09-18",
    },
    {
      id: 3,
      name: "شرکت تامین‌کننده ۳",
      phone: "02129876543",
      email: "corp3@example.com",
      status: "فعال",
      lastOrder: "2025-09-22",
    },
  ];

  const handleDelete = (id) => {
    console.log("حذف تأمین‌کننده با id:", id);
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-[var(--color-foreground)] mb-3">
        لیست تأمین‌کنندگان حقوقی
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full text-right border border-border rounded-lg">
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="p-2 border-b">نام شرکت</th>
              <th className="p-2 border-b">شماره تماس</th>
              <th className="p-2 border-b">ایمیل</th>
              <th className="p-2 border-b">وضعیت</th>
              <th className="p-2 border-b">آخرین سفارش</th>
              <th className="p-2 border-b">اقدامات</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((sup) => (
              <tr key={sup.id}>
                <td className="p-2 border-b">{sup.name}</td>
                <td className="p-2 border-b">{sup.phone}</td>
                <td className="p-2 border-b">{sup.email}</td>
                <td className="p-2 border-b">{sup.status}</td>
                <td className="p-2 border-b">{sup.lastOrder}</td>
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

export default CorporateSuppliers;
