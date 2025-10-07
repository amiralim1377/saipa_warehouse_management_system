import { supabase } from "@/lib/supabaseClient";

export default async function fetchCustomers() {
  try {
    const { data, error } = await supabase
      .from("customers")
      .select("*")
      .order("first_name", { ascending: true });

    if (error) throw error;

    return { success: true, message: "Customers fetched successfully", data };
  } catch (err) {
    return { success: false, message: err.message, data: undefined };
  }
}
