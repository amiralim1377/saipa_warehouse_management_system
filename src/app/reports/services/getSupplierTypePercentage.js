"use server";

import prisma from "@/lib/prismaClient";

export const getSupplierTypePercentage = async () => {
  try {
    const totalCount = await prisma.suppliers.count({
      where: { status: true },
    });

    const types = await prisma.suppliers.groupBy({
      by: ["supplier_type"],
      _count: { supplier_type: true },
      where: { status: true },
    });

    const result = types.map((t) => ({
      type_name: t.supplier_type,
      type_count: t._count.supplier_type,
      percentage: totalCount
        ? Number(((t._count.supplier_type / totalCount) * 100).toFixed(2))
        : 0,
    }));

    return result;
  } catch (error) {
    console.error("❌ Error fetching supplier type percentages:", error);
    return [];
  }
};

export default getSupplierTypePercentage;
