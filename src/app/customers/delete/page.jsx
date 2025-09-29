import DeleteCustomerListView from "./components/DeleteCustomerListView/DeleteCustomerListView";
import NoCustomers from "./components/NoCustomers/NoCustomers";
import { getCustomers } from "./services/getCustomer";

async function DeleteCustomersPage() {
  const customers = await getCustomers();

  return (
    <>
      {customers?.length > 0 ? (
        <DeleteCustomerListView initialCustomers={customers} />
      ) : (
        <NoCustomers />
      )}
    </>
  );
}

export default DeleteCustomersPage;
