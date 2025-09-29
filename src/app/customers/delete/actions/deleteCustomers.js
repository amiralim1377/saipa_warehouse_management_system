import { supabase } from "@/lib/supabaseClient";
import { toast } from "react-toastify";

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

    toast.success("مشتری با موفقیت حذف شد!");
  } catch (err) {
    console.error("حذف مشتری با خطا مواجه شد:", err);
    toast.error("خطا در حذف مشتری، لطفاً دوباره تلاش کنید.");
    toast.error(`حذف مشتری با خطا مواجه شد:", ${err.message}`);
  }
};

export default deleteCustomer;
