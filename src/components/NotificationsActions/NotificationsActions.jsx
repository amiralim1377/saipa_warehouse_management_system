"use client";

import { Button } from "@/components/ui/button";

export default function NotificationsActions() {
  return (
    <div className="flex gap-4 flex-wrap mt-4">
      <Button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg">
        علامت‌گذاری همه خوانده شده
      </Button>
      <Button className="bg-destructive text-destructive-foreground px-6 py-3 rounded-lg">
        حذف اعلان‌ها
      </Button>
      <Button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg">
        فیلتر هشدارها
      </Button>
    </div>
  );
}
