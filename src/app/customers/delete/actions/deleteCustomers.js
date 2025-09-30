"use server";
import { supabase } from "@/lib/supabaseClient";
import { revalidatePath } from "next/cache";

/**
 * @param {string} customerId
 * @returns {Promise<void>}
 */
const deleteCustomer = async (customerId) => {
  try {
    // const { data: dependentData, error: depError } = await supabase
    //   .from("orders")
    //   .select("*")
    //   .eq("customer_id", customerId);

    // if (depError) throw depError;

    // if (dependentData.length > 0) {
    //   toast.warning(
    //     "این مشتری دارای داده‌های مرتبط است. لطفاً ابتدا داده‌های مرتبط را حذف کنید."
    //   );
    //   return;
    // }

    const { error } = await supabase
      .from("customers")
      .delete()
      .eq("id", customerId);

    if (error) throw error;
    revalidatePath("/customers/delete");

    revalidatePath("/customers");
    return { status: 200, message: "مشتری با موفقیت حذف گردید" };
  } catch (err) {
    console.error("حذف مشتری با خطا مواجه شد:", err);
    return {
      status: 404,
      message: `"حذف مشتری با خطا مواجه شد:", ${err.message}`,
    };
  }
};

export default deleteCustomer;
