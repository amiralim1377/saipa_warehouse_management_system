// "use server";

// import { supabase } from "@/lib/supabaseClient";

// export async function createCustomer(data) {
//   try {
//     const { error } = await supabase.from("customers").insert([data]);
//     if (error) throw error;

//     return {
//       status: "success",
//       message: "مشتری با موفقیت ثبت شد!",
//     };
//   } catch (err) {
//     console.error("❌ خطا در ثبت مشتری:", err);

//     return {
//       status: "error",
//       message: `ثبت مشتری با خطا مواجه شد: ${err.message}`,
//     };
//   }
// }

"use server";

import prisma from "@/lib/prismaClient";

export async function createCustomer(data) {
  try {
    await prisma.customers.create({
      data,
    });

    return {
      status: 200,
      message: "مشتری با موفقیت ثبت شد!",
    };
  } catch (err) {
    console.error("❌ خطا در ثبت مشتری:", err);

    return {
      status: 404,
      message: `ثبت مشتری با خطا مواجه شد: ${err.message}`,
    };
  }
}
