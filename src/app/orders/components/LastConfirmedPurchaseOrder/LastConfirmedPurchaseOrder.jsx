import React from "react";

const orders = [
  {
    id: "1",
    customer_id: "C-101",
    items: [
      { name: "قطعه A", quantity: 2, price: 50000 },
      { name: "قطعه B", quantity: 1, price: 75000 },
    ],
    total_amount: 175000,
    created_at: "2025-10-09 14:30",
    status: "در حال انتظار",
  },
  {
    id: "2",
    customer_id: "C-102",
    items: [{ name: "قطعه C", quantity: 3, price: 20000 }],
    total_amount: 60000,
    created_at: "2025-10-09 14:40",
    status: "تایید شده",
  },
];

function LastConfirmedPurchaseOrder() {
  return (
    <div className="overflow-x-auto bg-background p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">
        جدول آخرین سفارش‌های خرید تایید شده
      </h2>
      <table className="min-w-full border border-border text-foreground">
        <thead className="bg-primary text-primary-foreground">
          <tr>
            <th className="px-4 py-2 border border-border">شناسه سفارش</th>
            <th className="px-4 py-2 border border-border">شناسه مشتری</th>
            <th className="px-4 py-2 border border-border">جزئیات سفارش</th>
            <th className="px-4 py-2 border border-border">جمع مبلغ</th>
            <th className="px-4 py-2 border border-border">تاریخ ایجاد</th>
            <th className="px-4 py-2 border border-border">وضعیت</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="text-center bg-card text-card-foreground"
            >
              <td className="px-4 py-2 border border-border">{order.id}</td>
              <td className="px-4 py-2 border border-border">
                {order.customer_id}
              </td>
              <td className="px-4 py-2 border border-border">
                {order.items.map((item, idx) => (
                  <div key={idx}>
                    {item.name} - تعداد: {item.quantity} - قیمت: {item.price}
                  </div>
                ))}
              </td>
              <td className="px-4 py-2 border border-border">
                {order.total_amount}
              </td>
              <td className="px-4 py-2 border border-border">
                {order.created_at}
              </td>
              <td className="px-4 py-2 border border-border">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LastConfirmedPurchaseOrder;
