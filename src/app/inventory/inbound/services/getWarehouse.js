import { supabase } from "@/lib/supabaseClient";

export const getWarehouse = async () => {
  try {
    const { data, error } = await supabase
      .from("warehouses")
      .select("*")
      .order("name", { ascending: true });

    if (error) throw new Error(error.message);
    return data;
  } catch (err) {
    console.error("Unexpected error:", err);
    return [];
  }
};
