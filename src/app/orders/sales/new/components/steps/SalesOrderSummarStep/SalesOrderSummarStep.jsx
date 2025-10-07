"use client";

import { useFormContext, useWatch } from "react-hook-form";
import { useOrder } from "../../../context/OrderContext";
import CustomerDetailsCard from "../../CustomerDetailsCard/CustomerDetailsCard";

export default function SalesOrderSummaryStep() {
  const { customers, order } = useOrder();
  const { control } = useFormContext();

  // 👇 گرفتن id مشتری انتخاب‌شده از فرم
  const selectedCustomerId = useWatch({ control, name: "customer.id" });

  // 👇 پیدا کردن مشتری از لیست
  const selectedCustomer = customers?.find((c) => c.id === selectedCustomerId);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">✅ بررسی سفارش</h2>

      {/* جدول محصولات */}
      <h3 className="font-semibold mb-2">محصولات:</h3>
      <div className="overflow-x-auto rounded-lg border border-border bg-card">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="px-4 py-2 text-left border-b border-border whitespace-nowrap">
                #
              </th>
              <th className="px-4 py-2 text-left border-b border-border whitespace-nowrap">
                نام محصول
              </th>
              <th className="px-4 py-2 text-left border-b border-border whitespace-nowrap">
                تعداد
              </th>
              <th className="px-4 py-2 text-left border-b border-border whitespace-nowrap">
                قیمت واحد
              </th>
              <th className="px-4 py-2 text-left border-b border-border whitespace-nowrap">
                مجموع
              </th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, index) => (
              <tr
                key={item.part_id}
                className="hover:bg-accent hover:text-accent-foreground"
              >
                <td className="px-4 py-2 border-b border-border whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border-b border-border whitespace-nowrap">
                  {item.part_name}
                </td>
                <td className="px-4 py-2 border-b border-border whitespace-nowrap">
                  {item.quantity}
                </td>
                <td className="px-4 py-2 border-b border-border whitespace-nowrap">
                  {item.unit_price?.toLocaleString() || "-"}
                </td>
                <td className="px-4 py-2 border-b border-border whitespace-nowrap">
                  {(item.unit_price * item.quantity).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* اطلاعات مشتری انتخاب‌شده */}
      <h3 className="font-semibold mt-6 mb-2">مشتری:</h3>
      {selectedCustomer ? (
        <CustomerDetailsCard customer={selectedCustomer} />
      ) : (
        <p className="text-muted-foreground">هیچ مشتری انتخاب نشده است</p>
      )}
    </div>
  );
}
