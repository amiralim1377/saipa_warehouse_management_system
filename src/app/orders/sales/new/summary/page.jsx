"use client";
import { useOrder } from "../context/OrderContext";

export default function SalesOrderSummaryPage() {
  const { order } = useOrder();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">✅ بررسی سفارش</h2>
      <h3 className="font-semibold mb-2">محصولات:</h3>
      <ul className="mb-4">
        {order.items.map((i) => (
          <li key={i.part_id}>
            {i.part_name} x{i.quantity}
          </li>
        ))}
      </ul>

      <h3 className="font-semibold mb-2">مشتری:</h3>
      <p>نام: {order.customer.name}</p>
      <p>ایمیل: {order.customer.email}</p>
      <p>تلفن: {order.customer.phone}</p>
    </div>
  );
}
