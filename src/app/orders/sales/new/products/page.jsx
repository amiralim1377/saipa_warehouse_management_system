"use client";
import { useOrder } from "../context/OrderContext";

export default function SelectProductsPage() {
  const { order, addItem, removeItem } = useOrder();

  const sampleProducts = [
    { part_id: "1", part_name: "صندلی جلو پراید", stock: 50 },
    { part_id: "2", part_name: "فیلتر هوا", stock: 100 },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">🧩 انتخاب محصولات</h2>
      <ul className="mb-4">
        {sampleProducts.map((p) => (
          <li key={p.part_id} className="flex justify-between py-2 border-b">
            <span>
              {p.part_name} - موجودی: {p.stock}
            </span>
            <button
              className="px-2 py-1 bg-primary text-primary-foreground rounded"
              onClick={() => addItem({ ...p, quantity: 1 })}
            >
              اضافه کردن
            </button>
          </li>
        ))}
      </ul>

      <h3 className="font-semibold">محصولات انتخاب شده:</h3>
      <ul>
        {order.items.map((i) => (
          <li key={i.part_id} className="flex justify-between py-1">
            {i.part_name} x{i.quantity}
            <button
              className="text-destructive"
              onClick={() => removeItem(i.part_id)}
            >
              حذف
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
