import Link from "next/link";

const navLink = [
  { label: "داشبورد", href: "/dashboard" },
  { label: "کالاها و دسته‌بندی‌ها", href: "/products" },
  { label: "مدیریت موجودی", href: "/inventory" },
  { label: "سفارشات", href: "/orders" },
  { label: "انبارها و مکان‌ها", href: "/warehouses" },
  { label: "تأمین‌کنندگان", href: "/suppliers" },
  { label: "مشتریان", href: "/customers" },
  { label: "گزارش‌ها و تحلیل‌ها", href: "/reports" },
  { label: "اعلان‌ها و هشدارها", href: "/notifications" },
  { label: "کاربران و نقش‌ها", href: "/users" },
  { label: "تنظیمات سیستم", href: "/settings" },
];

function SidebarNav() {
  return (
    <ul className=" w-[220px]  mt-4">
      {navLink.map((item, i) => (
        <li key={i} className="w-full">
          <Link
            href={item.href}
            className="flex justify-center text-sm md:justify-start px-4 py-2  text-foreground hover:bg-orange-100 dark:hover:text-secondary hover:text-primary dark:hover:bg-primary rounded transition-colors"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SidebarNav;
