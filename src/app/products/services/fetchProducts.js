"use server";
import prisma from "@/lib/prismaClient";

export async function fetchProducts(
  page = 1,
  pageSize = 20,
  subcategoryId = null
) {
  try {
    const offset = (page - 1) * pageSize;

    const data = subcategoryId
      ? await prisma.$queryRaw`
          SELECT *
          FROM v_parts_inventory
          WHERE subcategory_id = ${subcategoryId}::uuid
          ORDER BY entry_date DESC
          LIMIT ${pageSize} OFFSET ${offset};
        `
      : await prisma.$queryRaw`
          SELECT *
          FROM v_parts_inventory
          ORDER BY entry_date DESC
          LIMIT ${pageSize} OFFSET ${offset};
        `;

    const totalCountResult = subcategoryId
      ? await prisma.$queryRaw`
          SELECT COUNT(*) AS count
          FROM v_parts_inventory
          WHERE subcategory_id = ${subcategoryId}::uuid;
        `
      : await prisma.$queryRaw`
          SELECT COUNT(*) AS count
          FROM v_parts_inventory;
        `;

    const totalCount = Number(totalCountResult[0].count);
    const totalPages = Math.ceil(totalCount / pageSize);

    const normalizedData = data.map((item) => ({
      ...item,
      unit_price: Number(item.unit_price || 0),
      total_value: Number(item.total_value || 0),
      stock: Number(item.stock || 0),
      min_stock: Number(item.min_stock || 0),
    }));

    return {
      data: normalizedData,
      status: "success",
      totalPages,
      currentPage: page,
      totalCount,
    };
  } catch (err) {
    console.error("❌ Failed to fetch products:", err);
    return { data: [], status: "error", message: err.message };
  }
}
