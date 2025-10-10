import { useMemo } from "react";
import { useWatch } from "react-hook-form";

export default function useTotalAmount(control, fieldName = "items") {
  const items = useWatch({ control, name: fieldName });

  const totalAmount = useMemo(() => {
    if (!items) return 0;
    return items.reduce((acc, item) => {
      const quantity = Number(item.quantity) || 0;
      const unitPrice = Number(item.unitPrice) || 0;
      return acc + quantity * unitPrice;
    }, 0);
  }, [items]);

  return totalAmount;
}
