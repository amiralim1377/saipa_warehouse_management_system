import Link from "next/link";
import { Button } from "@/components/ui/button";

function SuppliersActions() {
  return (
    <div className="flex flex-wrap gap-4 mt-4 justify-start">
      <Link href="/suppliers/new" className="w-full sm:w-[200px]">
        <Button className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-primary text-secondary-foreground text-center">
          افزودن تأمین‌کننده
        </Button>
      </Link>

      <Link href="/suppliers/delete" className="w-full sm:w-[200px]">
        <Button className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-red-500 text-secondary-foreground text-center">
          حذف تأمین‌کننده
        </Button>
      </Link>

      <Link href="/suppliers/edit" className="w-full sm:w-[200px]">
        <Button className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-yellow-500 text-secondary-foreground text-center">
          ویرایش تأمین‌کننده
        </Button>
      </Link>

      <Link href="/suppliers/details" className="w-full sm:w-[200px]">
        <Button className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-blue-500 text-secondary-foreground text-center">
          اطلاعات تأمین‌کنندگان
        </Button>
      </Link>
    </div>
  );
}

export default SuppliersActions;
