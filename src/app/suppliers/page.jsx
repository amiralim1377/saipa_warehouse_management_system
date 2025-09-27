import SupplierPartsTable from "@/components/SupplierPartsTable/SupplierPartsTable";
import SuppliersActions from "@/components/SuppliersActions/SuppliersActions";
import SuppliersTable from "@/components/SuppliersTable/SuppliersTable";

function SuppliersPage() {
  return (
    <div>
      <SuppliersActions />
      <SuppliersTable />
      <SupplierPartsTable />
    </div>
  );
}

export default SuppliersPage;
