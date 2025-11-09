import getTargetProductDetails from "../../services/getTargetProductDetails";
import ProductDetailsCard from "./components/ProductDetailsCard";

export default async function InventoryInfoDetailsPage({ params }) {
  const { id: targetId } = await params;
  const result = await getTargetProductDetails(targetId);

  const data = Array.isArray(result) ? result[0] : result;

  if (!data) {
    return (
      <div className="p-6 text-center text-muted-foreground">
        اطلاعاتی برای این محصول یافت نشد.
      </div>
    );
  }

  return <ProductDetailsCard data={data} />;
}
