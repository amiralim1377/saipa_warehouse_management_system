"use server";

import prisma from "@/lib/prismaClient";

export const getOutboundParts = async () => {
  try {
    const outboundParts = await prisma.$queryRaw`
      SELECT *
      FROM public.parts_outbound_full
      ORDER BY created_at DESC
    `;

    const plainParts = outboundParts.map((part) => ({
      ...part,
      unit_price: Number(part.unit_price),
      total_value: Number(part.total_value),
      created_at: new Date(part.created_at).toISOString(),
    }));

    return plainParts;
  } catch (error) {
    console.error("Error fetching outbound parts:", error);
    return [];
  }
};

export default getOutboundParts;
