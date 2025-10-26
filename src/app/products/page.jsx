import WarehousePartsTable from "@/components/WarehousePartsTable/WarehousePartsTable";
import { fetchProducts } from "./services/fetchProducts";
import NoProducts from "./components/NoProducts";

async function Productspage() {
  const { data, message, status } = await fetchProducts();

  console.log(data);

  return (
    <div className="w-full space-y-2 overflow-x-auto">
      {status === "success" && data.length > 0 ? (
        <WarehousePartsTable products={data} />
      ) : (
        <NoProducts message={message} />
      )}
    </div>
  );
}

export default Productspage;
