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

export default function ReportsFilters() {
  return (
    <div className="p-4 bg-card rounded-lg flex flex-wrap gap-4 items-end">
      {/* فیلتر بر اساس تاریخ شروع */}
      <div>
        <Label htmlFor="startDate">تاریخ شروع</Label>
        <Input id="startDate" type="date" />
      </div>

      {/* فیلتر بر اساس تاریخ پایان */}
      <div>
        <Label htmlFor="endDate">تاریخ پایان</Label>
        <Input id="endDate" type="date" />
      </div>

      {/* فیلتر بر اساس نوع مشتری */}
      <div>
        <Label htmlFor="customerType">نوع مشتری</Label>
        <Select>
          <SelectTrigger id="customerType" className="w-40">
            <SelectValue placeholder="انتخاب نوع مشتری" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">همه</SelectItem>
            <SelectItem value="wholesale">عمده</SelectItem>
            <SelectItem value="retail">خرد</SelectItem>
            <SelectItem value="special">خاص</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* فیلتر بر اساس انبار */}
      <div>
        <Label htmlFor="warehouse">انبار</Label>
        <Select>
          <SelectTrigger id="warehouse" className="w-40">
            <SelectValue placeholder="انتخاب انبار" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">همه انبارها</SelectItem>
            <SelectItem value="w1">انبار ۱</SelectItem>
            <SelectItem value="w2">انبار ۲</SelectItem>
            <SelectItem value="w3">انبار ۳</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* دکمه اعمال فیلتر */}
      <Button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg">
        اعمال فیلتر
      </Button>
    </div>
  );
}
