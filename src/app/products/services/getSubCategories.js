"use server";

import prisma from "@/lib/prismaClient";

const getSubCategories = async () => {
  try {
    const subcategories = await prisma.subcategories.findMany({
      orderBy: {
        name: "asc",
      },
    });
    return { subcategories };
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    return [];
  }
};

export default getSubCategories;
