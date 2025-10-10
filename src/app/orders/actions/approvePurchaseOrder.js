"use server";
import { supabase } from "@/lib/supabaseClient";

export async function approvePurchaseOrder(orderId) {
  try {
    const { data: draftData, error: fetchError } = await supabase
      .from("purchase_orders_draft")
      .select("*")
      .eq("id", orderId)
      .single();

    if (fetchError) throw fetchError;
    if (!draftData) throw new Error("سفارشی با این شناسه یافت نشد.");

    const { error: insertError } = await supabase
      .from("purchase_orders")
      .insert([
        {
          id: draftData.id,
          supplier_id: draftData.supplier_id,
          items: draftData.items,
          total_amount: draftData.total_amount,
          status: "confirmed",
          created_at: draftData.created_at,
          description: draftData.description,
        },
      ]);

    if (insertError) throw insertError;

    const { error: deleteError } = await supabase
      .from("purchase_orders_draft")
      .delete()
      .eq("id", orderId);

    if (deleteError) throw deleteError;

    return { status: 200, message: "سفارش با موفقیت تایید شد!" };
  } catch (err) {
    return { status: 500, message: err?.message || "خطای ناشناخته" };
  }
}
