import { supabase } from "@/lib/supabaseClient";

export const getZonesByWarehouse = async (warehouseId) => {
  try {
    const { data, error } = await supabase
      .from("zones")
      .select("*")
      .eq("warehouse_id", warehouseId)
      .order("name", { ascending: true });

    if (error) throw new Error(error.message);
    return data;
  } catch (err) {
    console.error("Error fetching zones:", err);
    return [];
  }
};
