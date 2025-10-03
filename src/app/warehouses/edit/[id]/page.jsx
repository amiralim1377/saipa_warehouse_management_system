import EditDynamicWarehouseForm from "./components/EditDynamicWarehouseForm/EditDynamicWarehouseForm";
import NoWarehouses from "../../components/NoWarehouses/NoWarehouses";
import { getTargetWarehouse } from "./services/getTargetWarehouse";

async function EditDynamicWarehousesPage({ params }) {
  const id = decodeURIComponent(params.id);

  const {
    warehouse: targetWarehouse,
    status,
    message,
  } = await getTargetWarehouse(id);

  if (!targetWarehouse || status !== 200) {
    return <NoWarehouses message={message} />;
  }

  console.log(targetWarehouse);

  return (
    <>
      <EditDynamicWarehouseForm targetWarehouse={targetWarehouse} />
    </>
  );
}

export default EditDynamicWarehousesPage;
