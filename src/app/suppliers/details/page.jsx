import { getSuppliers } from "../services/getSuppliers";
import NoSuppliers from "./components/SuppliersList/NoSuppliers/NoSuppliers";
import SuppliersList from "./components/SuppliersList/SuppliersList";

export const dynamic = "force-dynamic";

export default async function SuppliersDetailsPage() {
  const { status, message, suppliers: suppliersData } = await getSuppliers();

  const suppliers = suppliersData.map((sup) => ({
    id: sup.id,
    name: sup.name,
    phone: sup.phone,
    email: sup.email || "",
    website: sup.website || "",
    status: sup.status,
    created_at: sup.created_at ? new Date(sup.created_at).toISOString() : null,
    type: sup.supplier_type === "company" ? "حقوقی" : "حقیقی",
  }));

  if (!suppliers.length) {
    return <NoSuppliers />;
  }

  return <SuppliersList suppliers={suppliers} />;
}
