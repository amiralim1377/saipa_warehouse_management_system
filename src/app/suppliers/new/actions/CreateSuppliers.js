// "use server";
// import { supabase } from "@/lib/supabaseClient";
// import { revalidatePath } from "next/cache";

// export async function createSupplier(data) {
//   try {
//     const { error } = await supabase.from("suppliers").insert([data]);

//     if (error) throw error;

//     revalidatePath("/suppliers");

//     return {
//       status: 201,
//       message: "تأمین‌کننده با موفقیت ایجاد شد",
//     };
//   } catch (err) {
//     console.error("خطا در ایجاد تأمین‌کننده:", err);
//     return {
//       status: 500,
//       message: `ایجاد تأمین‌کننده با خطا مواجه شد: ${err.message}`,
//     };
//   }
// }

"use server";
import prisma from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";

export async function createSupplier(dataArray) {
  try {
    await prisma.suppliers.createMany({
      data: dataArray,
    });

    revalidatePath("/suppliers");

    return {
      status: 201,
      message: "تأمین‌کننده(ها) با موفقیت ایجاد شدند",
    };
  } catch (err) {
    console.error("خطا در ایجاد تأمین‌کننده:", err);
    return {
      status: 500,
      message: `ایجاد تأمین‌کننده(ها) با خطا مواجه شد: ${err.message}`,
    };
  }
}
