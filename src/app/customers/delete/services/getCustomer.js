// import { supabase } from "@/lib/supabaseClient";
// export async function getCustomers() {
//   try {
//     const { data, error } = await supabase.from("customers").select("*");

//     if (error) {
//       throw new Error(error.message);
//     }

//     return data;
//   } catch (err) {
//     console.error("❌ خطا در گرفتن لیست مشتری‌ها:", err.message);
//     throw err;
//   }
// }

import prisma from "@/lib/prismaClient";

export async function getCustomers() {
  try {
    const data = await prisma.customers.findMany();
    return data;
  } catch (err) {
    console.error("❌ خطا در گرفتن لیست مشتری‌ها:", err.message);
    throw err;
  }
}
