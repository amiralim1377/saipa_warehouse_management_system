import React from "react";
import Link from "next/link";

function NoSuppliers() {
  return (
    <div
      className="p-6 max-w-md mx-auto text-center border rounded-md bg-muted text-foreground border-border"
      style={{ borderRadius: "var(--radius-md)" }}
    >
      <h2 className="text-xl font-semibold mb-4">ثبت سفارش خرید</h2>
      <p className="mb-4 text-muted-foreground">
        برای ثبت سفارش خرید ابتدا باید تامین‌کننده‌ای ثبت کنید.
      </p>
      <Link href="/suppliers">
        <a
          className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-sm hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
          style={{ borderRadius: "var(--radius-sm)" }}
        >
          ثبت تامین‌کننده جدید
        </a>
      </Link>
    </div>
  );
}

export default NoSuppliers;
