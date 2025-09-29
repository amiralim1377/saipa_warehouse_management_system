"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EmptyWarehouseState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <p className="text-lg font-medium text-gray-600">
        هنوز هیچ انباری اضافه نشده است.
      </p>
      <p className="text-sm text-gray-500 mt-2">
        برای شروع، یک انبار جدید اضافه کنید.
      </p>
      <Link href="/warehouses/new">
        <Button className="bg-blue-600 mt-2 hover:bg-blue-700 text-white font-medium rounded-lg px-4 py-2 shadow-md">
          ایجاد انبار
        </Button>
      </Link>{" "}
    </div>
  );
}
