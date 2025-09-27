"use client";

import { Button } from "@/components/ui/button";

export default function NotificationsTable() {
  // داده نمونه
  const notifications = [
    {
      id: 1,
      title: "موجودی پایین قطعه A",
      type: "هشدار",
      date: "2025-09-27",
      read: false,
    },
    {
      id: 2,
      title: "ورود کالا B به انبار",
      type: "اعلان",
      date: "2025-09-26",
      read: true,
    },
    {
      id: 3,
      title: "موجودی پایین قطعه C",
      type: "هشدار",
      date: "2025-09-25",
      read: false,
    },
  ];

  return (
    <div className="overflow-x-auto mt-4">
      <table className="w-full text-sm border border-border rounded-lg">
        <thead className="bg-card">
          <tr>
            <th className="p-3 text-foreground text-right">عنوان</th>
            <th className="p-3 text-foreground text-right">نوع</th>
            <th className="p-3 text-foreground text-right">تاریخ</th>
            <th className="p-3 text-foreground text-right">وضعیت</th>
            <th className="p-3 text-foreground text-right">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((n) => (
            <tr key={n.id} className={n.read ? "bg-muted/20" : "bg-card"}>
              <td className="p-3 text-foreground">{n.title}</td>
              <td className="p-3 text-foreground">{n.type}</td>
              <td className="p-3 text-foreground">{n.date}</td>
              <td
                className={`p-3 font-semibold ${
                  n.read ? "text-muted-foreground" : "text-destructive"
                }`}
              >
                {n.read ? "خوانده شده" : "خوانده نشده"}
              </td>
              <td className="p-3 flex gap-2">
                {!n.read && (
                  <Button
                    size="sm"
                    className="bg-primary text-primary-foreground"
                  >
                    علامت‌گذاری خوانده شده
                  </Button>
                )}
                <Button
                  size="sm"
                  className="bg-destructive text-destructive-foreground"
                >
                  حذف
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
