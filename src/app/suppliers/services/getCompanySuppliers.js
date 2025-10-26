import prisma from "@/lib/prismaClient";

export const getCompanySuppliers = async () => {
  try {
    const suppliers = await prisma.suppliers.findMany({
      where: { supplier_type: "company" },
      orderBy: { created_at: "desc" },
    });

    if (!suppliers.length) {
      return {
        status: false,
        message: "هیچ تأمین‌کننده حقوقی یافت نشد.",
        suppliers: [],
      };
    }

    const plainSuppliers = suppliers.map((sup) => ({
      ...sup,
      credit_limit: sup.credit_limit?.toString() ?? null,
    }));

    return {
      status: true,
      message: "تأمین‌کنندگان حقوقی با موفقیت دریافت شدند.",
      suppliers: plainSuppliers,
    };
  } catch (error) {
    console.error("❌ خطا در دریافت تأمین‌کنندگان حقوقی:", error);
    return {
      status: false,
      message: "خطا در ارتباط با پایگاه داده.",
      suppliers: [],
    };
  }
};
