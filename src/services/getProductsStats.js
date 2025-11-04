"use server";

import prisma from "@/lib/prismaClient";

export async function getProductsStats() {
  try {
    const result = await prisma.$queryRawUnsafe(`
      SELECT * FROM get_parts_inventory_stats();
    `);

    const stats = result?.[0]?.get_parts_inventory_stats
      ? [result[0].get_parts_inventory_stats]
      : result;

    console.log(stats);

    const serialized = stats.map((p) => ({
      ...p,
      total_value: p.total_value ? Number(p.total_value) : null,
      total_stock: p.total_stock ? Number(p.total_stock) : null,
      low_stock_count: p.low_stock_count ? Number(p.low_stock_count) : null,
      total_items: p.total_items ? Number(p.total_items) : null,
    }));

    return {
      success: true,
      message: "آمار موجودی با موفقیت دریافت شد",
      data: serialized,
    };
  } catch (err) {
    console.error("خطا در دریافت آمار موجودی:", err);
    return {
      success: false,
      message: err.message || "خطای ناشناخته",
      data: null,
    };
  }
}

export default getProductsStats;
