"use server";
import prisma from "@/lib/prismaClient";

export const getDashboardSummaryStats = async () => {
  try {
    const result = await prisma.$queryRaw`
      SELECT * FROM public.get_dashboard_stats();
    `;

    const stats = result[0];

    return [
      { title: "تعداد کل کالاها", value: Number(stats.total_products) },
      {
        title: "تعداد سفارش‌های خرید باز",
        value: Number(stats.open_purchase_orders),
      },
      {
        title: "تعداد سفارش‌های فروش باز",
        value: Number(stats.open_sales_orders),
      },
      {
        title: "ارزش کل موجودی انبار(میلیون تومان)",
        value: Number(stats.total_inventory_value),
      },
      {
        title: "تعداد کالاهای کمبود موجودی",
        value: Number(stats.low_stock_products),
      },
    ];
  } catch (error) {
    console.error("Failed to fetch dashboard stats:", error);
    throw new Error("Could not fetch dashboard summary stats");
  }
};

export default getDashboardSummaryStats;
