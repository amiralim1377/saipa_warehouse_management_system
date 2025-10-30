import NoTargetSuppliers from "./components/NoTargetSuppliers/NoTargetSuppliers";
import EditDynamicSupplierForm from "./components/EditDynamicSupplierForm/EditDynamicSupplierForm";
import { getTargetSupplier } from "./services/getTargetSuppliers";

async function EditDynamicSuppliersPage({ params }) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);

  const {
    supplier: targetSupplier,
    status,
    message,
  } = await getTargetSupplier(decodedId);

  if (!targetSupplier || status !== 200) {
    return <NoTargetSuppliers message={message} />;
  }

  return (
    <>
      <EditDynamicSupplierForm targetSupplier={targetSupplier} />
    </>
  );
}

export default EditDynamicSuppliersPage;
