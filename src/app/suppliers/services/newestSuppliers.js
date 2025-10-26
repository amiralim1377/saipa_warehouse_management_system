"use server";
import prisma from "@/lib/prismaClient";

export const newestSuppliers = async () => {
  try {
    const suppliers = await prisma.suppliers.findMany({
      orderBy: {
        created_at: "desc",
      },
      take: 3,
    });

    const formattedSuppliers = suppliers.map((s) => ({
      ...s,
      lastOrder: s.created_at.toISOString().split("T")[0], // YYYY-MM-DD
      credit_limit: s.credit_limit ? Number(s.credit_limit) : 0,
      created_at: s.created_at ? s.created_at.toISOString() : null,
      updated_at: s.updated_at ? s.updated_at.toISOString() : null,
    }));

    return {
      status: "success",
      message: "جدیدترین تأمین‌کنندگان با موفقیت دریافت شدند",
      data: formattedSuppliers,
    };
  } catch (error) {
    console.error("Failed to fetch newest suppliers:", error);
    return {
      status: "error",
      message: "خطا در دریافت جدیدترین تأمین‌کنندگان",
      data: [],
    };
  }
};

export default newestSuppliers;
