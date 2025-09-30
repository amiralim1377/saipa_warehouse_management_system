"use server";
import { supabase } from "@/lib/supabaseClient";

export async function getSuppliers() {
  try {
    const { data, error } = await supabase
      .from("suppliers")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return {
      status: 200,
      suppliers: data,
    };
  } catch (err) {
    console.error("خطا در دریافت تأمین‌کننده‌ها:", err);
    return {
      status: 500,
      message: `دریافت تأمین‌کننده‌ها با خطا مواجه شد: ${err.message}`,
    };
  }
}
