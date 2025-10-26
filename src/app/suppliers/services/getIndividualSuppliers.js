import prisma from "@/lib/prismaClient";

export const getIndividualSuppliers = async () => {
  try {
    const suppliers = await prisma.suppliers.findMany({
      where: { supplier_type: "individual" },
      orderBy: { created_at: "desc" },
    });

    if (!suppliers.length) {
      return {
        status: false,
        message: "هیچ تأمین‌کننده حقیقی یافت نشد.",
        suppliers: [],
      };
    }

    const plainSuppliers = suppliers.map((sup) => ({
      ...sup,
      credit_limit: sup.credit_limit?.toString() ?? null,
    }));

    return {
      status: true,
      message: "تأمین‌کنندگان حقیقی با موفقیت دریافت شدند.",
      suppliers: plainSuppliers,
    };
  } catch (error) {
    console.error("❌ خطا در دریافت تأمین‌کنندگان حقیقی:", error);
    return {
      status: false,
      message: "خطا در ارتباط با پایگاه داده.",
      suppliers: [],
    };
  }
};

export default getIndividualSuppliers;
