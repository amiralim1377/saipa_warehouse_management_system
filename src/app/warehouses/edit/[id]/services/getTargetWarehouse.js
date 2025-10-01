"use server";

import { supabase } from "@/lib/supabaseClient";

export async function getTargetWarehouse(id) {
  try {
    if (!id) throw new Error("شناسه انبار معتبر نیست");

    const { data, error } = await supabase
      .from("warehouses")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    return {
      status: 200,
      warehouse: data,
      message: "انبار با موفقیت دریافت شد",
    };
  } catch (err) {
    console.error("خطا در دریافت انبار:", err);
    return {
      status: 500,
      warehouse: null,
      message: `خطا در دریافت انبار: ${err.message}`,
    };
  }
}
