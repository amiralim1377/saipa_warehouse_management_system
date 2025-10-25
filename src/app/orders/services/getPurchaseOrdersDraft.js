// "use server";
// import { supabase } from "@/lib/supabaseClient";

// export async function getPurchaseOrdersDraft(limit = 10) {
//   try {
//     const { data, error } = await supabase
//       .from("purchase_orders_with_supplier")
//       .select("*")
//       .order("created_at", { ascending: false })
//       .limit(limit);

//     if (error) {
//       return {
//         data: [],
//         status: "error",
//         message: `خطا در دریافت سفارش‌ها: ${error.message}`,
//       };
//     }

//     return {
//       data,
//       status: "success",
//       message:
//         data && data.length
//           ? "سفارش‌های موقت با موفقیت دریافت شدند"
//           : "هیچ سفارش موقتی یافت نشد",
//     };
//   } catch (err) {
//     console.error("🚨 خطای Supabase:", err.message);
//     return {
//       data: [],
//       status: "error",
//       message: `خطای داخلی: ${err.message}`,
//     };
//   }
// }

"use server";
import prisma from "@/lib/prismaClient";

export async function getPurchaseOrdersDraft(limit = 10) {
  try {
    const data = await prisma.$queryRaw`
      SELECT *
      FROM purchase_orders_with_supplier
      ORDER BY created_at DESC
    `;

    const normalizedData = data.map((order) => ({
      ...order,
      total_amount: Number(order.total_amount),
    }));

    return {
      data: normalizedData,
      status: "success",
      message:
        data && data.length
          ? "سفارش‌های موقت با موفقیت دریافت شدند"
          : "هیچ سفارش موقتی یافت نشد",
    };
  } catch (err) {
    console.error("خطا در دریافت سفارش‌های موقت:", err);
    return {
      data: [],
      status: "error",
      message: `خطای داخلی: ${err.message}`,
    };
  }
}

// okay
// okay
