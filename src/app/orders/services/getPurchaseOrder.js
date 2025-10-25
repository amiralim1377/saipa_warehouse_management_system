// "use server";
// import { supabase } from "@/lib/supabaseClient";

// export async function getPurchaseOrders() {
//   try {
//     const { data, error } = await supabase
//       .from("purchase_orders_confirmed_with_supplier")
//       .select("*")
//       .order("created_at", { ascending: false });
//     if (error) {
//       return {
//         status: 500,
//         message: `خطا در دریافت سفارش‌ها: ${error.message}`,
//         data: [],
//       };
//     }

//     return { status: 200, message: "سفارش‌ها دریافت شد.", data };
//   } catch (err) {
//     return { status: 500, message: `خطای داخلی: ${err.message}`, data: [] };
//   }
// }

"use server";
import prisma from "@/lib/prismaClient";

export async function getPurchaseOrders() {
  try {
    const data = await prisma.$queryRaw`
      SELECT *
      FROM purchase_orders_confirmed_with_supplier
      ORDER BY created_at DESC
    `;

    const normalizedData = data.map((order) => ({
      ...order,
      total_amount: Number(order.total_amount),
    }));

    return {
      status: 200,
      message: "سفارش‌ها دریافت شد.",
      data: normalizedData,
    };
  } catch (err) {
    console.error("خطا در دریافت سفارش‌ها:", err);
    return { status: 500, message: `خطای داخلی: ${err.message}`, data: [] };
  }
}

// okay
// okay
