import getOutboundParts from "../services/getOutboundParts";
import OutboundPartsList from "./components/OutboundPartsList";

export const dynamic = "force-dynamic";

async function OutboundHistoryPage() {
  const outboundParts = await getOutboundParts();

  return (
    <>
      <OutboundPartsList data={outboundParts} />
    </>
  );
}

export default OutboundHistoryPage;
