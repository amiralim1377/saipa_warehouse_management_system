import fetchProducts from "../services/fetchProducts";
import InventoryDetailsList from "./components/InventoryDetailsList";

async function InventoryDetailsPage() {
  const { success, data, message } = await fetchProducts();
  console.log(data);

  if (!success) {
    return (
      <div className="p-6 text-center text-red-500">
        ❌ خطا در دریافت اطلاعات: {message}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        هیچ محصولی در انبار ثبت نشده است.
      </div>
    );
  }

  return <InventoryDetailsList data={data} />;
}

export default InventoryDetailsPage;
