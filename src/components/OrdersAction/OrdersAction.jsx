import React from "react";
import Link from "next/link";

function OrdersAction() {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <Link
        href="/orders/purchase/new"
        className="px-6 py-3 rounded-lg bg-primary text-secondary-foreground font-medium hover:bg-primary/90 transition"
      >
        ثبت سفارش خرید
      </Link>

      <Link
        href="/orders/sales/new"
        className="px-6 py-3 rounded-lg bg-destructive text-secondary-foreground font-medium hover:bg-secondary/90 transition"
      >
        ثبت سفارش فروش
      </Link>
    </div>
  );
}

export default OrdersAction;
