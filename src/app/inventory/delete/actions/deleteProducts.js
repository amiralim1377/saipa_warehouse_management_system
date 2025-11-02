"use server";

import prisma from "@/lib/prismaClient";

export const deleteProducts = async (productId) => {
  try {
    if (!productId) {
      return {
        success: false,
        message: "شناسه محصول ارسال نشده است.",
      };
    }

    await prisma.parts_inventory.delete({
      where: { id: productId },
    });

    return {
      status: 200,
      message: "محصول با موفقیت حذف شد.",
    };
  } catch (error) {
    console.error("❌ خطا در حذف محصول:", error);

    let errorMessage = "خطا در حذف محصول رخ داد.";

    // خطای خاص Prisma برای وقتی که محصول وجود نداشته باشد
    if (error.code === "P2025") {
      errorMessage = "محصول مورد نظر یافت نشد.";
    }

    return {
      success: false,
      message: errorMessage,
    };
  }
};

export default deleteProducts;
