"use server";

import supabaseServer from "@/lib/supabaseServer";

export async function getDraftOrdersStats() {
  try {
    const { data, error } = await supabaseServer.rpc("get_orders_draft_stats");

    if (error) {
      console.error("❌ Supabase RPC error:", error);
      return {
        success: false,
        message:
          "❌ خطا در دریافت آمار سفارش‌های موقت. لطفاً دوباره تلاش کنید.",
      };
    }

    return {
      success: true,
      message: "✅ آمار سفارش‌های موقت با موفقیت دریافت شد.",
      data: Array.isArray(data) ? (data.length ? data[0] : null) : null,
    };
  } catch (err) {
    console.error("❌ Server Action error:", err);
    return {
      success: false,
      message: "⚠️ خطای داخلی سرور رخ داد. لطفاً بعداً امتحان کنید.",
    };
  }
}
