// "use server";

// import prisma from "@/lib/prismaClient";

// export const getTargetProducts = async (partId) => {
//   try {
//     const products = await prisma.parts_inventory.findMany({
//       where: {
//         id: partId,
//       },
//       orderBy: {
//         id: "asc",
//       },
//     });

//     const data = products.map((p) => ({
//       ...p,
//       unit_price: Number(p.unit_price),
//       total_value: Number(p.total_value),
//     }));

//     return data;
//   } catch (error) {
//     console.error("❌ Error fetching parts inventory:", error);
//     return [];
//   }
// };

// export default getTargetProducts;

"use server";

import prisma from "@/lib/prismaClient";

export const getTargetProductDetails = async (partId) => {
  if (!partId) return [];

  try {
    const products = await prisma.$queryRaw`
      SELECT *
      FROM public.parts_details_view
      WHERE id = ${partId}::uuid
    `;

    const data = products.map((p) => ({
      ...p,
      unit_price: Number(p.unit_price),
      total_value: Number(p.total_value),
    }));

    return data;
  } catch (error) {
    console.error("❌ Error fetching part details:", error);
    return [];
  }
};

export default getTargetProductDetails;
