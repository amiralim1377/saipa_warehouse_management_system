"use server";

import prisma from "@/lib/prismaClient";

export const getTargetCustomers = async (targetId) => {
  if (!targetId) return null;

  try {
    const customer = await prisma.customers.findUnique({
      where: {
        id: targetId,
      },
    });
    return customer;
  } catch (error) {
    console.error("Failed to fetch customer:", error);
    return null;
  }
};

export default getTargetCustomers;
