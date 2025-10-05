import { supabase } from "@/lib/supabaseClient";

export async function getSearchProducts(filters) {
  const { query, warehouse, zone, aisle, rack, shelf, category, subcategory } =
    filters;

  try {
    const hasFilter =
      query ||
      (warehouse && warehouse !== "all") ||
      (zone && zone !== "all") ||
      (aisle && aisle !== "all") ||
      (rack && rack !== "all") ||
      (shelf && shelf !== "all") ||
      (category && category !== "all") ||
      (subcategory && subcategory !== "all");

    if (!hasFilter) {
      return {
        success: true,
        message:
          "هیچ فیلتری اعمال نشده است. لطفاً حداقل یک فیلتر را انتخاب کنید.",
        data: [],
      };
    }

    // 🔹 ساخت query
    let sb = supabase.from("parts_inventory").select(`
      *,
      warehouse:warehouse_id (
        id,
        name
      )
    `);

    if (query) {
      sb = sb.or(`part_name.ilike.%${query}%,part_code.ilike.%${query}%`);
    }
    if (warehouse && warehouse !== "all") sb = sb.eq("warehouse_id", warehouse);
    if (zone && zone !== "all") sb = sb.eq("zone_id", zone);
    if (aisle && aisle !== "all") sb = sb.eq("aisle_id", aisle);
    if (rack && rack !== "all") sb = sb.eq("rack_id", rack);
    if (shelf && shelf !== "all") sb = sb.eq("shelf_id", shelf);
    if (category && category !== "all") sb = sb.eq("category_id", category);
    if (subcategory && subcategory !== "all")
      sb = sb.eq("subcategory_id", subcategory);

    // 🔹 اجرای query
    const { data, error } = await sb;

    if (error) {
      return {
        success: false,
        message: "خطا در دریافت داده‌ها: " + error.message,
        data: [],
      };
    }

    if (!data || data.length === 0) {
      return {
        success: true,
        message: "هیچ محصولی مطابق فیلترها یافت نشد.",
        data: [],
      };
    }

    // 🔹 اضافه کردن نام انبار از رابطه
    const enrichedData = data.map((d) => ({
      ...d,
      warehouse_name: d.warehouse?.name || "نامشخص",
    }));

    return {
      success: true,
      message: `${enrichedData.length} محصول مطابق فیلترها یافت شد.`,
      data: enrichedData,
    };
  } catch (err) {
    return {
      success: false,
      message: "خطای غیرمنتظره: " + err.message,
      data: [],
    };
  }
}
