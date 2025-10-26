import prisma from "@/lib/prismaClient";

export async function getSupplierById(id) {
  if (!id) throw new Error("Supplier ID is required");

  try {
    const supplierData = await prisma.suppliers.findUnique({
      where: { id },
    });

    if (!supplierData) {
      return { status: false, message: "Supplier not found", supplier: null };
    }

    const supplier = {
      id: supplierData.id,
      name: supplierData.name,
      supplier_type:
        supplierData.supplier_type === "individual" ? "حقیقی" : "حقوقی",
      national_id: supplierData.national_id || "",
      tax_code: supplierData.tax_code || "",
      phone: supplierData.phone || "",
      email: supplierData.email || "",
      address: supplierData.address || "",
      website: supplierData.website || "",
      bank_account: supplierData.bank_account || "",
      credit_limit: supplierData.credit_limit
        ? supplierData.credit_limit.toString()
        : null,
      payment_terms: supplierData.payment_terms || "",
      status: supplierData.status,
      notes: supplierData.notes || "",
      created_at: supplierData.created_at
        ? supplierData.created_at.toISOString()
        : null,
      updated_at: supplierData.updated_at
        ? supplierData.updated_at.toISOString()
        : null,
    };

    return { status: true, message: "Supplier fetched successfully", supplier };
  } catch (error) {
    console.error("Failed to fetch supplier:", error);
    return { status: false, message: error.message, supplier: null };
  }
}
