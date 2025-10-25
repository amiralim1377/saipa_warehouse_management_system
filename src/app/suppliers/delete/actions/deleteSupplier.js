// "use server";

// import { supabase } from "@/lib/supabaseClient";
// import { revalidatePath } from "next/cache";

// export async function deleteSupplier(supplierId) {
//   try {
//     if (!supplierId) throw new Error("شناسه تأمین‌کننده معتبر نیست");

//     const { error } = await supabase
//       .from("suppliers")
//       .delete()
//       .eq("id", supplierId);

//     if (error) throw error;

//     revalidatePath("/suppliers");

//     return {
//       status: 200,
//       message: "تأمین‌کننده با موفقیت حذف شد",
//     };
//   } catch (err) {
//     console.error("خطا در حذف تأمین‌کننده:", err);
//     return {
//       status: 500,
//       message: `حذف تأمین‌کننده با خطا مواجه شد: ${err.message}`,
//     };
//   }
// }

"use server";

import prisma from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";

export async function deleteSupplier(supplierId) {
  try {
    if (!supplierId) throw new Error("شناسه تأمین‌کننده معتبر نیست");

    await prisma.suppliers.delete({
      where: { id: supplierId },
    });

    revalidatePath("/suppliers");

    return {
      status: 200,
      message: "تأمین‌کننده با موفقیت حذف شد",
    };
  } catch (err) {
    console.error("خطا در حذف تأمین‌کننده:", err);
    return {
      status: 500,
      message: `حذف تأمین‌کننده با خطا مواجه شد: ${err.message}`,
    };
  }
}
