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

// "use server";

// import prisma from "@/lib/prismaClient";
// import { revalidatePath } from "next/cache";

// export async function deleteSupplier(supplierId) {
//   try {
//     if (!supplierId) throw new Error("شناسه تأمین‌کننده معتبر نیست");

//     await prisma.suppliers.delete({
//       where: { id: supplierId },
//     });

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
    if (!supplierId) {
      throw new Error("شناسه تأمین‌کننده معتبر نیست");
    }

    // بررسی وابستگی‌ها در سفارش‌ها
    const relatedOrdersCount = await prisma.purchase_orders.count({
      where: { supplier_id: supplierId },
    });

    // بررسی وابستگی‌ها در موجودی قطعات
    const relatedPartsCount = await prisma.parts_inventory.count({
      where: { supplier_id: supplierId },
    });

    // اگر وابستگی وجود داشت، حذف انجام نشود
    if (relatedOrdersCount > 0 || relatedPartsCount > 0) {
      return {
        status: 400,
        message: `امکان حذف تأمین‌کننده وجود ندارد، چون ${
          relatedOrdersCount > 0 ? relatedOrdersCount + " سفارش" : ""
        } ${relatedOrdersCount > 0 && relatedPartsCount > 0 ? " و " : ""} ${
          relatedPartsCount > 0 ? relatedPartsCount + " قطعه" : ""
        } مرتبط با آن ثبت شده است.`,
      };
    }

    // اگر وابستگی وجود نداشت، حذف تأمین‌کننده
    await prisma.suppliers.delete({
      where: { id: supplierId },
    });

    // ری‌ولیدیت مسیر لیست تأمین‌کننده‌ها
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
