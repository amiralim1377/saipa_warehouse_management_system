import { getTargetProduct } from "./services/getTargetProduct";
import NoProducts from "./components/NoProducts/NoProducts";
import OutboundForm from "./components/OutboundForm/OutboundForm";
import fetchCustomers from "../../services/fetchCutomers";
import { InventoryDynamicOutboundProvider } from "./context/InventoryDynamicOutboundProvider";

export default async function OutboundDetailPage({ params }) {
  const { id: productId } = await params;
  const { message, product, success } = await getTargetProduct(productId);

  console.log(product);

  const {
    message: customersMessage,
    success: customersSuccess,
    data: customersData,
  } = await fetchCustomers();

  if (!success || !product) {
    return <NoProducts message={message || "محصول مورد نظر یافت نشد."} />;
  }

  return (
    <div className="p-6">
      <InventoryDynamicOutboundProvider customersData={customersData}>
        <OutboundForm product={product} />
      </InventoryDynamicOutboundProvider>
    </div>
  );
}
