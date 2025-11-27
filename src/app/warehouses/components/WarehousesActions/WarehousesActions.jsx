import Link from "next/link";
import { Button } from "@/components/ui/button";

function WarehousesActions() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-3 mt-4">
      <Link href="/warehouses/new">
        <Button className="w-full md:w-auto bg-primary text-secondary-foreground px-4 py-3 rounded-lg text-center">
          تعریف انبار جدید
        </Button>
      </Link>

      <Link href="/warehouses/delete">
        <Button className="w-full md:w-auto bg-red-500 text-secondary-foreground px-4 py-3 rounded-lg text-center">
          حذف انبار
        </Button>
      </Link>

      <Link href="/warehouses/edit">
        <Button className="w-full md:w-auto bg-yellow-500 text-secondary-foreground px-4 py-3 rounded-lg text-center">
          ویرایش انبار
        </Button>
      </Link>

      <Link href="/warehouses/track">
        <Button className="w-full md:w-auto bg-blue-500 text-secondary-foreground hover:text-white px-4 py-3 rounded-lg text-center">
          رهگیری کالا
        </Button>
      </Link>
    </div>
  );
}

export default WarehousesActions;
