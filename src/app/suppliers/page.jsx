import SuppliersStats from "./components/SuppliersStats/SuppliersStats";
import SuppliersActions from "./components/SuppliersActions/SuppliersActions";
import SupplierPartsTable from "./components/SupplierPartsTable/SupplierPartsTable";
import getSuppliersStats from "./services/getSuppliersStats";
import SuppliersByType from "./components/SuppliersByType/SuppliersByType";
import RecentSuppliers from "./components/RecentSuppliers/RecentSuppliers";
import newestSuppliers from "./services/newestSuppliers";
import fetchLatestPartsBySupplier from "./services/fetchLatestPartsBySupplier";

async function SuppliersPage() {
  const SuppliersStatsData = await getSuppliersStats();
  const {
    data: newestSuppliersData,
    message: newestMessage,
    status: newestStatus,
  } = await newestSuppliers();

  const {
    data: latestPartsBySupplier,
    message: partsMessage,
    status: partsStatus,
  } = await fetchLatestPartsBySupplier();

  return (
    <div>
      <SuppliersStats SuppliersStatsData={SuppliersStatsData} />
      <SuppliersActions />
      <RecentSuppliers newestSuppliersData={newestSuppliersData} />
      <SuppliersByType />
      <SupplierPartsTable latestPartsBySupplier={latestPartsBySupplier} />
    </div>
  );
}

export default SuppliersPage;
