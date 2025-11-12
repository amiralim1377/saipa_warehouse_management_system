"use server";

import prisma from "@/lib/prismaClient";
import { Prisma } from "@prisma/client";

export const updateStockQuantity = async (partId, increaseAmount) => {
  try {
    const part = await prisma.parts_inventory.findUnique({
      where: { id: partId },
      select: { stock: true, total_value: true, unit_price: true },
    });

    if (!part) throw new Error("❌ محصول مورد نظر پیدا نشد.");

    const currentStock =
      part.stock instanceof Prisma.Decimal ? part.stock.toNumber() : part.stock;
    const currentTotal =
      part.total_value instanceof Prisma.Decimal
        ? part.total_value.toNumber()
        : part.total_value || 0;

    const unitPrice =
      part.unit_price instanceof Prisma.Decimal
        ? part.unit_price.toNumber()
        : part.unit_price;

    const qty = Number(increaseAmount);
    if (isNaN(qty)) throw new Error("مقدار افزایش باید عدد باشد");

    const newStock = (currentStock || 0) + qty;
    const newTotal = currentTotal + qty * unitPrice;

    await prisma.parts_inventory.update({
      where: { id: partId },
      data: {
        stock: newStock,
        total_value: newTotal,
        status: "available",
        updated_at: new Date(),
      },
    });

    return {
      success: true,
      message: "موجودی  با موفقیت بروزرسانی شد.",
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
