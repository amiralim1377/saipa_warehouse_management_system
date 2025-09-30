import NoCustomers from "../delete/components/NoCustomers/NoCustomers";
import { getCustomers } from "../delete/services/getCustomer";
import EditCustomerListView from "./components/EditCustomerListView/EditCustomerListView";

async function EditCustomersPage() {
  const customers = await getCustomers();

  return (
    <>
      {customers?.length > 0 ? (
        <EditCustomerListView initialCustomers={customers} />
      ) : (
        <NoCustomers />
      )}
    </>
  );
}

export default EditCustomersPage;
