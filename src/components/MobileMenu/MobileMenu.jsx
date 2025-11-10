"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Boxes,
  ShoppingCart,
  Warehouse,
  Truck,
  Users2,
  BarChart3,
} from "lucide-react";

const navLink = [
  { label: "داشبورد", href: "/dashboard", icon: LayoutDashboard },
  { label: "کالاها و دسته‌بندی‌ها", href: "/products", icon: Package },
  { label: "مدیریت موجودی", href: "/inventory", icon: Boxes },
  { label: "سفارشات", href: "/orders", icon: ShoppingCart },
  { label: "انبارها و مکان‌ها", href: "/warehouses", icon: Warehouse },
  { label: "تأمین‌کنندگان", href: "/suppliers", icon: Truck },
  { label: "مشتریان", href: "/customers", icon: Users2 },
  { label: "گزارش‌ها و تحلیل‌ها", href: "/reports", icon: BarChart3 },
];

export default function MobileMenu({ open, setOpen }) {
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 z-40 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="mt-20 px-4">
          {navLink.map((item, i) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <li key={i} className="mb-2">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-3 py-3 rounded text-sm transition-colors ${
                    isActive
                      ? "bg-orange-100 text-primary dark:bg-primary dark:text-secondary font-medium"
                      : "text-foreground hover:bg-orange-50 dark:hover:bg-primary/5 hover:text-primary"
                  }`}
                >
                  <Icon size={18} className="shrink-0" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  );
}
