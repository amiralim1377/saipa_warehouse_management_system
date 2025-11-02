"use server";
import prisma from "@/lib/prismaClient";

export async function fetchProducts() {
  try {
    const products = await prisma.parts_inventory.findMany({
      orderBy: { created_at: "desc" },
    });

    const safeProducts = JSON.parse(JSON.stringify(products));

    return {
      success: true,
      data: safeProducts,
      message: "لیست محصولات با موفقیت دریافت شد.",
    };
  } catch (err) {
    console.error("خطا در دریافت محصولات:", err);

    return {
      success: false,
      data: [],
      message: "خطا در دریافت اطلاعات موجودی .",
    };
  }
}

export default fetchProducts;
