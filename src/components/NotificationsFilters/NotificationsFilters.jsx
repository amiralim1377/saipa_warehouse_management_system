"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function NotificationsFilters() {
  return (
    <div className="p-4 bg-card rounded-lg flex flex-wrap gap-4 items-end">
      {/* نوع اعلان */}
      <div>
        <Label htmlFor="type">نوع اعلان</Label>
        <Select>
          <SelectTrigger id="type" className="w-40">
            <SelectValue placeholder="انتخاب نوع اعلان" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">همه</SelectItem>
            <SelectItem value="lowStock">هشدار موجودی پایین</SelectItem>
            <SelectItem value="inbound">ورود کالا</SelectItem>
            <SelectItem value="outbound">خروج کالا</SelectItem>
            <SelectItem value="order">سفارش جدید</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* وضعیت خوانده شده */}
      <div>
        <Label htmlFor="status">وضعیت</Label>
        <Select>
          <SelectTrigger id="status" className="w-40">
            <SelectValue placeholder="انتخاب وضعیت" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">همه</SelectItem>
            <SelectItem value="unread">خوانده نشده</SelectItem>
            <SelectItem value="read">خوانده شده</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* جستجوی متن */}
      <div>
        <Label htmlFor="search">جستجو</Label>
        <Input id="search" placeholder="جستجوی اعلان..." />
      </div>

      {/* دکمه اعمال فیلتر */}
      <Button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg">
        اعمال فیلتر
      </Button>
    </div>
  );
}
