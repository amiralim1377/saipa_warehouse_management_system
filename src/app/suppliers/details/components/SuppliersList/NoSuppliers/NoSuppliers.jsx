import React from "react";
import Link from "next/link";

function NoSuppliers() {
  return (
    <div
      className="p-6 max-w-md mx-auto text-center border rounded-md bg-muted text-foreground border-border"
      style={{ borderRadius: "var(--radius-md)" }}
    >
      <h2 className="text-xl font-semibold mb-4">
        هیچ تأمین‌کننده‌ای ثبت نشده
      </h2>

      <Link href="/suppliers/create">
        <a
          className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-sm hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
          style={{ borderRadius: "var(--radius-sm)" }}
        >
          ثبت تأمین‌کننده جدید
        </a>
      </Link>
    </div>
  );
}

export default NoSuppliers;
