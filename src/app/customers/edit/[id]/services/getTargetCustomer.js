"use server";

import { supabase } from "@/lib/supabaseClient";
import { toast } from "react-toastify";

export default async function getTargetCustomer(customerId) {
  try {
    if (!customerId) {
      throw new Error("شناسه مشتری معتبر نیست.");
    }

    const { data: customer, error } = await supabase
      .from("customers")
      .select("*")
      .eq("id", customerId)
      .single();

    if (error) throw error;
    if (!customer) throw new Error("مشتری مورد نظر یافت نشد.");

    return customer;
  } catch (error) {
    console.error("خطا در گرفتن مشتری:", error);
    toast.error(error.message);
    throw error;
  }
}
