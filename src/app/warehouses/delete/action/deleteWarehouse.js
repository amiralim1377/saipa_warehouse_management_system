import { supabase } from "@/lib/supabaseClient";
import { toast } from "react-toastify";

/**
 * @param {string} warehouseId
 * @returns {Promise<void>}
 */
const deleteWarehouse = async (warehouseId) => {
  try {
    const { data: dependentParts, error: partsError } = await supabase
      .from("parts_inventory")
      .select("*")
      .eq("warehouse_id", warehouseId);

    if (partsError) throw partsError;

    if (dependentParts.length > 0) {
      toast.error(
        "این انبار دارای محصولات مرتبط است. لطفاً ابتدا محصولات را حذف کنید."
      );
      return;
    }

    const { error: deleteError } = await supabase
      .from("warehouses")
      .delete()
      .eq("id", warehouseId);

    if (deleteError) throw deleteError;

    toast.success("انبار با موفقیت حذف شد!");
  } catch (err) {
    console.error("حذف انبار با خطا مواجه شد:", err);
    toast.error("حذف انبار با خطا مواجه شد، لطفاً دوباره تلاش کنید.");
  }
};

export default deleteWarehouse;
