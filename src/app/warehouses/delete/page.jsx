"use client";
import { Button } from "@/components/ui/button";

function WarehousesTable() {
  const warehouses = [
    {
      id: 1,
      name: "انبار الف",
      location: "تهران",
      totalParts: 120,
      minStock: 50,
    },
    {
      id: 2,
      name: "انبار ب",
      location: "اصفهان",
      totalParts: 80,
      minStock: 30,
    },
    {
      id: 3,
      name: "انبار ج",
      location: "مشهد",
      totalParts: 200,
      minStock: 100,
    },
  ];

  const handleDelete = (id) => {
    // اینجا می‌تونی API حذف را صدا بزنی یا یک Modal تأیید باز کنی
    console.log("حذف انبار با id:", id);
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-[var(--color-foreground)] mb-3">
        لیست انبارها
      </h2>
      <table className="w-full text-right border border-border rounded-lg">
        <thead className="bg-muted text-muted-foreground">
          <tr>
            <th className="p-2 border-b">نام انبار</th>
            <th className="p-2 border-b">مکان / آدرس</th>
            <th className="p-2 border-b">تعداد قطعات</th>
            <th className="p-2 border-b">حداقل موجودی هشدار</th>
            <th className="p-2 border-b">اقدامات</th>
          </tr>
        </thead>
        <tbody>
          {warehouses.map((wh) => (
            <tr key={wh.id}>
              <td className="p-2 border-b">{wh.name}</td>
              <td className="p-2 border-b">{wh.location}</td>
              <td className="p-2 border-b">{wh.totalParts}</td>
              <td className="p-2 border-b">{wh.minStock}</td>
              <td className="p-2 border-b">
                <Button
                  className="bg-destructive text-destructive-foreground px-4 py-2 rounded-lg"
                  onClick={() => handleDelete(wh.id)}
                >
                  حذف
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WarehousesTable;
