import Link from "next/link";

function WarehousesActions() {
  return (
    <div className="flex gap-4 mt-4 flex-wrap">
      <Link
        href="/warehouses/new"
        className="bg-primary text-primary-foreground px-6 py-3 rounded-lg inline-block text-center"
      >
        تعریف انبار جدید
      </Link>
      <Link
        href="/warehouses/edit"
        className="bg-accent text-accent-foreground px-6 py-3 rounded-lg inline-block text-center"
      >
        ویرایش انبار
      </Link>
      <Link
        href="/warehouses/delete"
        className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg inline-block text-center"
      >
        حذف انبار
      </Link>
      <Link
        href="/warehouses/track"
        className="bg-muted text-muted-foreground px-6 py-3 rounded-lg inline-block text-center"
      >
        رهگیری کالا
      </Link>
    </div>
  );
}

export default WarehousesActions;
