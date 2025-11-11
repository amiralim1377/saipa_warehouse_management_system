"use server";

import prisma from "@/lib/prismaClient";

export const getTargetOutboundDetails = async (targetId) => {
  if (!targetId) return { success: false, error: "شناسه (ID) ارسال نشده است." };

  try {
    const records = await prisma.$queryRaw`
      SELECT *
      FROM public.parts_outbound_full
      WHERE id = ${targetId}::uuid
      LIMIT 1
    `;

    if (!records || records.length === 0) {
      return { success: false, error: "هیچ اطلاعاتی برای این خروجی یافت نشد." };
    }

    const record = records[0];

    // فرمت کردن داده‌ها برای استفاده در فرانت
    const formattedData = {
      ...record,
      unit_price: record.unit_price ? Number(record.unit_price) : null,
      total_value: record.total_value ? Number(record.total_value) : null,
      quantity: record.quantity ?? null,
      created_at: record.created_at
        ? new Date(record.created_at).toISOString()
        : null,
    };

    return { success: true, data: formattedData };
  } catch (error) {
    return { success: false, error: "خطایی در دریافت اطلاعات رخ داده است." };
  }
};

export default getTargetOutboundDetails;
