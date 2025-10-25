// "use server";

// import { supabase } from "@/lib/supabaseClient";

// export async function getTargetSupplier(supplierId) {
//   try {
//     if (!supplierId) throw new Error("شناسه تأمین‌کننده معتبر نیست");

//     const { data, error } = await supabase
//       .from("suppliers")
//       .select("*")
//       .eq("id", supplierId)
//       .single();

//     if (error) throw error;

//     return {
//       status: 200,
//       supplier: data,
//       message: "تأمین‌کننده با موفقیت دریافت شد",
//     };
//   } catch (err) {
//     console.error("خطا در دریافت تأمین‌کننده:", err);
//     return {
//       status: 500,
//       supplier: null,
//       message: `دریافت تأمین‌کننده با خطا مواجه شد: ${err.message}`,
//     };
//   }
// }

"use server";

import prisma from "@/lib/prismaClient";

export async function getTargetSupplier(supplierId) {
  try {
    if (!supplierId) throw new Error("شناسه تأمین‌کننده معتبر نیست");

    const supplier = await prisma.suppliers.findUnique({
      where: { id: supplierId },
    });

    if (!supplier) throw new Error("تأمین‌کننده یافت نشد");

    const normalizedSupplier = {
      ...supplier,
      credit_limit: supplier.credit_limit ? Number(supplier.credit_limit) : 0,
    };

    return {
      status: 200,
      supplier: normalizedSupplier,
      message: "تأمین‌کننده با موفقیت دریافت شد",
    };
  } catch (err) {
    console.error("خطا در دریافت تأمین‌کننده:", err);
    return {
      status: 500,
      supplier: null,
      message: `دریافت تأمین‌کننده با خطا مواجه شد: ${err.message}`,
    };
  }
}
