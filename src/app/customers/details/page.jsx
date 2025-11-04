import getCustomers from "../services/getCustomers";
import CustomersList from "./components/CustomersList/CustomersList";

export const dynamic = "force-dynamic";

async function CustomersDetailsPage() {
  const customers = await getCustomers();
  return (
    <>
      <CustomersList customers={customers} />
    </>
  );
}

export default CustomersDetailsPage;
