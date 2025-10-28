import getCustomers from "../services/getCustomers";
import CustomersList from "./components/CustomersList/CustomersList";

async function CustomersDetailsPage() {
  const customers = await getCustomers();
  return (
    <>
      <CustomersList customers={customers} />
    </>
  );
}

export default CustomersDetailsPage;
