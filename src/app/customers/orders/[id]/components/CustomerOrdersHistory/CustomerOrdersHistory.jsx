"use client";

function CustomerOrdersHistory({ data }) {
  return (
    <div className="mt-6 p-4 sm:p-6">
      <h1 className="text-xl font-bold mb-4">سوابق سفارش‌های مشتری</h1>

      <div className="overflow-x-auto">
        <table className="min-w-[800px] w-full border border-[var(--color-border)] rounded-lg text-sm">
          <thead className="bg-[var(--color-card)] text-[var(--color-foreground)]">
            <tr>
              <th className="px-3 py-2 text-left">شناسه سفارش</th>
              <th className="px-3 py-2 text-left">نام مشتری</th>
              <th className="px-3 py-2 text-left">اقلام</th>
              <th className="px-3 py-2 text-left">مبلغ کل</th>
              <th className="px-3 py-2 text-left">کد پرداخت</th>
              <th className="px-3 py-2 text-left">تاریخ ثبت</th>
              <th className="px-3 py-2 text-left">تاریخ تایید</th>
              <th className="px-3 py-2 text-left">توضیحات</th>
              <th className="px-3 py-2 text-left">وضعیت</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border)]">
            {data.map((order) => (
              <tr key={order.id} className="hover:bg-[var(--color-muted)]/40">
                <td className="px-3 py-2 align-middle font-mono">
                  ...{order.id.slice(-4)}
                </td>
                <td className="px-3 py-2 align-middle">
                  {order.customer_name}
                </td>
                <td className="px-3 py-2 align-middle">
                  {Array.isArray(order.items)
                    ? order.items.map((item, idx) => (
                        <div key={idx}>
                          {item.part_name} × {item.quantity}
                        </div>
                      ))
                    : "-"}
                </td>
                <td className="px-3 py-2 align-middle">
                  {order.total_amount
                    ? Number(order.total_amount).toLocaleString("fa-IR")
                    : 0}{" "}
                  تومان
                </td>
                <td className="px-3 py-2 align-middle">
                  {order.payment_reference || "-"}
                </td>
                <td className="px-3 py-2 align-middle">
                  {order.created_at
                    ? new Date(order.created_at).toLocaleDateString("fa-IR")
                    : "-"}
                </td>
                <td className="px-3 py-2 align-middle">
                  {order.confirmed_at
                    ? new Date(order.confirmed_at).toLocaleDateString("fa-IR")
                    : "-"}
                </td>
                <td className="px-3 py-2 align-middle">
                  {order.description || "-"}
                </td>
                <td className="px-3 py-2 align-middle">
                  {order.status === "confirmed" ? "تایید شده" : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerOrdersHistory;
