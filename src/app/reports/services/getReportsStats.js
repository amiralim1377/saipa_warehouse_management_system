"use server";

import prisma from "@/lib/prismaClient";

export const getReportsStats = async () => {
  try {
    const result = await prisma.$queryRaw`
      SELECT * FROM get_reports_stats();
    `;

    const stats = result[0];

    return {
      total_parts: Number(stats.total_parts),
      low_stock_items: Number(stats.low_stock_items),
      total_inventory_value: Number(stats.total_inventory_value),
      total_suppliers: Number(stats.total_suppliers),
    };
  } catch (error) {
    console.error("❌ Error fetching reports stats:", error);
    return {
      total_parts: 0,
      low_stock_items: 0,
      total_inventory_value: 0,
      total_suppliers: 0,
    };
  }
};

export default getReportsStats;
