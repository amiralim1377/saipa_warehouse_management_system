import fetchProducts from "../services/fetchProducts";
import InventoryEditList from "./components/InventoryEditList";

export const dynamic = "force-dynamic";

async function EditInventoryPage() {
  const { success, data, message } = await fetchProducts();

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
  return (
    <>
      <InventoryEditList data={data} />
    </>
  );
}

export default EditInventoryPage;
