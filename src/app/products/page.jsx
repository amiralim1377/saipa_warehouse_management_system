import WarehousePartsTable from "@/components/WarehousePartsTable/WarehousePartsTable";
import { fetchProducts } from "./services/fetchProducts";

async function Productspage() {
  const products = await fetchProducts();
  console.log(products);
  return (
    <div className="w-full space-y-2 overflow-x-auto">
      <WarehousePartsTable />
    </div>
  );
}

export default Productspage;
