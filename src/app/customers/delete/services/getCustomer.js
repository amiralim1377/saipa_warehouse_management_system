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

// import prisma from "@/lib/prismaClient";

// export async function getCustomers() {
//   try {
//     const data = await prisma.customers.findMany();
//     return data;
//   } catch (err) {
//     console.error("❌ خطا در گرفتن لیست مشتری‌ها:", err.message);
//     throw err;
//   }
// }

import prisma from "@/lib/prismaClient";

export async function getCustomers() {
  try {
    const customers = await prisma.customers.findMany({
      orderBy: { created_at: "desc" },
    });
    return customers;
  } catch (error) {
    console.error("❌ خطا در گرفتن لیست مشتری‌ها:", error);
    throw new Error("دریافت لیست مشتری‌ها با خطا مواجه شد");
  } finally {
    await prisma.$disconnect();
  }
}
