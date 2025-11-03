// "use server";
// import { supabase } from "@/lib/supabaseClient";

// export const addPart = async (partData) => {
//   try {
//     const { data, error } = await supabase
//       .from("parts_inventory")
//       .insert([partData])
//       .select();

//     if (error) throw new Error(error.message);

//     return data;
//   } catch (err) {
//     console.error("Failed to add part:", err);
//     throw err;
//   }
// };

"use server";
import prisma from "@/lib/prismaClient";

export const addPart = async (partData) => {
  try {
    await prisma.parts_inventory.create({
      data: partData,
    });

    return {
      success: true,
      message: "محصول با موفقیت وارد انبار شد!",
    };
  } catch (err) {
    console.error("Failed to add part:", err);
    return {
      success: false,
      message: err.message || "خطای ناشناخته در ثبت محصول",
    };
  }
};
