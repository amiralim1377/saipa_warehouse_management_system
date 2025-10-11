"use server";
import { supabase } from "@/lib/supabaseClient";

export async function getPurchaseOrders() {
  try {
    const { data, error } = await supabase
      .from("purchase_orders_confirmed_with_supplier")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      return {
        status: 500,
        message: `خطا در دریافت سفارش‌ها: ${error.message}`,
        data: [],
      };
    }

    return { status: 200, message: "سفارش‌ها دریافت شد.", data };
  } catch (err) {
    return { status: 500, message: `خطای داخلی: ${err.message}`, data: [] };
  }
}
