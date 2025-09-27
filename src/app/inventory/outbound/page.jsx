"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function InventoryOutboundPage() {
  const [outboundType, setOutboundType] = useState("");

  return (
    <div className="p-6 max-w-2xl mx-auto" dir="rtl">
      <h1 className="text-2xl font-semibold text-[var(--color-foreground)] mb-6">
        ثبت خروجی کالا
      </h1>

      <form className="space-y-4">
        {/* نوع خروجی */}
        <div>
          <Label htmlFor="outboundType">نوع خروجی</Label>
          <Select onValueChange={(value) => setOutboundType(value)}>
            <SelectTrigger id="outboundType" className="w-full">
              <SelectValue placeholder="انتخاب نوع خروجی" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sale">ارسال به فروشگاه / مشتری</SelectItem>
              <SelectItem value="internal">مصرف داخلی / تولید</SelectItem>
              <SelectItem value="gift">هدیه / نمونه</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* کالا */}
        <div>
          <Label htmlFor="product">کالا</Label>
          <Select>
            <SelectTrigger id="product" className="w-full">
              <SelectValue placeholder="انتخاب کالا" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="product1">کالا ۱</SelectItem>
              <SelectItem value="product2">کالا ۲</SelectItem>
              <SelectItem value="product3">کالا ۳</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* تعداد */}
        <div>
          <Label htmlFor="quantity">تعداد</Label>
          <Input id="quantity" type="number" placeholder="تعداد کالا" />
        </div>

        {/* مقصد خروجی */}
        {outboundType === "sale" && (
          <div>
            <Label htmlFor="destination">مقصد فروش</Label>
            <Input
              id="destination"
              type="text"
              placeholder="مثلاً فروشگاه یا مشتری"
            />
          </div>
        )}

        {/* تاریخ */}
        <div>
          <Label htmlFor="date">تاریخ خروج</Label>
          <Input id="date" type="date" />
        </div>

        {/* توضیحات */}
        <div>
          <Label htmlFor="description">توضیحات</Label>
          <Textarea
            id="description"
            placeholder="در صورت نیاز توضیح وارد کنید"
          />
        </div>

        {/* دکمه‌ها */}
        <div className="flex gap-4 mt-4">
          <Button
            type="submit"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg"
          >
            ثبت
          </Button>
          <Button
            type="button"
            className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg"
          >
            لغو
          </Button>
        </div>
      </form>
    </div>
  );
}

export default InventoryOutboundPage;
