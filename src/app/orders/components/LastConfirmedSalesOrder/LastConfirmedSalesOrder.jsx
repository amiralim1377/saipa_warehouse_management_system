import React from "react";

function LastConfirmedSalesOrder() {
  const orders = [
    {
      id: "a1b2c3d4-e5f6-7890-abcd-1234567890ab",
      customer_id: "c1d2e3f4-5678-90ab-cdef-1234567890ab",
      items: [
        { name: "فیلتر هوا", quantity: 2, price: 150000 },
        { name: "روغن موتور", quantity: 1, price: 250000 },
      ],
      total_amount: 550000,
      status: "در حال انتظار",
      created_at: "2025-10-09T12:00:00Z",
    },
    {
      id: "b2c3d4e5-f6a7-8901-bcde-2345678901bc",
      customer_id: "d2e3f4a5-6789-01bc-def0-2345678901cd",
      items: [{ name: "لنت ترمز", quantity: 4, price: 100000 }],
      total_amount: 400000,
      status: "در حال انتظار",
      created_at: "2025-10-09T13:30:00Z",
    },
  ];

  return (
    <div className="overflow-x-auto bg-background p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">آخرین سفارش‌های فروش تأیید شده</h2>
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
              <td className="px-4 py-2 border border-border text-center">
                <div className="flex justify-between">
                  <span>
                    {new Date(order.created_at).toLocaleDateString("fa-IR")}
                  </span>
                  <span>
                    {new Date(order.created_at).toLocaleTimeString("fa-IR", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })}
                  </span>
                </div>
              </td>
              <td className="px-4 py-2 border border-border">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LastConfirmedSalesOrder;
