"use client";
import React from "react";
import { Bell, AlertTriangle, User } from "lucide-react"; // آیکون‌ها

const notifications = [
  {
    id: 1,
    type: "manager",
    message: "مدیر انبار: لطفاً موجودی انبار شماره ۲ را بررسی کنید.",
    icon: <User className="w-5 h-5 text-blue-600" />,
  },
  {
    id: 2,
    type: "warning",
    message: "هشدار: کالاهای گروه A زیر حداقل موجودی هستند.",
    icon: <AlertTriangle className="w-5 h-5 text-red-600" />,
  },
  {
    id: 3,
    type: "info",
    message: "یادآوری: جلسه بررسی موجودی فردا ساعت ۱۰ برگزار می‌شود.",
    icon: <Bell className="w-5 h-5 text-amber-500" />,
  },
];

function DashboardNotifications() {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow p-4 border border-border">
      <h2 className="text-lg font-semibold mb-4">اعلان‌ها</h2>
      <ul className="space-y-3">
        {notifications.map((note) => (
          <li
            key={note.id}
            className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted transition"
          >
            {note.icon}
            <span className="text-sm">{note.message}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DashboardNotifications;
