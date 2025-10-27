// "use server";

// import supabaseServer from "@/lib/supabaseServer";

// export async function getDraftOrdersStats() {
//   try {
//     const { data, error } = await supabaseServer.rpc("get_orders_draft_stats");

//     if (error) {
//       console.error("❌ Supabase RPC error:", error);
//       return {
//         success: false,
//         message:
//           "❌ خطا در دریافت آمار سفارش‌های موقت. لطفاً دوباره تلاش کنید.",
//       };
//     }

//     return {
//       success: true,
//       message: "✅ آمار سفارش‌های موقت با موفقیت دریافت شد.",
//       data: Array.isArray(data) ? (data.length ? data[0] : null) : null,
//     };
//   } catch (err) {
//     console.error("❌ Server Action error:", err);
//     return {
//       success: false,
//       message: "⚠️ خطای داخلی سرور رخ داد. لطفاً بعداً امتحان کنید.",
//     };
//   }
// }

"use server";
import prisma from "@/lib/prismaClient";

export async function getDraftOrdersStats() {
  try {
    const result = await prisma.$queryRaw`
      SELECT * FROM get_orders_draft_stats()
    `;

    const stats = result[0];

    const normalizedStats = {
      total_draft_sales: stats.total_draft_sales
        ? Number(stats.total_draft_sales)
        : 0,
      total_draft_purchase: stats.total_draft_purchase
        ? Number(stats.total_draft_purchase)
        : 0,
      total_draft_sales_count: stats.total_draft_sales_count
        ? Number(stats.total_draft_sales_count)
        : 0,
      total_draft_purchase_count: stats.total_draft_purchase_count
        ? Number(stats.total_draft_purchase_count)
        : 0,
    };

    return {
      success: true,
      message: "✅ آمار سفارش‌های موقت با موفقیت دریافت شد.",
      data: normalizedStats,
    };
  } catch (err) {
    console.error("❌ Server Action error:", err);
    return {
      success: false,
      message: "⚠️ خطای داخلی سرور رخ داد. لطفاً بعداً امتحان کنید.",
      data: null,
    };
  }
}

// okay
// okay
