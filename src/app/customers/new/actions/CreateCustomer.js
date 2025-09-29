import { supabase } from "@/lib/supabaseClient";
import { toast } from "react-toastify";

export async function createCustomer(data) {
  try {
    const { error } = await supabase.from("customers").insert([data]);
    if (error) throw error;

    toast.success("مشتری با موفقیت ثبت شد!");
    return { success: true };
  } catch (err) {
    console.error("خطا در ثبت مشتری:", err);
    toast.error("خطا در ثبت مشتری، لطفاً دوباره تلاش کنید.");
    toast.error(`"خطا در ثبت مشتری:", ${err.message}`);

    return { success: false, error: err };
  }
}
