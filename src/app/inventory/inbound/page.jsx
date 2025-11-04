import { InventoryInboundProvider } from "./context/InventoryInboundProvider";
import InventoryInboundForm from "./components/InventoryInboundForm/InventoryInboundForm";
import { QueryClientProviderWrapper } from "@/providers/QueryClientProviderWrapper/QueryClientProviderWrapper";
import { getWarehouse } from "./services/getWarehouse";
import { getSuppliers } from "./services/getsuppliers";
import getCategories from "@/services/getCategories";

export const dynamic = "force-dynamic";

export default async function InventoryInboundPage() {
  const { categories, message, success } = await getCategories();
  const warehouse = await getWarehouse();
  const suppliers = await getSuppliers();

  return (
    <QueryClientProviderWrapper>
      <InventoryInboundProvider
        categories={categories}
        warehouse={warehouse}
        suppliers={suppliers}
      >
        <InventoryInboundForm />
      </InventoryInboundProvider>
    </QueryClientProviderWrapper>
  );
}
