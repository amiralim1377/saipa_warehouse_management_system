// app/inventory/actions/fetchProducts.js
import { supabase } from "@/lib/supabaseClient";

export const fetchProducts = async () => {
  try {
    const { data, error } = await supabase
      .from("parts_inventory")
      .select("*")
      .order("entry_date", { ascending: false });

    if (error) throw new Error(error.message);

    return data || [];
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return [];
  }
};
