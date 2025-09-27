import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const products = [
  { id: "1", name: "کالا ۱", quantity: 5, min: 10, max: 100 },
  { id: "2", name: "کالا ۲", quantity: 50, min: 10, max: 100 },
  { id: "3", name: "کالا ۳", quantity: 120, min: 10, max: 100 },
];

function InventoryAlertsTable() {
  const getProgressColor = (product) => {
    if (product.quantity < product.min) return "bg-destructive"; // قرمز
    if (product.quantity > product.max) return "bg-accent"; // زرد
    return "bg-primary"; // نرمال
  };

  const getProgressWidth = (product) => {
    const ratio = Math.min(product.quantity / product.max, 1);
    return `${ratio * 100}%`;
  };

  const getStatusText = (product) => {
    if (product.quantity < product.min) return "کم‌تر از حداقل";
    if (product.quantity > product.max) return "بیش از حداکثر";
    return "نرمال";
  };

  const getStatusColor = (product) => {
    if (product.quantity < product.min) return "text-destructive";
    if (product.quantity > product.max) return "text-accent";
    return "text-muted-foreground";
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-[var(--color-foreground)]">
        هشدار موجودی انبار
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>کالا</TableHead>
            <TableHead>موجودی</TableHead>
            <TableHead>حداقل</TableHead>
            <TableHead>حداکثر</TableHead>
            <TableHead>وضعیت</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>

              <TableCell className="w-48">
                <div className="relative h-4 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`${getProgressColor(product)} h-4 rounded-full`}
                    style={{ width: getProgressWidth(product) }}
                  ></div>
                </div>
                <span className="text-sm mt-1 block">{product.quantity}</span>
              </TableCell>

              <TableCell>{product.min}</TableCell>
              <TableCell>{product.max}</TableCell>
              <TableCell className={getStatusColor(product)}>
                {getStatusText(product)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default InventoryAlertsTable;
