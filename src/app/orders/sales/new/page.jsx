import { OrderProvider } from "./context/OrderContext";
import OrderWizard from "./components/OrderWizard/OrderWizard";
import { QueryClientProviderWrapper } from "@/providers/QueryClientProviderWrapper";
import { fetchWarehouses } from "./services/fetchWarehouses";
import { fetchCategories } from "./services/fetchCategories";

export default async function OrderSalesPage() {
  const { message, success, warehouses, error } = await fetchWarehouses();

  const categories = await fetchCategories();

  return (
    <QueryClientProviderWrapper>
      <OrderProvider warehouses={warehouses} categories={categories}>
        <OrderWizard />
      </OrderProvider>
    </QueryClientProviderWrapper>
  );
}
