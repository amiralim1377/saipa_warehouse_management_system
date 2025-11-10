"use client";

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

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <ul className="w-[220px]  mt-4">
      {navLink.map((item, i) => {
        const Icon = item.icon;
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <li key={i} className="w-full mb-2">
            <Link
              href={item.href}
              className={`flex items-center gap-4 text-sm md:justify-start px-4 py-3 rounded transition-colors
                ${
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
  );
}
