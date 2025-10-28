import Link from "next/link";
import { Button } from "@/components/ui/button";

function CustomersActions() {
  return (
    <div className="flex gap-4 mt-4 flex-wrap">
      <Button
        asChild
        className="bg-primary text-primary-foreground px-6 py-3 rounded-lg"
      >
        <Link href="/customers/new">ثبت مشتری جدید</Link>
      </Button>

      <Button
        asChild
        className="bg-accent text-accent-foreground px-6 py-3 rounded-lg"
      >
        <Link href="/customers/edit">ویرایش مشتری</Link>
      </Button>

      <Button
        asChild
        className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg"
      >
        <Link href="/customers/delete">حذف مشتری</Link>
      </Button>

      <Button
        asChild
        className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg"
      >
        <Link href="/customers/details">اطلاعات مشتریان</Link>
      </Button>

      <Button
        asChild
        className="bg-muted hover:text-white text-muted-foreground px-6 py-3 rounded-lg"
      >
        <Link href="/customers/orders">سفارش‌های مشتریان</Link>
      </Button>
    </div>
  );
}

export default CustomersActions;
