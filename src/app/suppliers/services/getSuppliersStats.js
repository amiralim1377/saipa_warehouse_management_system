"use server";

import prisma from "@/lib/prismaClient";

export const getSuppliersStats = async () => {
  try {
    const result =
      await prisma.$queryRaw`SELECT get_suppliers_stats() AS stats;`;

    let stats = result[0].stats;

    if (typeof stats === "string") {
      stats = JSON.parse(stats);
    }

    return stats;
  } catch (error) {
    console.error("Failed to fetch supplier stats:", error);
    throw error;
  }
};

export default getSuppliersStats;
