"use server";

import prisma from "@/lib/prismaClient";
import { Prisma } from "@prisma/client";

export const updateStockQuantity = async (partId, increaseAmount) => {
  try {
    const part = await prisma.parts_inventory.findUnique({
      where: { id: partId },
      select: { stock: true },
    });

    if (!part) throw new Error("❌ محصول مورد نظر پیدا نشد.");

    const currentStock =
      part.stock instanceof Prisma.Decimal ? part.stock.toNumber() : part.stock;

    const qty = Number(increaseAmount);
    if (isNaN(qty)) throw new Error("مقدار افزایش باید عدد باشد");

    const newStock = (currentStock || 0) + qty;

    await prisma.parts_inventory.update({
      where: { id: partId },
      data: { stock: newStock, status: "available", updated_at: new Date() },
    });

    return {
      success: true,
      message: "موجودی کالا با موفقیت بروزرسانی شد.",
    };
  } catch (error) {
    console.error("❌ خطا در بروزرسانی موجودی:", error);
    return {
      success: false,
      message:
        error.message || "⚠️ در فرآیند بروزرسانی موجودی خطایی رخ داده است.",
    };
  }
};

export default updateStockQuantity;
