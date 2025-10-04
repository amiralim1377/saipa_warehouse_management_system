import { supabase } from "@/lib/supabaseClient";

export const getTargetProduct = async (id) => {
  try {
    if (!id) throw new Error("شناسه محصول معتبر نیست.");

    const { data, error } = await supabase
      .from("parts_inventory")
      .select(
        `
        *,
        categories (*),
        subcategories (*),
        warehouses (*),
        zones (*),
        aisles (*),
        racks (*),
        shelves (*),
        suppliers (*)
      `
      )
      .eq("id", id)
      .maybeSingle();

    if (error) throw error;
    if (!data) throw new Error("محصولی با این شناسه پیدا نشد.");

    return {
      success: true,
      message: `✅ محصول «${data.part_name}» با موفقیت دریافت شد.`,
      product: data,
    };
  } catch (err) {
    console.error("❌ خطا در دریافت محصول:", err.message);
    return {
      success: false,
      message: "❌ دریافت محصول با خطا مواجه شد.",
      product: null,
    };
  }
};
