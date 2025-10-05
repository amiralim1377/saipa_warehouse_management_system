import { supabase } from "@/lib/supabaseClient";

export const getRacksByAisle = async (aisleId) => {
  if (!aisleId) return [];

  try {
    const { data, error } = await supabase
      .from("racks")
      .select("*")
      .eq("aisle_id", aisleId)
      .order("name", { ascending: true });

    if (error) throw error;
    return data;
  } catch (err) {
    console.error("Failed to fetch racks:", err);
    return [];
  }
};
