"use client";
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
    <>
      <h3 className="mt-8 mb-2 font-semibold">📋 نتایج جستجو</h3>
      <table className="w-full border border-[var(--color-border)] rounded-[var(--radius-sm)] overflow-hidden">
        <thead className="bg-[var(--color-muted)] text-[var(--color-muted-foreground)]">
          <tr>
            <th className="p-2">نام قطعه</th>
            <th className="p-2">کد فنی</th>
            <th className="p-2">موجودی</th>
            <th className="p-2">انبار</th>
            <th className="p-2">جایگاه</th>
            <th className="p-2">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {parts.map((part) => (
            <tr
              key={part.id}
              className="text-center border-t border-[var(--color-border)]"
            >
              <td className="p-2">{part.name}</td>
              <td className="p-2">{part.sku}</td>
              <td className="p-2">{part.stock}</td>
              <td className="p-2">{part.warehouse}</td>
              <td className="p-2">{part.location}</td>
              <td className="p-2">
                <button
                  className="px-3 py-1 rounded-[var(--radius-sm)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)]"
                  onClick={() => setSelectedPart(part)}
                >
                  ثبت خروجی
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedPart && (
        <div className="mt-10 p-6 bg-[var(--color-card)] text-[var(--color-card-foreground)] rounded-[var(--radius-lg)] border border-[var(--color-border)]">
          <h3 className="text-lg font-bold mb-4">📦 فرم خروجی قطعه</h3>
          <div className="grid gap-4">
            <div>
              <label className="block mb-1">نام قطعه</label>
              <input
                type="text"
                value={selectedPart.name}
                readOnly
                className="w-full px-3 py-2 rounded-[var(--radius-sm)] bg-[var(--color-muted)] text-[var(--color-muted-foreground)]"
              />
            </div>
            <div>
              <label className="block mb-1">انبار</label>
              <input
                type="text"
                value={selectedPart.warehouse}
                readOnly
                className="w-full px-3 py-2 rounded-[var(--radius-sm)] bg-[var(--color-muted)] text-[var(--color-muted-foreground)]"
              />
            </div>
            <div>
              <label className="block mb-1">جایگاه</label>
              <input
                type="text"
                value={selectedPart.location}
                readOnly
                className="w-full px-3 py-2 rounded-[var(--radius-sm)] bg-[var(--color-muted)] text-[var(--color-muted-foreground)]"
              />
            </div>
            <div>
              <label className="block mb-1">تعداد خروجی</label>
              <input
                type="number"
                min="1"
                max={selectedPart.stock}
                defaultValue="1"
                className="w-full px-3 py-2 rounded-[var(--radius-sm)] bg-[var(--color-input)] text-[var(--color-foreground)] border border-[var(--color-border)]"
              />
            </div>
            <div>
              <label className="block mb-1">مقصد</label>
              <input
                type="text"
                placeholder="مثلاً مشتری تهران"
                className="w-full px-3 py-2 rounded-[var(--radius-sm)] bg-[var(--color-input)] text-[var(--color-foreground)] border border-[var(--color-border)]"
              />
            </div>
            <div>
              <label className="block mb-1">شماره سفارش / حواله</label>
              <input
                type="text"
                placeholder="ORD-2025-001"
                className="w-full px-3 py-2 rounded-[var(--radius-sm)] bg-[var(--color-input)] text-[var(--color-foreground)] border border-[var(--color-border)]"
              />
            </div>
            <div>
              <label className="block mb-1">توضیحات</label>
              <textarea
                rows="3"
                placeholder="توضیحات تکمیلی..."
                className="w-full px-3 py-2 rounded-[var(--radius-sm)] bg-[var(--color-input)] text-[var(--color-foreground)] border border-[var(--color-border)]"
              ></textarea>
            </div>
            <button className="mt-4 px-4 py-2 rounded-[var(--radius-md)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)]">
              ثبت خروجی
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default OutboundResultList;
