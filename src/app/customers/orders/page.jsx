import getCustomers from "../services/getCustomers";
import CustomersList from "./components/CustomersList";

async function CustomersOrdersPage() {
  const customers = await getCustomers();

  return (
    <>
      <CustomersList customers={customers} />
    </>
  );
}

export default CustomersOrdersPage;
