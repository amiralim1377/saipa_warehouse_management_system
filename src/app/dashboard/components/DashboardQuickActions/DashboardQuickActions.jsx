"use client";
import React from "react";
import Link from "next/link";

const actions = [
  {
    label: "ثبت ورودی کالا",
    href: "/inventory/inbound",
    className: "bg-emerald-600 text-white",
  },
  {
    label: "ثبت خروجی کالا",
    href: "/inventory/outbound",
    className: "bg-rose-600 text-white",
  },
  {
    label: "ثبت سفارش خرید",
    href: "/orders/purchase/new",
    className: "bg-primary text-white",
  },
  {
    label: "ثبت سفارش فروش",
    href: "/orders/sales/new",
    className: "bg-violet-600 text-white",
  },
  {
    label: "افزودن تأمین‌کننده",
    href: "/suppliers/new",
    className: "bg-green-600 text-white",
  },
  {
    label: "ثبت مشتری جدید",
    href: "/customers/new",
    className: "bg-blue-600 text-white",
  },
];

function DashboardQuickActions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {actions.map((action, index) => (
        <Link
          key={index}
          href={action.href}
          className={`w-full text-center px-6 py-4 rounded-lg font-medium hover:opacity-90 transition ${action.className}`}
        >
          {action.label}
        </Link>
      ))}
    </div>
  );
}

export default DashboardQuickActions;
