import Link from "next/link";
import { Button } from "@/components/ui/button";

function CustomersActions() {
  return (
    <div className="flex flex-wrap gap-4 rounded-2xl mt-4 justify-start sm:justify-start md:justify-start lg:justify-start">
      <Button
        asChild
        className="bg-primary text-secondary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg min-w-[150px] text-center flex-1 sm:flex-auto"
      >
        <Link href="/customers/new">ثبت مشتری جدید</Link>
      </Button>

      <Button
        asChild
        className="bg-red-500 text-secondary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg min-w-[150px] text-center flex-1 sm:flex-auto"
      >
        <Link href="/customers/delete">حذف مشتری</Link>
      </Button>

      <Button
        asChild
        className="bg-yellow-500 text-accent-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg min-w-[150px] text-center flex-1 sm:flex-auto"
      >
        <Link href="/customers/edit">ویرایش مشتری</Link>
      </Button>

      <Button
        asChild
        className="bg-blue-500 text-secondary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg min-w-[150px] text-center flex-1 sm:flex-auto"
      >
        <Link href="/customers/details">اطلاعات مشتریان</Link>
      </Button>

      <Button
        asChild
        className="bg-indigo-600 text-secondary-foreground hover:text-white  px-4 sm:px-6 py-2 sm:py-3 rounded-lg min-w-[150px] text-center flex-1 sm:flex-auto"
      >
        <Link href="/customers/orders">سفارش‌های مشتریان</Link>
      </Button>
    </div>
  );
}

export default CustomersActions;
