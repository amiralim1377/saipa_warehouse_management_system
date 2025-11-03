import Link from "next/link";
import { Button } from "@/components/ui/button";

function WarehousesActions() {
  return (
    <div className="flex flex-wrap gap-3 mt-4 justify-start">
      <Link href="/warehouses/new">
        <Button className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto text-center flex-1 sm:flex-auto min-w-[150px]">
          تعریف انبار جدید
        </Button>
      </Link>

      <Link href="/warehouses/edit">
        <Button className="bg-accent text-accent-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto text-center flex-1 sm:flex-auto min-w-[150px]">
          ویرایش انبار
        </Button>
      </Link>

      <Link href="/warehouses/delete">
        <Button className="bg-destructive text-destructive-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto text-center flex-1 sm:flex-auto min-w-[150px]">
          حذف انبار
        </Button>
      </Link>

      <Link href="/warehouses/track">
        <Button className="bg-muted text-muted-foreground hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto text-center flex-1 sm:flex-auto min-w-[150px]">
          رهگیری کالا
        </Button>
      </Link>
    </div>
  );
}

export default WarehousesActions;
