import SupplierPartsTable from "@/components/SupplierPartsTable/SupplierPartsTable";
import SuppliersActions from "@/components/SuppliersActions/SuppliersActions";
import SuppliersTable from "@/components/SuppliersTable/SuppliersTable";
import SuppliersStats from "./components/SuppliersStats/SuppliersStats";

function SuppliersPage() {
  return (
    <div>
      <SuppliersStats />
      <SuppliersActions />
      <SuppliersTable />
      <SupplierPartsTable />
    </div>
  );
}

export default SuppliersPage;
