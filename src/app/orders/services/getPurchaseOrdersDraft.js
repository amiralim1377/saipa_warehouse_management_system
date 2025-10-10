"use server";
import { supabase } from "@/lib/supabaseClient";

export async function getPurchaseOrdersDraft(limit = 10) {
  try {
    const { data, error } = await supabase
      .from("purchase_orders_with_supplier")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) {
      return {
        data: [],
        status: "error",
        message: `خطا در دریافت سفارش‌ها: ${error.message}`,
      };
    }

    return {
      data,
      status: "success",
      message:
        data && data.length
          ? "سفارش‌های موقت با موفقیت دریافت شدند"
          : "هیچ سفارش موقتی یافت نشد",
    };
  } catch (err) {
    console.error("🚨 خطای Supabase:", err.message);
    return {
      data: [],
      status: "error",
      message: `خطای داخلی: ${err.message}`,
    };
  }
}
