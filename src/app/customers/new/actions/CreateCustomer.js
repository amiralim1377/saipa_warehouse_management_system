import { supabase } from "@/lib/supabaseClient";

export async function createCustomer(data) {
  try {
    const { error } = await supabase.from("customers").insert([data]);
    if (error) throw error;

    return {
      status: 200,
      message: "مشتری با موفقیت ثبت شد!",
    };
  } catch (err) {
    console.error("خطا در ثبت مشتری:", err);

    return {
      status: 500,
      message: `حذف مشتری با خطا مواجه شد: ${err.message}`,
    };
  }
}
