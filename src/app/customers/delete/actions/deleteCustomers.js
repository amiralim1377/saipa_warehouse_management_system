// "use server";
// import { supabase } from "@/lib/supabaseClient";
// import { revalidatePath } from "next/cache";

// /**
//  * @param {string} customerId
//  * @returns {Promise<{ status: number; message: string }>}
//  */
// const deleteCustomer = async (customerId) => {
//   try {
//     const { error } = await supabase
//       .from("customers")
//       .delete()
//       .eq("id", customerId);

//     if (error) throw error;

//     revalidatePath("/customers");
//     return {
//       status: 200,
//       message: "مشتری با موفقیت حذف گردید",
//     };
//   } catch (err) {
//     console.error("حذف مشتری با خطا مواجه شد:", err);
//     return {
//       status: 500,
//       message: `حذف مشتری با خطا مواجه شد: ${err.message}`,
//     };
//   }
// };

// export default deleteCustomer;

"use server";
import prisma from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";

/**
 * @param {string} customerId
 * @returns {Promise<{ status: number; message: string }>}
 */
const deleteCustomer = async (customerId) => {
  try {
    await prisma.customers.delete({
      where: {
        id: customerId,
      },
    });

    revalidatePath("/customers");
    return {
      status: 200,
      message: "مشتری با موفقیت حذف گردید",
    };
  } catch (err) {
    console.error("حذف مشتری با خطا مواجه شد:", err);
    return {
      status: 500,
      message: `حذف مشتری با خطا مواجه شد: ${err.message}`,
    };
  }
};

export default deleteCustomer;
