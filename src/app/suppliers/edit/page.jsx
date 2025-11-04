import NoSuppliers from "@/app/customers/delete/components/NoCustomers/NoCustomers";
import EditSuppliersListView from "./EditSuppliersListView/EditSuppliersListView";
import { getSuppliers } from "./services/getSuppliers";

export const dynamic = "force-dynamic";

async function EditSuppliersPage() {
  const { suppliers, message } = await getSuppliers();

  return (
    <>
      {suppliers?.length > 0 ? (
        <EditSuppliersListView initialsuppliers={suppliers} />
      ) : (
        <NoSuppliers />
      )}
    </>
  );
}

export default EditSuppliersPage;
