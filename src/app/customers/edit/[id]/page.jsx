import { toast } from "react-toastify";
import EditDynamicCustomerForm from "./components/EditDynamicCustomerForm/EditDynamicCustomerForm";
import getTargetCustomer from "./services/getTargetCustomer";
import NoTargetCustomer from "./components/NoTargetCustomer/NoTargetCustomer";

async function EditDynamicCustomerPage({ params }) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);

  const targetCustomer = await getTargetCustomer(decodedId);

  if (!targetCustomer) {
    toast.error("مشتری یافت نشد");
    return <NoTargetCustomer />;
  }

  return (
    <>
      <EditDynamicCustomerForm targetCustomer={targetCustomer} />
    </>
  );
}

export default EditDynamicCustomerPage;
