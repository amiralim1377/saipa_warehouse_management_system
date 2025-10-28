"use server";

import prisma from "@/lib/prismaClient";

export async function getCustomers() {
  try {
    const customers = await prisma.customers.findMany({
      orderBy: { id: "desc" },
    });

    return customers;
  } catch (error) {
    console.error("❌ خطا در گرفتن مشتری‌ها:", error);
    throw new Error("مشکلی در واکشی مشتری‌ها به وجود آمد");
  }
}

export default getCustomers;
