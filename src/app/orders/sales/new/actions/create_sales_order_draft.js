"use server";

import { supabase } from "@/lib/supabaseClient";

export async function createSalesOrderDraft(orderData) {
  try {
    const { data, error } = await supabase
      .from("sales_orders_draft")
      .insert([
        {
          customer_id: orderData.customer?.id,
          items: orderData.items,
          total_amount: orderData.items.reduce(
            (sum, item) => sum + item.unit_price * item.quantity,
            0
          ),
        },
      ])
      .select()
      .single();

    if (error) throw new Error(error.message);

    return {
      success: true,
      message: "سفارش به صورت موقت با موفقیت ثبت گردید",
      order: data,
    };
  } catch (err) {
    return {
      success: false,
      message: "خطا در ثبت سفارش موقت",
      error: err.message,
    };
  }
}
