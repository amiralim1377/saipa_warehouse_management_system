"use server";
import { supabase } from "@/lib/supabaseClient";

export async function createPurchaseOrderDraft(data) {
  try {
    const { supplier, orderDate, description, items } = data;

    if (!supplier) {
      return {
        success: false,
        message: "تامین‌کننده انتخاب نشده است.",
        data: null,
      };
    }
    if (!orderDate) {
      return {
        success: false,
        message: "تاریخ سفارش وارد نشده است.",
        data: null,
      };
    }
    if (!items || !items.length) {
      return {
        success: false,
        message: "هیچ آیتمی اضافه نشده است.",
        data: null,
      };
    }

    const totalAmount = items.reduce(
      (acc, item) =>
        acc + (Number(item.quantity) || 0) * (Number(item.unitPrice) || 0),
      0
    );

    const { data: result, error } = await supabase
      .from("purchase_orders_draft")
      .insert([
        {
          supplier_id: supplier,
          created_at: orderDate,
          description: description || "",
          items,
          total_amount: totalAmount,
          status: "draft",
        },
      ])
      .select()
      .single();

    if (error) {
      return { success: false, message: error.message, data: null };
    }

    return {
      success: true,
      message: "سفارش موقت با موفقیت ثبت شد.",
      data: result,
    };
  } catch (err) {
    return {
      success: false,
      message: err.message || "خطای ناشناخته",
      data: null,
    };
  }
}
