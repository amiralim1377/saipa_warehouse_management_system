"use server";
import { supabase } from "@/lib/supabaseClient";

export const addPart = async (partData) => {
  try {
    const { data, error } = await supabase
      .from("parts_inventory")
      .insert([partData])
      .select();

    if (error) throw new Error(error.message);

    return data;
  } catch (err) {
    console.error("Failed to add part:", err);
    throw err;
  }
};
