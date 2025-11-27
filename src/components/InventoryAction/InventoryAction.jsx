import Link from "next/link";
import { Button } from "@/components/ui/button";

function InventoryActionLinks() {
  return (
    <div
      className="flex flex-col sm:flex-row flex-wrap gap-4 w-full mt-4"
      dir="rtl"
    >
      <Link href="/inventory/inbound">
        <Button className="bg-primary text-secondary-foreground px-4 py-2 rounded-lg w-full sm:w-auto">
          ثبت ورودی
        </Button>
      </Link>

      <Link href="/inventory/outbound">
        <Button className="bg-[#5F9EA0] text-secondary-foreground px-4 py-2 rounded-lg w-full sm:w-auto">
          ثبت خروجی
        </Button>
      </Link>

      <Link href="/inventory/delete">
        <Button className="bg-red-600 text-secondary-foreground px-4 py-2 rounded-lg w-full sm:w-auto">
          حذف محصول
        </Button>
      </Link>

      <Link href="/inventory/edit">
        <Button className="bg-yellow-500 text-secondary-foreground px-4 py-2 rounded-lg w-full sm:w-auto">
          ویرایش محصول
        </Button>
      </Link>

      <Link href="/inventory/info">
        <Button className="bg-blue-500 text-secondary-foreground px-4 py-2 rounded-lg w-full sm:w-auto">
          اطلاعات محصول
        </Button>
      </Link>

      <Link href="/inventory/outbound-history">
        <Button className="bg-indigo-600 text-secondary-foreground px-4 py-2 rounded-lg w-full sm:w-auto">
          تاریخچه خروجی
        </Button>
      </Link>
    </div>
  );
}

export default InventoryActionLinks;
