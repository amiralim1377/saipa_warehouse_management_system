import Link from "next/link";
import { Button } from "@/components/ui/button";

function SuppliersActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 flex-wrap justify-start">
      <Link href="/suppliers/new">
        <Button className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto text-center">
          افزودن تأمین‌کننده
        </Button>
      </Link>

      <Link href="/suppliers/edit">
        <Button className="bg-accent text-accent-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto text-center">
          ویرایش تأمین‌کننده
        </Button>
      </Link>

      <Link href="/suppliers/delete">
        <Button className="bg-secondary text-secondary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto text-center">
          حذف تأمین‌کننده
        </Button>
      </Link>

      <Link href="/suppliers/details">
        <Button className="bg-secondary text-secondary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-auto text-center">
          اطلاعات تأمین‌کنندگان
        </Button>
      </Link>
    </div>
  );
}

export default SuppliersActions;
