import getTargetProducts from "../../services/getTargetProducts";
import IncreaseStockForm from "./components/IncreaseStockForm";

async function IncreaseInventoryPage({ params }) {
  const { id: targetId } = await params;
  const targetProducts = await getTargetProducts(targetId);
  return (
    <>
      <IncreaseStockForm targetProducts={targetProducts} />
    </>
  );
}

export default IncreaseInventoryPage;
