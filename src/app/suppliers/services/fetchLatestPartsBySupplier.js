"use server";

import prisma from "@/lib/prismaClient";

export const fetchLatestPartsBySupplier = async () => {
  try {
    const parts = await prisma.$queryRaw`
      SELECT *
      FROM (
        SELECT
          *,
          ROW_NUMBER() OVER (PARTITION BY supplier_name ORDER BY entry_date DESC) AS row_num
        FROM v_parts_inventory
        WHERE supplier_name IS NOT NULL
      ) t
      WHERE row_num <= 6
      ORDER BY supplier_name, entry_date DESC;
    `;

    const serialized = parts.map((p) => ({
      ...p,
      unit_price: p.unit_price ? Number(p.unit_price) : null,
      total_value: p.total_value ? Number(p.total_value) : null,
      stock: p.stock ? Number(p.stock) : null,
    }));

    return {
      data: serialized,
      status: "success",
      message: "Latest parts fetched successfully",
    };
  } catch (error) {
    console.error("Error fetching latest 6 parts by supplier:", error);

    return {
      data: [],
      status: "error",
      message: "Failed to fetch latest parts",
    };
  }
};

export default fetchLatestPartsBySupplier;
