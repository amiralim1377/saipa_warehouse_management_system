"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import updateStockQuantity from "../actions/updateStockQuantity";
import { useRouter } from "next/navigation";

export default function IncreaseStockForm({ targetProducts }) {
  const router = useRouter();
  const product = targetProducts?.[0];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      increaseAmount: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const increase = Number(data.increaseAmount);
      if (!increase || increase <= 0) {
        toast.error("مقدار افزایش معتبر نیست.");
        return;
      }

      const response = await updateStockQuantity(product.id, increase);

      if (response.success) {
        toast.success(response.message || "موجودی با موفقیت بروزرسانی شد");
        router.replace("/inventory");
      } else {
        toast.error(response.message || "خطایی در بروزرسانی موجودی رخ داد.");
      }
    } catch (error) {
      toast.error("خطایی در فرآیند بروزرسانی رخ داد.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto p-6 space-y-4"
      dir="rtl"
    >
      <h2 className="text-xl font-semibold text-center mb-4">
        افزایش موجودی کالا
      </h2>

      <div>
        <Label>نام کالا</Label>
        <Input value={product?.part_name || "-"} readOnly />
      </div>

      <div>
        <Label>کد کالا</Label>
        <Input value={product?.part_code || "-"} readOnly />
      </div>

      <div>
        <Label>مکان کالا</Label>
        <Input value={product?.location || "-"} readOnly />
      </div>

      <div>
        <Label>واحد</Label>
        <Input value={product?.unit || "-"} readOnly />
      </div>

      <div>
        <Label>موجودی فعلی</Label>
        <Input value={product?.stock ?? 0} readOnly />
      </div>

      <div>
        <Label>افزایش موجودی</Label>
        <Input
          type="number"
          placeholder="مثلاً 50"
          {...register("increaseAmount", {
            required: "مقدار افزایش را وارد کنید",
            min: { value: 1, message: "حداقل مقدار افزایش ۱ است" },
          })}
        />
        {errors.increaseAmount && (
          <p className="text-red-500 text-sm mt-1">
            {errors.increaseAmount.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "در حال ثبت..." : "ثبت افزایش موجودی"}
      </Button>
    </form>
  );
}
