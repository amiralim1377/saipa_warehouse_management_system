// "use server";
// import { supabase } from "@/lib/supabaseClient";

// export async function getSuppliers() {
//   try {
//     const { data, error } = await supabase
//       .from("suppliers")
//       .select("*")
//       .order("created_at", { ascending: false });

//     if (error) throw error;

//     return {
//       status: 200,
//       suppliers: data,
//     };
//   } catch (err) {
//     console.error("خطا در دریافت تأمین‌کننده‌ها:", err);
//     return {
//       status: 500,
//       message: `دریافت تأمین‌کننده‌ها با خطا مواجه شد: ${err.message}`,
//     };
//   }
// }

"use server";
import prisma from "@/lib/prismaClient";

export async function getSuppliers() {
  try {
    const suppliers = await prisma.suppliers.findMany({
      orderBy: { created_at: "desc" },
    });

    const normalizedSuppliers = suppliers.map((s) => ({
      ...s,
      credit_limit: s.credit_limit ? Number(s.credit_limit) : 0,
      status: Boolean(s.status),
    }));

    return {
      status: 200,
      suppliers: normalizedSuppliers,
    };
  } catch (err) {
    console.error("خطا در دریافت تأمین‌کننده‌ها:", err);
    return {
      status: 500,
      message: `دریافت تأمین‌کننده‌ها با خطا مواجه شد: ${err.message}`,
    };
  }
}
