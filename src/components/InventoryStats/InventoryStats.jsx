import { Card, CardContent } from "@/components/ui/card";

function InventoryStats() {
  const stats = [
    { label: "موجودی فعلی", value: 1000 },
    { label: "کالاهای کمبود", value: 25 },
    { label: "کالاهای مازاد", value: 150 },
    { label: "ورودی کالا", value: 500 },
    { label: "خروجی کالا", value: 450 },
    { label: "ارزش کل موجودی", value: "2,500,000 تومان" },
    { label: "کالاهای نزدیک انقضا", value: 12 },
  ];

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6"
      dir="rtl"
    >
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className="p-6 bg-[var(--color-card)] text-[var(--color-card-foreground)] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <CardContent className="flex flex-col items-center">
            <p className="text-3xl font-semibold">{stat.value}</p>
            <p className="mt-2 text-gray-400 text-sm">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default InventoryStats;
