import fetchProducts from "../services/fetchProducts";
import InventoryDeleteList from "./components/InventoryDeleteList";

async function InventoryDeletePage() {
  const { data, message, success } = await fetchProducts();
  return (
    <>
      <InventoryDeleteList data={data} />
    </>
  );
}

export default InventoryDeletePage;
