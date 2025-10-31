"use server";
import prisma from "@/lib/prismaClient";

export async function getLowStockAlerts() {
  try {
    const data = await prisma.$queryRaw`
      SELECT * FROM public.get_low_stock_alerts();
    `;

    return {
      success: true,
      message: "هشدار کمبود موجودی دریافت شد",
      data,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: err.message,
      data: null,
    };
  }
}

export default getLowStockAlerts;
