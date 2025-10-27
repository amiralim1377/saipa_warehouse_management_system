import { getTargetProduct } from "./services/getTargetProduct";
import NoProducts from "./components/NoProducts/NoProducts";
import OutboundForm from "./components/OutboundForm/OutboundForm";

export default async function OutboundDetailPage({ params }) {
  const { id: productId } = await params;
  const { message, product, success } = await getTargetProduct(productId);

  if (!success || !product) {
    return <NoProducts message={message || "محصول مورد نظر یافت نشد."} />;
  }

  return (
    <div className="p-6">
      <OutboundForm product={product} />
    </div>
  );
}
