"use client";

import { OrderProvider } from "./context/OrderContext";
import OrderWizard from "./components/OrderWizard/OrderWizard";

export default function OrderSalesPage() {
  return (
    <OrderProvider>
      <OrderWizard />
    </OrderProvider>
  );
}
