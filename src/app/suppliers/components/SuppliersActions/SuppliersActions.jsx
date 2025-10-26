import Link from "next/link";
import { Button } from "@/components/ui/button";

function SuppliersActions() {
  return (
    <div className="flex gap-4 mt-4 flex-wrap">
      <Link href="/suppliers/new">
        <Button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg">
          افزودن تأمین‌کننده
        </Button>
      </Link>

      <Link href="/suppliers/edit">
        <Button className="bg-accent text-accent-foreground px-6 py-3 rounded-lg">
          ویرایش تأمین‌کننده
        </Button>
      </Link>

      <Link href="/suppliers/delete">
        <Button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg">
          حذف تأمین‌کننده
        </Button>
      </Link>

      <Link href="/suppliers/details">
        <Button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg">
          اطلاعات تامین کنندگان{" "}
        </Button>
      </Link>
    </div>
  );
}

export default SuppliersActions;
