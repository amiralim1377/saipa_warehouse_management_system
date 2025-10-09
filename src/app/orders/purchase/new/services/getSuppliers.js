import { supabase } from "@/lib/supabaseClient";

export async function getSuppliers() {
  try {
    const { data, error } = await supabase
      .from("suppliers")
      .select("*")
      .match({ status: true })
      .order("name", { ascending: true });

    if (error) {
      return {
        data: [],
        status: "error",
        message: `خطا در دریافت تامین‌کننده‌ها: ${error.message}`,
      };
    }

    return {
      data,
      status: "success",
      message:
        data && data.length
          ? "تامین‌کننده‌ها با موفقیت دریافت شدند"
          : "هیچ تامین‌کننده فعالی یافت نشد",
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
