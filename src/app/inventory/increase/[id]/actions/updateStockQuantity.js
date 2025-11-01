"use server";

import prisma from "@/lib/prismaClient";

export const updateStockQuantity = async (partId, increaseAmount) => {
  try {
    // بررسی وجود کالا
    const part = await prisma.parts_inventory.findUnique({
      where: { id: partId },
      select: { stock: true },
    });

    if (!part) {
      throw new Error("❌ محصول مورد نظر پیدا نشد.");
    }

    // محاسبه موجودی جدید
    const newStock = (part.stock || 0) + Number(increaseAmount);

    // به‌روزرسانی در پایگاه داده
    const updatedPart = await prisma.parts_inventory.update({
      where: { id: partId },
      data: {
        stock: newStock,
        updated_at: new Date(),
      },
    });

    return {
      success: true,
      message: "موجودی کالا با موفقیت بروزرسانی شد.",
      data: updatedPart,
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
