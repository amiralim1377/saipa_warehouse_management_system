"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

function OutboundForm({ product }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      quantity: 1,
      order_number: "",
      description: "",
    },
  });

  const stock = product?.stock || 0;
  const quantityValue = watch("quantity");

  const onSubmit = async (data) => {
    if (data.quantity > stock) {
      alert(`⚠️ تعداد خروجی نمی‌تواند بیشتر از موجودی (${stock}) باشد!`);
      return;
    }

    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 p-6 max-w-3xl mx-auto bg-card text-foreground rounded-lg"
    >
      <h1 className="text-2xl font-bold mb-6">📦 فرم خروجی قطعه</h1>

      {/* نام قطعه */}
      <div>
        <label className="block mb-1 font-medium">نام قطعه</label>
        <input
          type="text"
          value={product?.part_name || ""}
          readOnly
          className="w-full px-3 py-2 rounded-md border border-border bg-input text-foreground"
        />
      </div>

      {/* کد فنی */}
      <div>
        <label className="block mb-1 font-medium">کد فنی</label>
        <input
          type="text"
          value={product?.part_code || ""}
          readOnly
          className="w-full px-3 py-2 rounded-md border border-border bg-input text-foreground"
        />
      </div>

      {/* موجودی */}
      <div>
        <label className="block mb-1 font-medium">موجودی فعلی</label>
        <input
          type="number"
          value={stock}
          readOnly
          className="w-full px-3 py-2 rounded-md border border-border bg-input text-foreground"
        />
      </div>

      {/* محل ذخیره */}
      <div>
        <label className="block mb-1 font-medium">انبار</label>
        <input
          type="text"
          value={product?.warehouses?.name || ""}
          readOnly
          className="w-full px-3 py-2 rounded-md border border-border bg-input text-foreground"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">زون</label>
          <input
            type="text"
            value={product?.zones?.name || ""}
            readOnly
            className="w-full px-3 py-2 rounded-md border border-border bg-input text-foreground"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">راهرو</label>
          <input
            type="text"
            value={product?.aisles?.name || ""}
            readOnly
            className="w-full px-3 py-2 rounded-md border border-border bg-input text-foreground"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">رک</label>
          <input
            type="text"
            value={product?.racks?.name || ""}
            readOnly
            className="w-full px-3 py-2 rounded-md border border-border bg-input text-foreground"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">شلف</label>
          <input
            type="text"
            value={product?.shelves?.name || ""}
            readOnly
            className="w-full px-3 py-2 rounded-md border border-border bg-input text-foreground"
          />
        </div>
      </div>

      {/* تعداد خروجی */}
      <div>
        <label className="block mb-1 font-medium">تعداد خروجی</label>
        <input
          type="number"
          {...register("quantity", { required: true, min: 1 })}
          className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
          placeholder="مثلاً 2"
        />
        {quantityValue > stock && (
          <p className="text-destructive text-sm mt-1">
            تعداد خروجی بیشتر از موجودی است!
          </p>
        )}
        {errors.quantity && (
          <p className="text-destructive text-sm mt-1">این فیلد الزامی است</p>
        )}
      </div>

      {/* شماره سفارش */}
      <div>
        <label className="block mb-1 font-medium">شماره سفارش / حواله</label>
        <input
          type="text"
          {...register("order_number", { required: true })}
          className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
          placeholder="ORD-2025-001"
        />
        {errors.order_number && (
          <p className="text-destructive text-sm mt-1">این فیلد الزامی است</p>
        )}
      </div>

      {/* توضیحات */}
      <div>
        <label className="block mb-1 font-medium">توضیحات</label>
        <textarea
          {...register("description")}
          className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
          rows={3}
          placeholder="توضیحات تکمیلی..."
        />
      </div>

      {/* Hidden fields برای ارسال به دیتابیس */}
      <input type="hidden" {...register("part_id")} value={product.id} />
      <input
        type="hidden"
        {...register("part_name")}
        value={product.part_name}
      />
      <input
        type="hidden"
        {...register("part_code")}
        value={product.part_code}
      />
      <input type="hidden" {...register("stock")} value={product.stock} />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 bg-primary text-primary-foreground"
      >
        {isSubmitting ? "در حال ثبت..." : "ثبت خروجی"}
      </Button>
    </form>
  );
}

export default OutboundForm;
