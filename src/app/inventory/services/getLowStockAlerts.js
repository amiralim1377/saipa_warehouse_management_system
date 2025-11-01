// import supabaseServer from "@/lib/supabaseServer";

// export async function getLowStockAlerts() {
//   try {
//     const { data, error } = await supabaseServer.rpc("get_low_stock_alerts");

//     if (error) throw new Error(error.message);

//     return {
//       success: true,
//       message: "هشدار کمبود موجودی دریافت شد",
//       data,
//     };
//   } catch (err) {
//     return {
//       success: false,
//       message: err.message,
//       data: null,
//     };
//   }
// }

"use server";

import prisma from "@/lib/prismaClient";

export async function getLowStockAlerts() {
  try {
    const data = await prisma.$queryRaw`
      SELECT * FROM public.get_low_stock_alerts();
    `;

    const safeData = JSON.parse(JSON.stringify(data));

    return {
      success: true,
      message: "هشدار کمبود موجودی دریافت شد",
      data: safeData,
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
