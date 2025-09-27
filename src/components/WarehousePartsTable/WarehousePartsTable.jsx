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
  { key: "code", label: "کد قطعه", always: true },
  { key: "name", label: "نام قطعه", always: true },
  { key: "stock", label: "موجودی", always: true },
  { key: "status", label: "وضعیت", always: true },
  { key: "category", label: "دسته‌بندی" },
  { key: "subcategory", label: "زیرمجموعه" },
  { key: "unit", label: "واحد" },
  { key: "location", label: "مکان انبار" },
  { key: "supplier", label: "تأمین‌کننده" },
  { key: "lastReceived", label: "تاریخ ورود" },
  { key: "lastIssued", label: "تاریخ خروج" },
  { key: "unitPrice", label: "قیمت واحد" },
  { key: "totalValue", label: "ارزش کل" },
];

export default function WarehousePartsTable() {
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
          <TableRow>
            <TableCell className="whitespace-normal break-words">
              INV001
            </TableCell>
            <TableCell className="whitespace-normal break-words">
              قطعه تستی خیلی طولانی
            </TableCell>
            <TableCell>120</TableCell>
            <TableCell>موجود</TableCell>
            <TableCell className="hidden md:table-cell">دسته A</TableCell>
            <TableCell className="hidden md:table-cell">زیرمجموعه 1</TableCell>
            <TableCell className="hidden md:table-cell">عدد</TableCell>
            <TableCell className="hidden md:table-cell">انبار 3</TableCell>
            <TableCell className="hidden md:table-cell">
              تأمین‌کننده X
            </TableCell>
            <TableCell className="hidden md:table-cell">1402/05/01</TableCell>
            <TableCell className="hidden md:table-cell">1402/05/10</TableCell>
            <TableCell className="hidden md:table-cell">500,000</TableCell>
            <TableCell className="hidden md:table-cell">60,000,000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
