"use server";

import prisma from "@/lib/prismaClient";

export async function getWarehouseStructureSummary() {
  try {
    const result = await prisma.$queryRawUnsafe(`
      SELECT * FROM get_warehouse_structure_summary();
    `);

    return {
      success: true,
      message: "خلاصه ساختار انبارها با موفقیت دریافت شد",
      data: result,
    };
  } catch (err) {
    console.error("خطا در دریافت ساختار انبار:", err);
    return {
      success: false,
      message: "خطا در دریافت اطلاعات",
      data: null,
    };
  }
}
