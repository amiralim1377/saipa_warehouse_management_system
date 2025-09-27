import { supabase } from "@/lib/supabaseClient";

export const getSubcategories = async (categoryId) => {
  try {
    const { data, error } = await supabase
      .from("subcategories")
      .select("*")
      .eq("category_id", categoryId)
      .order("name", { ascending: true });

    if (error) throw new Error(error.message);
    return data;
  } catch (err) {
    console.error("Unexpected error:", err);
    return [];
  }
};
