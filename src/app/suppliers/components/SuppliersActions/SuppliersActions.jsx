import Link from "next/link";
import { Button } from "@/components/ui/button";

function SuppliersActions() {
  return (
    <div className="flex flex-wrap gap-3 mt-4 justify-start">
      <Link href="/suppliers/new">
        <Button className="bg-primary text-secondary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto text-center flex-1 sm:flex-auto min-w-[150px]">
          افزودن تأمین‌کننده
        </Button>
      </Link>

      <Link href="/suppliers/delete">
        <Button className="bg-red-500 text-secondary-foreground   px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto text-center flex-1 sm:flex-auto min-w-[150px]">
          حذف تأمین‌کننده
        </Button>
      </Link>

      <Link href="/suppliers/edit">
        <Button className="bg-yellow-500 text-secondary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto text-center flex-1 sm:flex-auto min-w-[150px]">
          ویرایش تأمین‌کننده
        </Button>
      </Link>

      <Link href="/suppliers/details">
        <Button className="bg-blue-500 text-secondary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto text-center flex-1 sm:flex-auto min-w-[150px]">
          اطلاعات تأمین‌کنندگان
        </Button>
      </Link>
    </div>
  );
}

export default SuppliersActions;
