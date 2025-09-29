import { supabase } from "@/lib/supabaseClient";

const getWarehouses = async () => {
  try {
    const { data, error } = await supabase
      .from("warehouses")
      .select("id, name, location, capacity, min_stock, created_at");

    if (error) throw error;

    return data;
  } catch (err) {
    console.error("Failed to fetch warehouses:", err);
    throw err;
  }
};

export default getWarehouses;
