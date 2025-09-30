import NoCustomers from "@/app/customers/delete/components/NoCustomers/NoCustomers";
import SuppliersCustomerListView from "./components/SuppliersCustomerListView/SuppliersCustomerListView";
import { getSuppliers } from "./services/getSuppliers";

async function DeleteSuppliersPage() {
  const { suppliers, message } = await getSuppliers();

  return (
    <>
      {suppliers?.length > 0 ? (
        <SuppliersCustomerListView initialSuppliers={suppliers} />
      ) : (
        <NoCustomers />
      )}
    </>
  );
}

export default DeleteSuppliersPage;
