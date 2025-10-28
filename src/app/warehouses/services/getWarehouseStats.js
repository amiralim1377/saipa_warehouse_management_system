"use server";

import prisma from "@/lib/prismaClient";

export const getWarehouseStats = async () => {
  try {
    const result = await prisma.$queryRaw`SELECT * FROM get_warehouse_stats()`;

    if (!result || result.length === 0) {
      return {
        totalWarehouses: 0,
        totalCapacity: 0,
        avgCapacity: 0,
        criticalWarehouses: 0,
      };
    }

    const stats = result[0];

    return {
      totalWarehouses: Number(stats.total_warehouses),
      totalCapacity: Number(stats.total_capacity),
      avgCapacity: Math.round(stats.avg_capacity),
      criticalWarehouses: Number(stats.critical_warehouses),
    };
  } catch (error) {
    console.error("Error fetching warehouse stats:", error);
    return {
      totalWarehouses: 0,
      totalCapacity: 0,
      avgCapacity: 0,
      criticalWarehouses: 0,
    };
  }
};

export default getWarehouseStats;
