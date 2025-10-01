"use server";

import { supabase } from "@/lib/supabaseClient";

export async function getWarehouses() {
  try {
    const { data, error } = await supabase
      .from("warehouses")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return {
      status: 200,
      warehouses: data,
      message: "لیست انبارها با موفقیت دریافت شد",
    };
  } catch (err) {
    console.error("خطا در دریافت انبارها:", err);
    return {
      status: 500,
      warehouses: [],
      message: `خطا در دریافت انبارها: ${err.message}`,
    };
  }
}
