"use server";

import prisma from "@/lib/prismaClient";

export const getCustomerStats = async () => {
  try {
    const result = await prisma.$queryRaw`
      SELECT public.get_customer_stats_json() AS stats;
    `;

    if (!result || result.length === 0 || !result[0]?.stats) {
      throw new Error("هیچ آماری برای مشتری‌ها موجود نیست.");
    }

    return result[0].stats;
  } catch (error) {
    console.error("Failed to fetch customer stats:", error);
    throw error;
  }
};

export default getCustomerStats;
