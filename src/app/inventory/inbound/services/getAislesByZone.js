import { supabase } from "@/lib/supabaseClient";

export const getAislesByZone = async (zoneId) => {
  if (!zoneId) return [];

  try {
    const { data, error } = await supabase
      .from("aisles")
      .select("*")
      .eq("zone_id", zoneId)
      .order("name", { ascending: true });

    if (error) throw error;
    return data;
  } catch (err) {
    console.error("Failed to fetch aisles:", err);
    return [];
  }
};
