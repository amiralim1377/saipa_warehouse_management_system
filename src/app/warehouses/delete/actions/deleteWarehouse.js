"use server";
import { supabase } from "@/lib/supabaseClient";

/**
 * @param {string} warehouseId
 * @returns {Promise<{status: "success" | "error", message: string}>}
 */
const deleteWarehouse = async (warehouseId) => {
  try {
    const { data: dependentParts, error: partsError } = await supabase
      .from("parts_inventory")
      .select("*")
      .eq("warehouse_id", warehouseId);

    if (partsError) {
      throw partsError;
    }

    if (dependentParts.length > 0) {
      return {
        status: "error",
        message:
          "این انبار دارای محصولات مرتبط است. لطفاً ابتدا محصولات را حذف کنید.",
      };
    }

    const { error: deleteError } = await supabase
      .from("warehouses")
      .delete()
      .eq("id", warehouseId);

    if (deleteError) {
      throw deleteError;
    }

    return {
      status: "success" | 200,
      message: "انبار با موفقیت حذف شد!",
    };
  } catch (err) {
    console.error("حذف انبار با خطا مواجه شد:", err);
    return {
      status: "error",
      message: "حذف انبار با خطا مواجه شد، لطفاً دوباره تلاش کنید.",
    };
  }
};

export default deleteWarehouse;
