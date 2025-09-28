import { supabase } from "@/lib/supabaseClient";

export const getShelvesByRack = async (rackId) => {
  if (!rackId) return [];

  try {
    const { data, error } = await supabase
      .from("shelves")
      .select("*")
      .eq("rack_id", rackId)
      .order("name", { ascending: true });

    if (error) throw error;

    return data;
  } catch (err) {
    console.error("Failed to fetch shelves:", err);
    return [];
  }
};
