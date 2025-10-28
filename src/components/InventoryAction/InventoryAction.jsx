import Link from "next/link";
import { Button } from "@/components/ui/button";

function InventoryActionLinks() {
  return (
    <div className="flex flex-wrap gap-4 mt-4 justify-start" dir="rtl">
      <Link href="/inventory/inbound">
        <Button className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto text-center flex-1 sm:flex-auto min-w-[150px]">
          ثبت ورودی
        </Button>
      </Link>

      <Link href="/inventory/outbound">
        <Button className="bg-secondary text-secondary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto text-center flex-1 sm:flex-auto min-w-[150px]">
          ثبت خروجی
        </Button>
      </Link>

      <Link href="/inventory/transfer">
        <Button className="bg-accent text-accent-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto text-center flex-1 sm:flex-auto min-w-[150px]">
          انتقال بین انبارها
        </Button>
      </Link>

      <Link href="/inventory/damage">
        <Button className="bg-destructive text-card-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto text-center flex-1 sm:flex-auto min-w-[150px]">
          ثبت ضایعات و کسری
        </Button>
      </Link>
    </div>
  );
}

export default InventoryActionLinks;
