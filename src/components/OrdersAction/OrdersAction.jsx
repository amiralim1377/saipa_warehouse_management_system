import React from "react";
import Link from "next/link";

function OrdersAction() {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {/* ثبت سفارش خرید */}
      <Link
        href="/orders/purchase/new"
        className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
      >
        ثبت سفارش خرید
      </Link>

      {/* ثبت سفارش فروش */}
      <Link
        href="/orders/sales/new"
        className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:opacity-90 transition"
      >
        ثبت سفارش فروش
      </Link>
    </div>
  );
}

export default OrdersAction;
