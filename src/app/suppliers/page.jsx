import SuppliersStats from "./components/SuppliersStats/SuppliersStats";
import SuppliersActions from "./components/SuppliersActions/SuppliersActions";
import SupplierPartsTable from "./components/SupplierPartsTable/SupplierPartsTable";
import getSuppliersStats from "./services/getSuppliersStats";
import SuppliersByType from "./components/SuppliersByType/SuppliersByType";
import RecentSuppliers from "./components/RecentSuppliers/RecentSuppliers";
import newestSuppliers from "./services/newestSuppliers";

async function SuppliersPage() {
  const SuppliersStatsData = await getSuppliersStats();
  const {
    data: newestSuppliersData,
    message,
    status,
  } = await newestSuppliers();

  return (
    <div>
      <SuppliersStats SuppliersStatsData={SuppliersStatsData} />
      <SuppliersActions />
      <RecentSuppliers newestSuppliersData={newestSuppliersData} />
      <SuppliersByType />
      <SupplierPartsTable />
    </div>
  );
}

export default SuppliersPage;
