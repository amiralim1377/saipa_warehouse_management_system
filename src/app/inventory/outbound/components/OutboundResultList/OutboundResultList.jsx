"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const parts = [
  {
    id: "1",
    name: "فیلتر هوا",
    sku: "FH-123",
    stock: 5,
    warehouse: "انبار مرکزی",
    location: "Z1-A2-R1-L1",
  },
  {
    id: "2",
    name: "تسمه دینام",
    sku: "TD-456",
    stock: 2,
    warehouse: "انبار غرب",
    location: "Z2-A1-R2-L2",
  },
];

function OutboundResultList() {
  const [selectedPart, setSelectedPart] = useState(null);

  return (
    <div className="mt-4 p-6">
      <h3 className="text-xl font-bold mb-4">📋 نتایج جستجو</h3>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted text-foreground">
            <tr>
              <th className="p-3 text-right">نام قطعه</th>
              <th className="p-3 text-right">کد فنی</th>
              <th className="p-3 text-right">موجودی</th>
              <th className="p-3 text-right">انبار</th>
              <th className="p-3 text-right">جایگاه</th>
              <th className="p-3 text-center">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {parts.map((part) => (
              <tr
                key={part.id}
                className="border-t border-border hover:bg-muted transition-colors"
              >
                <td className="p-3">{part.name}</td>
                <td className="p-3">{part.sku}</td>
                <td className="p-3">{part.stock}</td>
                <td className="p-3">{part.warehouse}</td>
                <td className="p-3">{part.location}</td>
                <td className="p-3 text-center">
                  <Button
                    size="sm"
                    className="bg-primary text-primary-foreground"
                    onClick={() => setSelectedPart(part)}
                  >
                    ثبت خروجی
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedPart && (
        <div className="mt-10 p-6 bg-[var(--color-card)] text-[var(--color-card-foreground)] rounded-[var(--radius-lg)] border border-[var(--color-border)]">
          <h3 className="text-lg font-bold mb-6">📦 فرم خروجی قطعه</h3>

          <div className="grid gap-4">
            {/* نام قطعه */}
            <div>
              <label className="block mb-1 font-medium">نام قطعه</label>
              <input
                type="text"
                value={selectedPart.name}
                readOnly
                className="w-full px-3 py-2 rounded-md bg-[var(--color-muted)] text-[var(--color-muted-foreground)]"
              />
            </div>

            {/* انبار */}
            <div>
              <label className="block mb-1 font-medium">انبار</label>
              <input
                type="text"
                value={selectedPart.warehouse}
                readOnly
                className="w-full px-3 py-2 rounded-md bg-[var(--color-muted)] text-[var(--color-muted-foreground)]"
              />
            </div>

            {/* جایگاه */}
            <div>
              <label className="block mb-1 font-medium">جایگاه</label>
              <input
                type="text"
                value={selectedPart.location}
                readOnly
                className="w-full px-3 py-2 rounded-md bg-[var(--color-muted)] text-[var(--color-muted-foreground)]"
              />
            </div>

            {/* تعداد خروجی */}
            <div>
              <label className="block mb-1 font-medium">تعداد خروجی</label>
              <input
                type="number"
                min="1"
                max={selectedPart.stock}
                defaultValue="1"
                className="w-full px-3 py-2 rounded-md border border-[var(--color-border)] bg-[var(--color-input)] text-[var(--color-foreground)]"
              />
            </div>

            {/* مقصد */}
            <div>
              <label className="block mb-1 font-medium">مقصد</label>
              <input
                type="text"
                placeholder="مثلاً مشتری تهران"
                className="w-full px-3 py-2 rounded-md border border-[var(--color-border)] bg-[var(--color-input)] text-[var(--color-foreground)]"
              />
            </div>

            {/* شماره سفارش */}
            <div>
              <label className="block mb-1 font-medium">
                شماره سفارش / حواله
              </label>
              <input
                type="text"
                placeholder="ORD-2025-001"
                className="w-full px-3 py-2 rounded-md border border-[var(--color-border)] bg-[var(--color-input)] text-[var(--color-foreground)]"
              />
            </div>

            {/* توضیحات */}
            <div>
              <label className="block mb-1 font-medium">توضیحات</label>
              <textarea
                rows="3"
                placeholder="توضیحات تکمیلی..."
                className="w-full px-3 py-2 rounded-md border border-[var(--color-border)] bg-[var(--color-input)] text-[var(--color-foreground)]"
              ></textarea>
            </div>

            <Button className="mt-2 bg-primary text-primary-foreground">
              ثبت خروجی
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OutboundResultList;
