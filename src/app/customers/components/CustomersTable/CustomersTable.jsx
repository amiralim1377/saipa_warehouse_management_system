"use client";

import DeleteItemButton from "@/components/Form/DeleteItemButton/DeleteItemButton";
import { Button } from "@/components/ui/button";
import { Pencil, History } from "lucide-react";
import Link from "next/link";
import deleteCustomer from "../../delete/actions/deleteCustomers";

export default function CustomersTable({ customers }) {
  const cell = "px-3 py-2 align-middle whitespace-nowrap";

  return (
    <div className="overflow-x-auto border border-gray-300 rounded-lg">
      <table className="min-w-full text-sm leading-normal border-collapse">
        <thead className="bg-[var(--color-card)] text-[var(--color-foreground)]">
          <tr>
            <th className={`${cell} text-left`}>شناسه</th>
            <th className={`${cell} text-left`}>نوع</th>
            <th className={`${cell} text-left`}>نام / شرکت</th>
            <th className={`${cell} text-left`}>کد ملی / ثبت</th>
            <th className={`${cell} text-left`}>تلفن</th>
            <th className={`${cell} text-left`}>شهر</th>
            <th className={`${cell} text-left`}>تاریخ</th>
            <th className={`${cell} text-center w-[150px]`}>عملیات</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-[var(--color-border)]">
          {customers?.length ? (
            customers.map((c) => (
              <tr key={c.id} className="hover:bg-[var(--color-muted)]/40">
                <td className={`${cell} text-left`}>...{c.id.slice(-4)}</td>

                <td className={`${cell} text-left`}>
                  {c.customer_type === "company" ? "حقوقی" : "حقیقی"}
                </td>

                <td className={`${cell} text-left font-medium`}>
                  {c.company_name || `${c.first_name} ${c.last_name}`}
                </td>

                <td className={`${cell} text-left`}>
                  {c.company_registration_number || c.national_id || "-"}
                </td>

                <td className={`${cell} text-left`}>{c.phone}</td>

                <td className={`${cell} text-left`}>{c.city || "-"}</td>

                <td className={`${cell} text-left`}>
                  {c.created_at instanceof Date
                    ? c.created_at.toLocaleDateString("fa-IR")
                    : c.created_at}
                </td>

                <td className={`${cell} text-center w-[150px]`}>
                  <div className="flex justify-center gap-2">
                    <Link href={`customers/orders/${c.id}`}>
                      <Button
                        size="sm"
                        className="bg-indigo-600 text-white hover:bg-indigo-700"
                      >
                        <History className="w-4 h-4" />
                      </Button>
                    </Link>

                    <Link href={`customers/edit/${c.id}`}>
                      <Button
                        size="sm"
                        className="bg-yellow-500 text-white hover:bg-yellow-600"
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                    </Link>

                    <DeleteItemButton
                      itemType="مشتری"
                      itemId={c.id}
                      deleteFunction={deleteCustomer}
                      onDeleted={() => {}}
                    />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={8}
                className="text-center py-4 text-[var(--color-muted-foreground)]"
              >
                داده‌ای برای نمایش وجود ندارد
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
