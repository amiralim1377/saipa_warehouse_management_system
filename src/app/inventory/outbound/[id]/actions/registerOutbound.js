"use server";

import prisma from "@/lib/prismaClient";

export async function registerOutbound(formData) {
  try {
    const { part_id, order_number, description, customer_id } = formData;
    const quantity = parseInt(formData.quantity, 10);

    if (isNaN(quantity) || quantity <= 0) {
      throw new Error("مقدار تعداد خروجی معتبر نیست");
    }

    // بررسی موجودی فعلی
    const part = await prisma.parts_inventory.findUnique({
      where: { id: part_id },
      select: { stock: true },
    });

    if (!part) throw new Error("قطعه یافت نشد");
    if (quantity > part.stock)
      throw new Error(
        `تعداد خروجی نمی‌تواند بیشتر از موجودی (${part.stock}) باشد.`
      );

    // ثبت رکورد خروج
    const outbound = await prisma.parts_outbound.create({
      data: {
        quantity,
        order_number,
        description,
        customer_id,
        parts_inventory: { connect: { id: part_id } },
      },
    });

    //parts_inventory کاهش موجودی در
    await prisma.parts_inventory.update({
      where: { id: part_id },
      data: {
        stock: { decrement: quantity },
      },
    });

    return {
      success: true,
      message: "خروج کالا با موفقیت ثبت شد ✅",
      data: outbound,
    };
  } catch (err) {
    console.error("❌ خطا در ثبت خروج کالا:", err);
    return {
      success: false,
      message: err.message || "خطای ناشناخته در ثبت خروج کالا",
    };
  }
}
