"use client";

import DeleteItemButton from "@/components/Form/DeleteItemButton/DeleteItemButton";
import { Button } from "@/components/ui/button";
import { Pencil, History } from "lucide-react";
import Link from "next/link";
import deleteCustomer from "../../delete/actions/deleteCustomers";

export default function CustomersTable({ customers }) {
  return (
    <div className="p-4 overflow-x-auto">
      <table className="min-w-full border border-[var(--color-border)] rounded-lg text-sm leading-normal">
        <thead className="bg-[var(--color-card)] text-[var(--color-foreground)]">
          <tr>
            <th className="px-3 py-2 text-left font-normal leading-normal align-middle">
              شناسه
            </th>
            <th className="px-3 py-2 text-left font-normal leading-normal align-middle">
              نوع
            </th>
            <th className="px-3 py-2 text-left font-normal leading-normal align-middle">
              نام / شرکت
            </th>
            <th className="px-3 py-2 text-left font-normal leading-normal align-middle">
              کد ملی / ثبت
            </th>
            <th className="px-3 py-2 text-left font-normal leading-normal align-middle">
              تلفن
            </th>
            <th className="px-3 py-2 text-left font-normal leading-normal align-middle">
              شهر
            </th>
            <th className="px-3 py-2 text-left font-normal leading-normal align-middle">
              تاریخ
            </th>
            <th className="px-3 py-2 text-center font-normal leading-normal align-middle">
              عملیات
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--color-border)]">
          {customers && customers.length > 0 ? (
            customers.map((c) => (
              <tr key={c.id} className="hover:bg-[var(--color-muted)]/40">
                <td className="px-3 py-2 align-middle">...{c.id.slice(-4)}</td>
                <td className="px-3 py-2 align-middle">{c.customer_type}</td>
                <td className="px-3 py-2 font-medium align-middle">
                  {c.company_name || `${c.first_name} ${c.last_name}`}
                </td>
                <td className="px-3 py-2 align-middle">
                  {c.company_registration_number || c.national_id || "-"}
                </td>
                <td className="px-3 py-2 align-middle">{c.phone}</td>
                <td className="px-3 py-2 align-middle">{c.city || "-"}</td>
                <td className="px-3 py-2 align-middle">
                  {c.created_at instanceof Date
                    ? c.created_at.toLocaleDateString("fa-IR")
                    : c.created_at}
                </td>
                <td className="px-3 py-2 text-center align-middle">
                  <div className="flex gap-2 justify-center">
                    <Button size="sm" variant="secondary">
                      <History className="w-4 h-4" />
                    </Button>
                    <Link href={`customers/edit/${c.id}`}>
                      <Button size="sm" variant="outline">
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
                className="text-center py-4 text-[var(--color-muted-foreground)] align-middle"
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
