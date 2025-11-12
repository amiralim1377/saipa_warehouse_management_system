import getTargetOutboundDetails from "../../services/getTargetOutboundDetails";
import OutboundDetails from "./components/OutboundDetails";

async function OutboundDetailsPage({ params }) {
  const { id: targetId } = await params;

  const { success, data, error } = await getTargetOutboundDetails(targetId);

  if (!success) {
    return <div>خطایی در دریافت اطلاعات رخ داده است: {error}</div>;
  }

  return (
    <>
      <OutboundDetails data={data} />
    </>
  );
}

export default OutboundDetailsPage;
