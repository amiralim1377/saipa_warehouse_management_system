// "use server";

// import { supabase } from "@/lib/supabaseClient";

// export default async function getTargetCustomer(customerId) {
//   try {
//     if (!customerId) {
//       throw new Error("شناسه مشتری معتبر نیست.");
//     }

//     const { data: customer, error } = await supabase
//       .from("customers")
//       .select("*")
//       .eq("id", customerId)
//       .single();

//     if (error) throw error;
//     if (!customer) throw new Error("مشتری مورد نظر یافت نشد.");

//     return customer;
//   } catch (error) {
//     console.error("خطا در گرفتن مشتری:", error);
//     throw error;
//   }
// }

"use server";
import prisma from "@/lib/prismaClient";

export default async function getTargetCustomer(customerId) {
  try {
    if (!customerId) {
      throw new Error("شناسه مشتری معتبر نیست.");
    }

    const customer = await prisma.customers.findUnique({
      where: {
        id: customerId,
      },
    });

    if (!customer) throw new Error("مشتری مورد نظر یافت نشد.");

    return customer;
  } catch (error) {
    console.error("خطا در گرفتن مشتری:", error);
    throw error;
  }
}
