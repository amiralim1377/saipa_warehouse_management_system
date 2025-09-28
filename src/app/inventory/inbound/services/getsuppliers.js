import { supabase } from "@/lib/supabaseClient";

export const getSuppliers = async () => {
  try {
    const { data, error } = await supabase
      .from("suppliers")
      .select("*")
      .match({ status: true })
      .order("name", { ascending: true });

    if (error) throw new Error(error.message);
    return data;
  } catch (err) {
    console.error("Unexpected error:", err);
    return [];
  }
};
