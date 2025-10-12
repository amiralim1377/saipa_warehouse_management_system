import supabaseServer from "@/lib/supabaseServer";

export async function getInventoryStats() {
  try {
    const { data, error } = await supabaseServer.rpc(
      "get_parts_inventory_stats"
    );

    if (error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }

    return {
      success: true,
      message: "آمار موجودی با موفقیت دریافت شد",
      data: data,
    };
  } catch (err) {
    console.error("خطا در دریافت آمار موجودی:", err);
    return {
      success: false,
      message: err.message || "خطای ناشناخته",
      data: null,
    };
  }
}
