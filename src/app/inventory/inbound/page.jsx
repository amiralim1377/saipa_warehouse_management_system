import { getCategories } from "@/app/inventory/inbound/services/getCategories";
import { InventoryInboundProvider } from "./context/InventoryInboundProvider";
import InventoryInboundForm from "./components/InventoryInboundForm/InventoryInboundForm";
import { QueryClientProviderWrapper } from "@/providers/QueryClientProviderWrapper";
import { getWarehouse } from "./services/getWarehouse";

export default async function InventoryInboundPage() {
  const categories = await getCategories();
  const warehouse = await getWarehouse();

  return (
    <QueryClientProviderWrapper>
      <InventoryInboundProvider
        initialCategories={categories}
        warehouse={warehouse}
      >
        <InventoryInboundForm />
      </InventoryInboundProvider>
    </QueryClientProviderWrapper>
  );
}
