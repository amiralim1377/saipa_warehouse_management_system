"use server";
import { supabase } from "@/lib/supabaseClient";

export async function deleteSalesOrder(orderId) {
  try {
    const { error } = await supabase
      .from("sales_orders_draft")
      .delete()
      .eq("id", orderId);

    if (error) {
      return { status: 500, message: `خطا در حذف سفارش: ${error.message}` };
    }

    return { status: 200, message: "سفارش فروش موقت با موفقیت حذف شد!" };
  } catch (err) {
    return { status: 500, message: `خطای داخلی: ${err.message}` };
  }
}
