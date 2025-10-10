"use server";
import { supabase } from "@/lib/supabaseClient";

export async function deletePurchaseOrder(orderId) {
  try {
    const { error } = await supabase
      .from("purchase_orders_draft")
      .delete()
      .eq("id", orderId);

    if (error) {
      return { status: 500, message: `خطا در حذف سفارش: ${error.message}` };
    }

    return { status: 200, message: "سفارش با موفقیت حذف شد!" };
  } catch (err) {
    return { status: 500, message: `خطای داخلی: ${err.message}` };
  }
}
