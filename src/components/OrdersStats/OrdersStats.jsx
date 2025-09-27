import React from "react";

function OrdersStats() {
  // داده نمونه؛ در عمل از API میاد
  const stats = [
    { id: 1, label: "کل سفارش‌ها", value: 120, color: "bg-primary" },
    { id: 2, label: "در انتظار", value: 15, color: "bg-destructive" },
    { id: 3, label: "تحویل داده شده", value: 105, color: "bg-accent" },
  ];

  return (
    <div className="p-6 bg-card rounded-lg shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-6">
      {stats.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center p-4 border border-border rounded-lg"
        >
          <span className={`text-3xl font-bold ${item.color}-foreground`}>
            {item.value}
          </span>
          <span className="text-sm text-muted-foreground mt-1">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default OrdersStats;
