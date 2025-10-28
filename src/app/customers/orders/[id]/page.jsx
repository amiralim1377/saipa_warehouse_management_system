import fetchTargetCustomerOrders from "../../services/fetchTargetCustomerOrders";
import CustomerOrdersHistory from "./components/CustomerOrdersHistory/CustomerOrdersHistory";
import NoOrdersFound from "./components/NoOrdersFound/NoOrdersFound";

async function CustomersOrdersDetailsPage({ params }) {
  const { id } = await params;
  const { data, message, status } = await fetchTargetCustomerOrders(id);

  if (!data || data.length === 0) {
    return <NoOrdersFound />;
  }

  return <CustomerOrdersHistory data={data} />;
}

export default CustomersOrdersDetailsPage;
