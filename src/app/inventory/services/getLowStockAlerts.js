import supabaseServer from "@/lib/supabaseServer";

export async function getLowStockAlerts() {
  try {
    const { data, error } = await supabaseServer.rpc("get_low_stock_alerts");

    if (error) throw new Error(error.message);

    return {
      success: true,
      message: "هشدار کمبود موجودی دریافت شد",
      data,
    };
  } catch (err) {
    return {
      success: false,
      message: err.message,
      data: null,
    };
  }
}
