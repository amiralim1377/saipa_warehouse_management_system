import NoWarehouses from "../components/NoWarehouses/NoWarehouses";
import EditWarehousesListView from "./components/EditWarehousesListView/EditWarehousesListView";
import { getWarehouses } from "./services/getWarehouses";

export const dynamic = "force-dynamic";

async function WarehousesEditPage() {
  const { warehouses, status, message } = await getWarehouses();

  return (
    <>
      {status === 200 && warehouses?.length > 0 ? (
        <EditWarehousesListView initialWarehouses={warehouses} />
      ) : (
        <NoWarehouses message={message} />
      )}
    </>
  );
}

export default WarehousesEditPage;
