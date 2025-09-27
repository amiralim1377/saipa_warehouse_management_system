"use client";
import { Button } from "@/components/ui/button";

function OrdersTable() {
  // داده نمونه
  const orders = [
    {
      id: 101,
      type: "خرید",
      status: "در انتظار",
      party: "تامین‌کننده ۱",
      date: "2025-09-26",
    },
    {
      id: 102,
      type: "فروش",
      status: "ارسال شده",
      party: "مشتری ۱",
      date: "2025-09-25",
    },
    {
      id: 103,
      type: "خرید",
      status: "تایید شده",
      party: "تامین‌کننده ۲",
      date: "2025-09-24",
    },
    // ... تا 15 سفارش
  ];

  // تابع برای تعیین کلاس رنگ وضعیت
  const statusClass = (status) => {
    switch (status) {
      case "در انتظار":
        return "bg-yellow-100 text-yellow-800";
      case "تایید شده":
        return "bg-blue-100 text-blue-800";
      case "ارسال شده":
        return "bg-purple-100 text-purple-800";
      case "تحویل شده":
        return "bg-green-100 text-green-800";
      case "لغو شده":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-border rounded-lg">
        <thead className="bg-muted text-muted-foreground">
          <tr>
            <th className="p-3 text-left">شماره سفارش</th>
            <th className="p-3 text-left">نوع سفارش</th>
            <th className="p-3 text-left">وضعیت</th>
            <th className="p-3 text-left">طرف حساب</th>
            <th className="p-3 text-left">تاریخ</th>
            <th className="p-3 text-left">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {orders.slice(0, 15).map((order) => (
            <tr key={order.id} className="border-t border-border">
              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.type}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded ${statusClass(order.status)}`}
                >
                  {order.status}
                </span>
              </td>
              <td className="p-3">{order.party}</td>
              <td className="p-3">{order.date}</td>
              <td className="p-3">
                <Button
                  size="sm"
                  className="bg-secondary text-secondary-foreground px-3 py-1 rounded"
                  onClick={() => alert(`ویرایش سفارش ${order.id}`)}
                >
                  ویرایش
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
