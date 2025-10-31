// import supabaseServer from "@/lib/supabaseServer";

// export async function getInventoryStats() {
//   try {
//     const { data, error } = await supabaseServer.rpc(
//       "get_parts_inventory_stats"
//     );

//     if (error) {
//       return {
//         success: false,
//         message: error.message,
//         data: null,
//       };
//     }

//     const safeData = JSON.parse(JSON.stringify(data));

//     return {
//       success: true,
//       message: "آمار موجودی با موفقیت دریافت شد",
//       data: safeData,
//     };
//   } catch (err) {
//     console.error("خطا در دریافت آمار موجودی:", err);
//     return {
//       success: false,
//       message: err.message || "خطای ناشناخته",
//       data: null,
//     };
//   }
// }

// "use server";
// import prisma from "@/lib/prismaClient";

// export async function getInventoryStats() {
//   try {
//     const data = await prisma.$queryRaw`
//       SELECT
//         COUNT(*) AS total_parts,
//         SUM(stock) AS total_stock,
//         SUM(unit_price * stock) AS total_value
//       FROM parts_inventory;
//     `;

//     return {
//       success: true,
//       message: "آمار موجودی با موفقیت دریافت شد",
//       data: data[0],
//     };
//   } catch (err) {
//     console.error("خطا در دریافت آمار موجودی:", err);
//     return {
//       success: false,
//       message: err.message || "خطای ناشناخته",
//       data: null,
//     };
//   }
// }

"use server";

import prisma from "@/lib/prismaClient";

export async function getInventoryStats() {
  try {
    const result = await prisma.$queryRawUnsafe(`
      SELECT * FROM get_parts_inventory_stats();
    `);

    const safeData = JSON.parse(JSON.stringify(result?.[0] || result));

    return {
      success: true,
      message: "آمار موجودی با موفقیت دریافت شد",
      data: safeData,
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
