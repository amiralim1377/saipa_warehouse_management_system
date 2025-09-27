"use client";

export default function NotificationsStats() {
  // داده نمونه
  const totalNotifications = 25;
  const unreadNotifications = 7;

  return (
    <div className="p-4 bg-card rounded-lg flex gap-6">
      {/* کل اعلان‌ها */}
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold text-foreground">
          {totalNotifications}
        </span>
        <span className="text-sm text-muted-foreground">کل اعلان‌ها</span>
      </div>

      {/* اعلان‌های خوانده نشده */}
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold text-destructive">
          {unreadNotifications}
        </span>
        <span className="text-sm text-muted-foreground">خوانده نشده</span>
      </div>
    </div>
  );
}
