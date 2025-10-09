import { supabase } from "@/lib/supabaseClient";

export async function getSalesOrdersDraft() {
  try {
    const { data, error } = await supabase
      .from("sales_orders_with_customer")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(10);

    if (error) {
      return {
        data: [],
        status: "error",
        message: `خطا در دریافت سفارش‌ها: ${error.message}`,
      };
    }

    return {
      data,
      status: "success",
      message:
        data && data.length
          ? "سفارش‌ها با موفقیت دریافت شدند"
          : "هیچ سفارشی یافت نشد",
    };
  } catch (err) {
    console.error("🚨 خطای Supabase:", err.message);
    return {
      data: [],
      status: "error",
      message: `خطای داخلی: ${err.message}`,
    };
  }
}
