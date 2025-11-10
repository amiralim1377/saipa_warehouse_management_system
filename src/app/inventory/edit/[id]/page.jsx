import { QueryClientProviderWrapper } from "@/providers/QueryClientProviderWrapper/QueryClientProviderWrapper";
import getTargetProducts from "../../services/getTargetProducts";
import InventoryInfoEditForm from "./components/InventoryInfoEditForm";
import { getCategories } from "@/services/getCategories";
import { getWarehouse } from "../../inbound/services/getWarehouse";
import { getSuppliers } from "@/app/suppliers/services/getSuppliers";
import { InventoryInboundProvider } from "../../inbound/context/InventoryInboundProvider";

export default async function InventoryInfoEditPage({ params }) {
  const { id: targetId } = await params;
  const data = await getTargetProducts(targetId);
  const { categories, message, success } = await getCategories();
  const warehouse = await getWarehouse();
  const suppliers = await getSuppliers();

  if (!data) {
    return (
      <div className="p-6 text-center text-muted-foreground">
        اطلاعاتی برای این محصول یافت نشد.
      </div>
    );
  }

  return (
    <>
      <QueryClientProviderWrapper>
        <InventoryInboundProvider
          categories={categories}
          warehouse={warehouse}
          suppliers={suppliers}
        >
          <InventoryInfoEditForm partData={data} />
        </InventoryInboundProvider>
      </QueryClientProviderWrapper>
    </>
  );
}
