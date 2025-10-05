import { supabase } from "@/lib/supabaseClient";

export async function fetchCategories() {
  try {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("name", { ascending: true });

    if (error) {
      return {
        success: false,
        message: "خطا در دریافت دسته‌بندی‌ها",
        categories: undefined,
        error: error.message,
      };
    }

    if (!data || data.length === 0) {
      return {
        success: false,
        message: "هیچ دسته‌بندی‌ای پیدا نشد",
        categories: undefined,
      };
    }

    return {
      success: true,
      message: "لیست دسته‌بندی‌ها با موفقیت دریافت شد",
      categories: data,
    };
  } catch (err) {
    return {
      success: false,
      message: "خطای غیرمنتظره در ارتباط با سرور",
      categories: undefined,
      error: err.message,
    };
  }
}
