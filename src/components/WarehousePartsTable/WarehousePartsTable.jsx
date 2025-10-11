"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const tableHeadContent = [
  { key: "part_code", label: "کد قطعه" },
  { key: "part_name", label: "نام قطعه" },
  { key: "stock", label: "موجودی" },
  { key: "status", label: "وضعیت" },
  { key: "category_name", label: "دسته‌بندی" },
  { key: "subcategory_name", label: "زیرمجموعه" },
  { key: "unit", label: "واحد" },
  { key: "location", label: "مکان انبار" },
  { key: "supplier_name", label: "تأمین‌کننده" },
  { key: "entry_date", label: "تاریخ ورود" },
  { key: "lastIssued", label: "تاریخ خروج" },
  { key: "unit_price", label: "قیمت واحد" },
  { key: "total_value", label: "ارزش کل" },
];

export default function WarehousePartsTable({ products = [] }) {
  return (
    <div className="w-full overflow-x-auto rounded-md border">
      <Table className="w-full table-auto">
        <TableHeader className="bg-muted dark:bg-muted/30">
          <TableRow className="text-xs">
            {tableHeadContent.map((item) => (
              <TableHead key={item.key}>{item.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.part_code}</TableCell>
              <TableCell>{product.part_name}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.status}</TableCell>
              <TableCell>{product.category_name}</TableCell>
              <TableCell>{product.subcategory_name}</TableCell>
              <TableCell>{product.unit}</TableCell>
              <TableCell>{product.location}</TableCell>
              <TableCell>{product.supplier_name}</TableCell>
              <TableCell>
                {new Date(product.entry_date).toLocaleDateString("fa-IR")}
              </TableCell>
              <TableCell>{product.lastIssued || "-"}</TableCell>
              <TableCell>{product.unit_price.toLocaleString()}</TableCell>
              <TableCell>{product.total_value.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
