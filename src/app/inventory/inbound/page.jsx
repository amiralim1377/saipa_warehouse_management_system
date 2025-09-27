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

function InventoryInboundPage() {
  const [inboundType, setInboundType] = useState("");

  return (
    <div className="p-6 max-w-2xl mx-auto" dir="rtl">
      <h1 className="text-2xl font-semibold text-[var(--color-foreground)] mb-6">
        ثبت ورودی کالا
      </h1>

      <form className="space-y-4">
        {/* نوع ورودی */}
        <div>
          <Label htmlFor="inboundType">نوع ورودی</Label>
          <Select onValueChange={(value) => setInboundType(value)}>
            <SelectTrigger id="inboundType" className="w-full">
              <SelectValue placeholder="انتخاب نوع ورودی" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="receipt">رسید کالا</SelectItem>
              <SelectItem value="return">برگشتی از مشتری</SelectItem>
              <SelectItem value="production">تولید داخلی</SelectItem>
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

        {/* شماره رسید (فقط برای رسید کالا) */}
        {inboundType === "receipt" && (
          <div>
            <Label htmlFor="receiptNumber">شماره رسید</Label>
            <Input
              id="receiptNumber"
              type="text"
              placeholder="شماره رسید کالا"
            />
          </div>
        )}

        {/* تاریخ */}
        <div>
          <Label htmlFor="date">تاریخ ورود</Label>
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

export default InventoryInboundPage;
