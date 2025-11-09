"use server";

import prisma from "@/lib/prismaClient";

export const getCustomerTypePercentage = async () => {
  try {
    const totalCount = await prisma.customers.count();

    const types = await prisma.customers.groupBy({
      by: ["customer_type"],
      _count: { customer_type: true },
    });

    const result = types.map((t) => ({
      type_name: t.customer_type,
      type_count: t._count.customer_type,
      percentage: totalCount
        ? Number(((t._count.customer_type / totalCount) * 100).toFixed(2))
        : 0,
    }));

    return result;
  } catch (error) {
    console.error("❌ Error fetching customer type percentages:", error);
    return [];
  }
};

export default getCustomerTypePercentage;
