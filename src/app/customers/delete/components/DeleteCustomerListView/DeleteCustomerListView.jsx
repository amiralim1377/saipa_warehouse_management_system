"use client";

import { useState } from "react";
import DeleteCustomerButton from "../DeleteCustomerButton/DeleteCustomerButton";

function DeleteCustomerListView({ initialCustomers = [] }) {
  const [customers, setCustomers] = useState(initialCustomers);

  return (
    <div className="mt-6 p-4">
      <h2 className="text-lg font-semibold text-foreground mb-3">
        لیست مشتریان
      </h2>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-right border-collapse text-sm sm:text-base">
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="p-2 border-b">نام مشتری</th>
              <th className="p-2 border-b hidden sm:table-cell">نوع مشتری</th>
              <th className="p-2 border-b hidden md:table-cell">استان</th>
              <th className="p-2 border-b hidden lg:table-cell">شهر</th>
              <th className="p-2 border-b hidden xl:table-cell">تلفن</th>
              <th className="p-2 border-b">اقدامات</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="hover:bg-muted/40 transition-colors"
              >
                <td className="p-2 border-b">
                  {customer.first_name && customer.last_name
                    ? `${customer.first_name} ${customer.last_name}`
                    : customer.company_name || "بدون نام"}
                </td>
                <td className="p-2 border-b hidden sm:table-cell">
                  {customer.customer_type === "individual" ? "حقیقی" : "حقوقی"}
                </td>
                <td className="p-2 border-b hidden md:table-cell">
                  {customer.province || "-"}
                </td>
                <td className="p-2 border-b hidden lg:table-cell">
                  {customer.city || "-"}
                </td>
                <td className="p-2 border-b hidden xl:table-cell">
                  {customer.phone}
                </td>
                <td className="p-2 border-b">
                  <DeleteCustomerButton
                    customerId={customer.id}
                    onDeleted={() =>
                      setCustomers((prev) =>
                        prev.filter((c) => c.id !== customer.id)
                      )
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DeleteCustomerListView;
