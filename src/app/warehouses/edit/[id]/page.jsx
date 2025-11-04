import EditDynamicWarehouseForm from "./components/EditDynamicWarehouseForm/EditDynamicWarehouseForm";
import NoWarehouses from "../../components/NoWarehouses/NoWarehouses";
import { getTargetWarehouse } from "./services/getTargetWarehouse";
import { WarehouseProvider } from "./context/WarehouseContext";

async function EditDynamicWarehousesPage({ params }) {
  const { id } = await params;

  const {
    warehouse: targetWarehouse,
    status,
    message,
  } = await getTargetWarehouse(id);

  if (!targetWarehouse || status !== 200) {
    return <NoWarehouses message={message} />;
  }

  return (
    <>
      <WarehouseProvider targetWarehouse={targetWarehouse}>
        <EditDynamicWarehouseForm />
      </WarehouseProvider>
    </>
  );
}

export default EditDynamicWarehousesPage;
