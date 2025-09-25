import Image from "next/image";
import Link from "next/link";

const navLink = [
  { label: "داشبورد", href: "/dashboard" },
  { label: "کالاها و دسته‌بندی‌ها", href: "/products" },
  { label: "مدیریت موجودی", href: "/inventory" },
  { label: "سفارشات", href: "/orders" },
  { label: "انبارها و مکان‌ها", href: "/warehouses" },
  { label: "تأمین‌کنندگان", href: "/suppliers" },
  { label: "مشتریان", href: "/customers" },
  { label: "کاربران و نقش‌ها", href: "/users" },
  { label: "گزارش‌ها و تحلیل‌ها", href: "/reports" },
  { label: "اعلان‌ها و هشدارها", href: "/notifications" },
  { label: "تنظیمات سیستم", href: "/settings" },
];

export default function SideBar() {
  return (
    <div className="md:w-64 flex flex-col items-center    w-32 bg-background   min-h-screen border-r border-gray-200 shadow-md">
      <div className="flex flex-col items-center py-4">
        <Image src={"/saipa-logo.webp"} width={50} height={50} alt="logo" />
        <p className="mt-2 font-bold text-primary text-lg">سایپالجستیک</p>
      </div>

      <ul className="w-full mt-4">
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
    </div>
  );
}
