"use server";

import prisma from "@/lib/prismaClient";

export const fetchTargetCustomerOrders = async (targetId) => {
  if (!targetId) {
    return {
      status: false,
      message: "شناسه مشتری مشخص نشده است",
      data: null,
    };
  }

  try {
    const orders = await prisma.$queryRaw`
      SELECT *
      FROM sales_orders_view
      WHERE customer_id = ${targetId}::uuid
      ORDER BY created_at DESC
    `;

    if (!orders || orders.length === 0) {
      return {
        status: true,
        message: "هیچ سفارشی برای این مشتری یافت نشد",
        data: [],
      };
    }

    const newOrders = JSON.parse(JSON.stringify(orders));

    return {
      status: true,
      message: "سفارش‌ها با موفقیت دریافت شد",
      data: newOrders,
    };
  } catch (error) {
    console.error(
      "Failed to fetch customer orders from sales_orders_view:",
      error
    );
    return {
      status: false,
      message: "خطا در دریافت سوابق خرید مشتری",
      data: null,
    };
  }
};

export default fetchTargetCustomerOrders;
