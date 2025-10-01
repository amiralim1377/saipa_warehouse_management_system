import { supabase } from "@/lib/supabaseClient";

const getWarehouses = async () => {
  try {
    const { data, error } = await supabase
      .from("warehouses")
      .select("*")
      .order("name", { ascending: true });

    if (error) {
      return {
        success: false,
        message: `خطا در دریافت لیست انبارها: ${error.message}`,
        warehouses: [],
      };
    }

    return {
      success: true,
      message: "لیست انبارها با موفقیت دریافت شد ✅",
      warehouses: data ?? [],
    };
  } catch (err) {
    console.error("Unexpected error:", err);
    return {
      success: false,
      message: "خطای غیرمنتظره در دریافت انبارها ❌",
      warehouses: [],
    };
  }
};

export default getWarehouses;
