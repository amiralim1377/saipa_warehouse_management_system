// import { supabase } from "@/lib/supabaseClient";

// export const getCategories = async () => {
//   try {
//     const { data, error } = await supabase
//       .from("categories")
//       .select("*")
//       .order("name", { ascending: true });

//     if (error) {
//       return { data: undefined, message: "خطا در دریافت دسته‌بندی‌ها" };
//     }

//     if (!data || data.length === 0) {
//       return { data: undefined, message: "هیچ دسته‌بندی‌ای پیدا نشد" };
//     }

//     return { data, message: null };
//   } catch {
//     return { data: undefined, message: "خطای غیرمنتظره در ارتباط با سرور" };
//   }
// };

"use server";
import prisma from "@/lib/prismaClient";

export const getCategories = async () => {
  try {
    const categories = await prisma.categories.findMany({
      orderBy: { name: "asc" },
    });

    return {
      success: true,
      message: "✅ دسته‌بندی‌ها با موفقیت دریافت شدند.",
      categories,
    };
  } catch (err) {
    console.error("❌ خطا در دریافت دسته‌بندی‌ها:", err);
    return {
      success: false,
      message: "❌ دریافت دسته‌بندی‌ها با خطا مواجه شد.",
      categories: [],
    };
  }
};

export default getCategories;
