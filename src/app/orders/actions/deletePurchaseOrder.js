// "use server";
// import { supabase } from "@/lib/supabaseClient";

// export async function deletePurchaseOrder(orderId) {
//   try {
//     const { error } = await supabase
//       .from("purchase_orders_draft")
//       .delete()
//       .eq("id", orderId);

//     if (error) {
//       return { status: 500, message: `خطا در حذف سفارش: ${error.message}` };
//     }

//     return { status: 200, message: "سفارش با موفقیت حذف شد!" };
//   } catch (err) {
//     return { status: 500, message: `خطای داخلی: ${err.message}` };
//   }
// }

"use server";

import prisma from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";

export async function deletePurchaseOrder(orderId) {
  try {
    if (!orderId) {
      return { status: 400, message: "شناسه سفارش معتبر نیست." };
    }

    await prisma.purchase_orders_draft.delete({
      where: {
        id: orderId,
      },
    });

    revalidatePath("/orders");

    return {
      status: 200,
      message: "سفارش خرید با موفقیت حذف شد!",
    };
  } catch (err) {
    console.error("خطا در حذف سفارش:", err);
    return {
      status: 500,
      message: `خطای داخلی: ${err.message}`,
    };
  }
}

// okay
