"use server";

import prisma from "@/lib/prismaClient";

export const fetchCustomers = async () => {
  try {
    const customers = await prisma.customers.findMany({
      orderBy: {
        created_at: "desc",
      },
    });

    const safeData = JSON.parse(JSON.stringify(customers));

    return {
      success: true,
      message: "لیست مشتریان با موفقیت دریافت شد.",
      data: safeData,
    };
  } catch (error) {
    console.error("❌ خطا در دریافت مشتریان:", error);
    return {
      success: false,
      message: "خطا در دریافت لیست مشتریان.",
      data: [],
    };
  }
};

export default fetchCustomers;
