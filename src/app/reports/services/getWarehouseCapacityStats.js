"use server";

import prisma from "@/lib/prismaClient";

const getWarehouseCapacityStats = async () => {
  try {
    const warehouses = await prisma.warehouses.findMany({
      select: {
        id: true,
        name: true,
        capacity: true,
      },
      orderBy: {
        name: "desc",
      },
    });

    return {
      status: 200,
      data: warehouses,
    };
  } catch (error) {
    console.error("Error fetching warehouse stats:", error);
    return {
      status: 404,
      message: "خطا در دریافت اطلاعات انبارها",
    };
  }
};

export default getWarehouseCapacityStats;
