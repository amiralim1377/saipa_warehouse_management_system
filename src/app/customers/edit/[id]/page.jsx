import { toast } from "react-toastify";
import EditDynamicCustomerForm from "./components/EditDynamicCustomerForm/EditDynamicCustomerForm";
import getTargetCustomer from "./services/getTargetCustomer";
import NoTargetCustomer from "./components/NoTargetCustomer/NoTargetCustomer";

async function EditDynamicCustomerPage({ params }) {
  const id = decodeURIComponent(params.id);

  const targetCustomer = await getTargetCustomer(id);

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
