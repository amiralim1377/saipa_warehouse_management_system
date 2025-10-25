// "use server";

// import supabaseServer from "@/lib/supabaseServer";

// export async function getConfirmedOrdersStats() {
//   try {
//     const { data, error } = await supabaseServer.rpc("get_orders_stats");

//     if (error) {
//       console.error("❌ Supabase RPC error:", error);
//       return {
//         success: false,
//         message: "❌ خطا در دریافت آمار سفارش‌ها. لطفاً دوباره تلاش کنید.",
//         data: null,
//       };
//     }

//     return {
//       success: true,
//       message: "✅ آمار سفارش‌ها دریافت شد.",
//       data,
//     };
//   } catch (err) {
//     console.error("❌ Server Action error:", err);
//     return {
//       success: false,
//       message: "⚠️ خطای داخلی سرور رخ داد. لطفاً بعداً تلاش کنید.",
//       data: null,
//     };
//   }
// }

"use server";
import prisma from "@/lib/prismaClient";

export async function getConfirmedOrdersStats() {
  try {
    const result = await prisma.$queryRaw`
      SELECT * FROM get_orders_stats()
    `;

    const statsRow = result[0] || {};
    const stats = statsRow.get_orders_stats || {};

    const normalizedStats = {
      total_purchase_amount: stats.total_purchase_amount
        ? Number(stats.total_purchase_amount)
        : 0,
      total_sales_amount: stats.total_sales_amount
        ? Number(stats.total_sales_amount)
        : 0,
      total_purchase_orders: stats.total_purchase_orders || 0,
      total_sales_orders: stats.total_sales_orders || 0,
    };

    return {
      success: true,
      message: "✅ آمار سفارش‌ها دریافت شد.",
      data: normalizedStats,
    };
  } catch (err) {
    console.error("❌ Server Action error:", err);
    return {
      success: false,
      message: "⚠️ خطای داخلی سرور رخ داد. لطفاً بعداً تلاش کنید.",
      data: null,
    };
  }
}

// okay
// okay
