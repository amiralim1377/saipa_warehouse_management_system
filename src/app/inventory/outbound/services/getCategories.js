// import { supabase } from "@/lib/supabaseClient";

// export const getCategories = async () => {
//   try {
//     const { data, error } = await supabase
//       .from("categories")
//       .select("*")
//       .order("name", { ascending: true });

//     if (error) throw new Error(error.message);

//     return {
//       success: true,
//       message: "✅ دسته‌بندی‌ها با موفقیت دریافت شدند.",
//       categories: data,
//     };
//   } catch (err) {
//     console.error("❌ خطا در دریافت دسته‌بندی‌ها:", err);
//     return {
//       success: false,
//       message: "❌ دریافت دسته‌بندی‌ها با خطا مواجه شد.",
//       categories: [],
//     };
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
