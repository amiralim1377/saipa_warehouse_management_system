import Link from "next/link";

function InventoryActionLinks() {
  return (
    <div
      className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 mb-6 justify-start"
      dir="rtl"
    >
      <Link
        href="/inventory/inbound"
        className="w-full sm:w-auto flex-1 sm:flex-none px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition text-center"
      >
        ثبت ورودی
      </Link>
      <Link
        href="/inventory/outbound"
        className="w-full sm:w-auto flex-1 sm:flex-none px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg bg-secondary text-secondary-foreground hover:opacity-90 transition text-center"
      >
        ثبت خروجی
      </Link>
      <Link
        href="/inventory/transfer"
        className="w-full sm:w-auto flex-1 sm:flex-none px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition text-center"
      >
        انتقال بین انبارها
      </Link>
      <Link
        href="/inventory/damage"
        className="w-full sm:w-auto flex-1 sm:flex-none px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg bg-destructive text-card-foreground hover:opacity-90 transition text-center"
      >
        ثبت ضایعات و کسری
      </Link>
    </div>
  );
}

export default InventoryActionLinks;
