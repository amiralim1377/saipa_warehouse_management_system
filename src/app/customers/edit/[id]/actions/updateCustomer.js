"use server";
import { supabase } from "@/lib/supabaseClient";
import { revalidatePath } from "next/cache";
import { toast } from "react-toastify";

export async function updateCustomer(customerId, data) {
  try {
    if (!customerId) throw new Error("شناسه مشتری معتبر نیست");

    const { error } = await supabase
      .from("customers")
      .update({
        customer_type: data.customer_type,
        first_name: data.first_name,
        last_name: data.last_name,
        national_id: data.national_id,
        company_name: data.company_name,
        company_registration_number: data.company_registration_number,
        phone: data.phone,
        email: data.email,
        province: data.province,
        city: data.city,
        address: data.address,
        postal_code: data.postal_code,
        notes: data.notes,
      })
      .eq("id", customerId);

    if (error) throw error;

    revalidatePath("/customers");
    return true;
  } catch (err) {
    console.error("خطا در بروزرسانی مشتری:", err);
    throw err;
  }
}
