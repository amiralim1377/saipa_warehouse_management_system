import { getCustomers } from "../delete/services/getCustomer";
import CreateCustomerForm from "../new/components/CreateCustomerForm/CreateCustomerForm";
import EditCustomerListView from "./components/EditCustomerListView/EditCustomerListView";

async function EditCustomersPage() {
  const customers = await getCustomers();

  return (
    <>
      <EditCustomerListView initialCustomers={customers} />
    </>
  );
}

export default EditCustomersPage;
