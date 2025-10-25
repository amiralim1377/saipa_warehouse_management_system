// "use server";

// import { supabase } from "@/lib/supabaseClient";
// import { revalidatePath } from "next/cache";

// export async function updateSupplier(id, data) {
//   try {
//     if (!id) throw new Error("شناسه تأمین‌کننده معتبر نیست");

//     const { id: _, created_at, updated_at, ...updateData } = data;

//     const { error } = await supabase
//       .from("suppliers")
//       .update({
//         ...updateData,
//         updated_at: new Date().toISOString(),
//       })
//       .eq("id", id);

//     if (error) throw error;

//     revalidatePath("/suppliers/edit");
//     revalidatePath("/suppliers");

//     return {
//       status: 200,
//       message: "تأمین‌کننده با موفقیت ویرایش شد",
//     };
//   } catch (err) {
//     console.error("خطا در ویرایش تأمین‌کننده:", err);
//     return {
//       status: 500,
//       message: `خطا در ویرایش تأمین‌کننده: ${err.message}`,
//     };
//   }
// }

"use server";

import prisma from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";

export async function updateSupplier(id, data) {
  try {
    if (!id) throw new Error("شناسه تأمین‌کننده معتبر نیست");

    const { id: _, created_at, updated_at, ...updateData } = data;

    if (updateData.credit_limit !== undefined) {
      updateData.credit_limit = Number(updateData.credit_limit);
    }

    await prisma.suppliers.update({
      where: { id },
      data: {
        ...updateData,
        updated_at: new Date(),
        status: updateData.status === "true" ? true : false,
      },
    });

    revalidatePath("/suppliers/edit");
    revalidatePath("/suppliers");

    return {
      status: 200,
      message: "تأمین‌کننده با موفقیت ویرایش شد",
    };
  } catch (err) {
    console.error("خطا در ویرایش تأمین‌کننده:", err);
    return {
      status: 500,
      message: `خطا در ویرایش تأمین‌کننده: ${err.message}`,
    };
  }
}
