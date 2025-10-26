import NoSuppliers from "../details/components/SuppliersList/NoSuppliers/NoSuppliers";
import SuppliersCustomerListView from "./components/SuppliersCustomerListView/SuppliersCustomerListView";
import { getSuppliers } from "./services/getSuppliers";

async function DeleteSuppliersPage() {
  const { suppliers, message } = await getSuppliers();

  return (
    <>
      {suppliers?.length > 0 ? (
        <SuppliersCustomerListView initialSuppliers={suppliers} />
      ) : (
        <NoSuppliers />
      )}
    </>
  );
}

export default DeleteSuppliersPage;
