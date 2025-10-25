// "use server";
// import { supabase } from "@/lib/supabaseClient";

// export async function approvePurchaseOrder(orderId) {
//   try {
//     const { data: draftData, error: fetchError } = await supabase
//       .from("purchase_orders_draft")
//       .select("*")
//       .eq("id", orderId)
//       .single();

//     if (fetchError) throw fetchError;
//     if (!draftData) throw new Error("سفارشی با این شناسه یافت نشد.");

//     const { error: insertError } = await supabase
//       .from("purchase_orders")
//       .insert([
//         {
//           id: draftData.id,
//           supplier_id: draftData.supplier_id,
//           items: draftData.items,
//           total_amount: draftData.total_amount,
//           status: "confirmed",
//           created_at: draftData.created_at,
//           description: draftData.description,
//         },
//       ]);

//     if (insertError) throw insertError;

//     const { error: deleteError } = await supabase
//       .from("purchase_orders_draft")
//       .delete()
//       .eq("id", orderId);

//     if (deleteError) throw deleteError;

//     return { status: 200, message: "سفارش با موفقیت تایید شد!" };
//   } catch (err) {
//     return { status: 500, message: err?.message || "خطای ناشناخته" };
//   }
// }

"use server";

import prisma from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";

export async function approvePurchaseOrder(orderId) {
  try {
    if (!orderId) {
      return { status: 400, message: "شناسه سفارش معتبر نیست." };
    }

    // دریافت سفارش موقت
    const draftOrder = await prisma.purchase_orders_draft.findUnique({
      where: { id: orderId },
    });

    if (!draftOrder) {
      return { status: 404, message: "سفارشی با این شناسه یافت نشد." };
    }

    // تراکنش: اضافه کردن به جدول اصلی و حذف سفارش موقت
    await prisma.$transaction([
      prisma.purchase_orders.create({
        data: {
          id: draftOrder.id,
          supplier_id: draftOrder.supplier_id,
          items: draftOrder.items,
          total_amount: draftOrder.total_amount,
          status: "confirmed",
          created_at: draftOrder.created_at,
          description: draftOrder.description,
        },
      }),
      prisma.purchase_orders_draft.delete({
        where: { id: orderId },
      }),
    ]);

    revalidatePath("/orders");

    return { status: 200, message: "سفارش با موفقیت تایید شد!" };
  } catch (err) {
    console.error("خطا در تایید سفارش:", err);
    return { status: 500, message: err?.message || "خطای ناشناخته" };
  }
}

// okay
