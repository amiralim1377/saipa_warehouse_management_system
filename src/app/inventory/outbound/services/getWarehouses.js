// import { supabase } from "@/lib/supabaseClient";

// const getWarehouses = async () => {
//   try {
//     const { data, error } = await supabase
//       .from("warehouses")
//       .select("*")
//       .order("name", { ascending: true });

//     if (error) {
//       return {
//         success: false,
//         message: `خطا در دریافت لیست انبارها: ${error.message}`,
//         warehouses: undefined,
//       };
//     }

//     if (!data || data.length === 0) {
//       return {
//         success: false,
//         message: "هیچ انباری ثبت نشده است ❌",
//         warehouses: [],
//       };
//     }

//     return {
//       success: true,
//       message: "لیست انبارها با موفقیت دریافت شد ✅",
//       warehouses: data,
//     };
//   } catch (err) {
//     console.error("Unexpected error:", err);
//     return {
//       success: false,
//       message: "خطای غیرمنتظره در دریافت انبارها ❌",
//       warehouses: undefined,
//     };
//   }
// };

// export default getWarehouses;

"use server";
import prisma from "@/lib/prismaClient";

const getWarehouses = async () => {
  try {
    const warehouses = await prisma.warehouses.findMany({
      orderBy: { name: "asc" },
    });

    if (!warehouses || warehouses.length === 0) {
      return {
        success: false,
        message: "هیچ انباری ثبت نشده است ❌",
        warehouses: [],
      };
    }

    return {
      success: true,
      message: "لیست انبارها با موفقیت دریافت شد ✅",
      warehouses,
    };
  } catch (err) {
    console.error("Unexpected error:", err);
    return {
      success: false,
      message: "خطای غیرمنتظره در دریافت انبارها ❌",
      warehouses: undefined,
    };
  }
};

export default getWarehouses;
