"use server";

import { supabase } from "@/lib/supabaseClient";

export async function fetchProducts() {
  try {
    const { data, error } = await supabase
      .from("parts_inventory")
      .select("*")
      .order("entry_date", { ascending: false });

    if (error) throw new Error(error.message);

    return { data, status: "success" };
  } catch (err) {
    console.error("❌ Failed to fetch products:", err);
    return { data: [], status: "error", message: err.message };
  }
}
