"use server";

import supabaseServer from "@/lib/supabaseServer";

export async function getConfirmedOrdersStats() {
  try {
    const { data, error } = await supabaseServer.rpc("get_orders_stats");

    if (error) {
      console.error("❌ Supabase RPC error:", error);
      return {
        success: false,
        message: "❌ خطا در دریافت آمار سفارش‌ها. لطفاً دوباره تلاش کنید.",
        data: null,
      };
    }

    return {
      success: true,
      message: "✅ آمار سفارش‌ها دریافت شد.",
      data,
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
