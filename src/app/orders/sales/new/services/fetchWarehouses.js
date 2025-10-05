import { supabase } from "@/lib/supabaseClient";

export async function fetchWarehouses() {
  try {
    const { data, error } = await supabase.from("warehouses").select("*");

    if (error) throw new Error(error.message);

    return {
      success: true,
      message: "✅ لیست انبارها با موفقیت دریافت شد",
      warehouses: data,
    };
  } catch (err) {
    console.error("❌ خطا در گرفتن لیست انبارها:", err.message);

    return {
      success: false,
      message: "❌ خطا در دریافت لیست انبارها",
      warehouses: undefined,
      error: err.message,
    };
  }
}
