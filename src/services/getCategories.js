import { supabase } from "@/lib/supabaseClient";

export const getCategories = async () => {
  try {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("name", { ascending: true });

    if (error) {
      return { data: undefined, message: "خطا در دریافت دسته‌بندی‌ها" };
    }

    if (!data || data.length === 0) {
      return { data: undefined, message: "هیچ دسته‌بندی‌ای پیدا نشد" };
    }

    return { data, message: null };
  } catch {
    return { data: undefined, message: "خطای غیرمنتظره در ارتباط با سرور" };
  }
};
