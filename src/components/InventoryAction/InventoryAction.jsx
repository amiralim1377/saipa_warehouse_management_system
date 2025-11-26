import Link from "next/link";
import { Button } from "@/components/ui/button";

function InventoryActionLinks() {
  return (
    <div
      className="flex flex-wrap lg:justify-start justify-between  w-full  gap-4 mt-4 "
      dir="rtl"
    >
      <Link href="/inventory/inbound">
        <Button className="bg-primary text-secondary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto text-center flex-1 sm:flex-auto min-w-[150px]">
          ثبت ورودی
        </Button>
      </Link>

      <Link href="/inventory/outbound">
        <Button className="bg-secondary text-secondary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto text-center flex-1 sm:flex-auto min-w-[150px]">
          ثبت خروجی
        </Button>
      </Link>

      <Link href="/inventory/delete">
        <Button className="bg-red-600 text-secondary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto flex-1 sm:flex-auto min-w-[150px]">
          حذف محصول
        </Button>
      </Link>

      <Link href="/inventory/edit">
        <Button className="bg-yellow-500 text-secondary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto flex-1 sm:flex-auto min-w-[150px]">
          ویرایش محصول
        </Button>
      </Link>

      <Link href="/inventory/info">
        <Button className="bg-blue-500 text-secondary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto flex-1 sm:flex-auto min-w-[150px]">
          اطلاعات محصول
        </Button>
      </Link>

      <Link href="/inventory/outbound-history">
        <Button className="bg-indigo-600 text-secondary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto flex-1 sm:flex-auto min-w-[150px]">
          تاریخچه خروجی
        </Button>
      </Link>
    </div>
  );
}

export default InventoryActionLinks;
