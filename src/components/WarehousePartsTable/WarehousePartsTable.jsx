"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function WarehousePartsTable({ products = [] }) {
  return (
    <div className="w-full">
      {/* Desktop & Tablet Table */}
      <div className="overflow-x-auto rounded-md border hidden md:block">
        <Table className="w-full table-auto">
          <TableHeader className="bg-muted dark:bg-muted/30">
            <TableRow className="text-xs">
              <TableHead>کد قطعه</TableHead>
              <TableHead>نام قطعه</TableHead>
              <TableHead>موجودی</TableHead>
              <TableHead>وضعیت</TableHead>
              <TableHead>دسته‌بندی</TableHead>
              <TableHead>زیرمجموعه</TableHead>
              <TableHead>واحد</TableHead>
              <TableHead>مکان انبار</TableHead>
              <TableHead>تأمین‌کننده</TableHead>
              <TableHead>تاریخ ورود</TableHead>
              <TableHead>قیمت واحد</TableHead>
              <TableHead>ارزش کل</TableHead>
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
                <TableCell>{product.unit_price.toLocaleString()}</TableCell>
                <TableCell>{product.total_value.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Cards */}
      <div className="grid md:hidden gap-4 mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-md p-4 bg-card text-card-foreground"
          >
            <div className="flex justify-between">
              <span className="font-semibold">کد قطعه:</span>
              <span>{product.part_code}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">نام قطعه:</span>
              <span>{product.part_name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">موجودی:</span>
              <span>{product.stock}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">وضعیت:</span>
              <span>{product.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">دسته‌بندی:</span>
              <span>{product.category_name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">زیرمجموعه:</span>
              <span>{product.subcategory_name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">واحد:</span>
              <span>{product.unit}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">مکان انبار:</span>
              <span>{product.location}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">تأمین‌کننده:</span>
              <span>{product.supplier_name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">تاریخ ورود:</span>
              <span>
                {new Date(product.entry_date).toLocaleDateString("fa-IR")}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">قیمت واحد:</span>
              <span>{product.unit_price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">ارزش کل:</span>
              <span>{product.total_value.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
