import Link from "next/link";

function InventoryActionLinks() {
  return (
    <div className="flex flex-wrap gap-6 mb-6 justify-start" dir="rtl">
      <Link
        href="/inventory/inbound"
        className="px-8 py-4 text-lg font-semibold rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition inline-block text-center"
      >
        ثبت ورودی
      </Link>
      <Link
        href="/inventory/outbound"
        className="px-8 py-4 text-lg font-semibold rounded-lg bg-secondary text-secondary-foreground hover:opacity-90 transition inline-block text-center"
      >
        ثبت خروجی
      </Link>
      <Link
        href="/inventory/transfer"
        className="px-8 py-4 text-lg font-semibold rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition inline-block text-center"
      >
        انتقال بین انبارها
      </Link>
      <Link
        href="/inventory/damage"
        className="px-8 py-4 text-lg font-semibold rounded-lg bg-destructive text-card-foreground hover:opacity-90 transition inline-block text-center"
      >
        ثبت ضایعات و کسری
      </Link>
    </div>
  );
}

export default InventoryActionLinks;
