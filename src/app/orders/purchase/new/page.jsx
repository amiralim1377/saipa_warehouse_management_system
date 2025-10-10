import OrderPurchaseForm from "./components/OrderPurchaseForm/OrderPurchaseForm";
import NoSuppliers from "./components/NoSuppliers/NoSuppliers";
import { getSuppliers } from "./services/getSuppliers";

async function OrderPurchasePage() {
  const { data: suppliers, status } = await getSuppliers();

  if (status === "error" || !suppliers || suppliers.length === 0) {
    return <NoSuppliers />;
  }

  return <OrderPurchaseForm suppliers={suppliers} />;
}

export default OrderPurchasePage;
