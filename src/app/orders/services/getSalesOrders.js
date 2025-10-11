"use server";
import { supabase } from "@/lib/supabaseClient";

export async function getSalesOrders() {
  try {
    const { data, error } = await supabase
      .from("sales_orders_view")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      return {
        status: 500,
        message: `خطا در دریافت سفارش‌ها: ${error.message}`,
        data: [],
      };
    }

    return { status: 200, message: "سفارش‌ها با موفقیت دریافت شدند.", data };
  } catch (err) {
    return { status: 500, message: `خطای داخلی: ${err.message}`, data: [] };
  }
}
