import React from "react";

const statusMap = {
  draft: "پیش‌نویس",
  pending: "در انتظار",
  confirmed: "تایید شده",
  cancelled: "لغو شده",
};

function LastConfirmedSalesOrder({ orders = [] }) {
  const hasOrders = orders.length > 0;

  return (
    <div className="overflow-x-auto bg-background p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">آخرین سفارش‌های فروش تأیید شده</h2>

      {!hasOrders ? (
        <div className="w-full bg-card border border-border rounded-lg p-8 flex flex-col items-center justify-center text-muted-foreground">
          <p className="text-lg font-medium mb-2">هیچ سفارشی وجود ندارد.</p>
          <p className="text-sm text-muted-foreground/80">
            بعد از تأیید سفارش‌ها، این جدول پر می‌شود.
          </p>
        </div>
      ) : (
        <table className="min-w-full border border-border text-foreground">
          <thead className="bg-primary text-primary-foreground">
            <tr>
              <th className="px-4 py-2 border border-border">شناسه سفارش</th>
              <th className="px-4 py-2 border border-border">نام مشتری </th>
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
                  {order.customer_name}
                </td>
                <td className="px-4 py-2 border border-border text-right">
                  {order.items?.map((item, idx) => (
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
                <td className="px-4 py-2 border border-border text-green-600">
                  {statusMap[order.status] || order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LastConfirmedSalesOrder;
