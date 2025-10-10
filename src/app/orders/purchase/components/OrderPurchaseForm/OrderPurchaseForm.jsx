"use client";

import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import SelectField from "@/components/Form/SelectField/SelectField";
import DateInput from "@/components/Form/DateInput/DateInput";
import TextareaField from "@/components/Form/TextareaField/TextareaField";
import { UNITS } from "@/data/units";
import TextInputFieldNested from "@/components/Form/TextInputFieldNested/TextInputFieldNested";
import NumberInputFieldNested from "@/components/Form/NumberInputFieldNested/NumberInputFieldNested";
import SelectFieldNested from "@/components/Form/SelectFieldNested/SelectFieldNested";
import TextareaFieldNested from "@/components/Form/TextareaFieldNested/TextareaFieldNested";

export default function OrderPurchaseForm({ suppliers }) {
  // مقداردهی اولیه فرم
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: {
      supplier: "",
      orderDate: "",
      description: "",
      items: [
        {
          productName: "",
          quantity: "",
          unit: "",
          unitPrice: "",
          description: "",
        },
      ],
    },
  });

  // مدیریت فیلدهای تکرارشونده (محصولات)
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  // افزودن یک ردیف جدید
  const handleAddItem = () => {
    append({
      productName: "",
      quantity: "",
      unit: "",
      unitPrice: "",
      description: "",
    });
  };

  // ارسال فرم
  const onSubmit = (data) => {
    console.log("📦 داده‌های سفارش:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-6 max-w-5xl mx-auto" dir="rtl">
        <h1 className="text-2xl font-semibold mb-6">ثبت سفارش خرید</h1>

        {/* تامین‌کننده */}
        <div className="mb-6">
          <SelectField
            name="supplier"
            label="تامین‌کننده"
            control={control}
            errors={errors}
            options={suppliers.map((s) => ({ value: s.id, label: s.name }))}
            rules={{ required: "انتخاب تامین‌کننده الزامی است" }}
          />
        </div>

        {/* تاریخ ثبت سفارش */}
        <div className="mb-6">
          <DateInput
            name="orderDate"
            label="تاریخ ثبت سفارش"
            control={control}
            errors={errors}
            rules={{ required: "تاریخ ثبت سفارش اجباری است" }}
          />
        </div>

        {/* لیست کالاها */}
        {fields.map((item, index) => (
          <div
            key={item.id}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end mb-6 border rounded-xl p-4"
          >
            <div className="w-full">
              <TextInputFieldNested
                id={`items.${index}.productName`}
                label="نام کالا"
                placeholder="نام کالا"
                register={register}
                rules={{ required: "نام کالا را وارد کنید" }}
                errors={errors}
              />
            </div>

            <div className="w-full">
              <NumberInputFieldNested
                id={`items.${index}.quantity`}
                label="تعداد"
                placeholder="تعداد"
                register={register}
                rules={{ required: "تعداد را وارد کنید" }}
                errors={errors}
                className="w-full"
              />
            </div>

            <div className="w-full">
              <SelectFieldNested
                name={`items.${index}.unit`}
                label="واحد"
                control={control}
                rules={{ required: "واحد را انتخاب کنید" }}
                errors={errors}
                options={UNITS}
                className="w-full"
              />
            </div>

            <div className="w-full">
              <NumberInputFieldNested
                id={`items.${index}.unitPrice`}
                label="قیمت واحد (تومان)"
                placeholder="قیمت واحد"
                register={register}
                rules={{ required: "قیمت واحد را وارد کنید" }}
                errors={errors}
                className="w-full"
              />
            </div>

            <div className="col-span-1 sm:col-span-2 lg:col-span-4 mt-4">
              <TextareaFieldNested
                id={`items.${index}.description`}
                label="توضیحات کالا"
                placeholder="توضیحات مربوط به این کالا را وارد کنید"
                register={register}
                errors={errors}
                className="w-full"
              />
            </div>

            <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex justify-end mt-2">
              {fields.length > 1 && (
                <Button
                  type="button"
                  onClick={() => remove(index)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 text-sm rounded-lg"
                >
                  حذف ردیف
                </Button>
              )}
            </div>
          </div>
        ))}

        {/* افزودن کالا */}
        <div className="mb-6">
          <Button
            type="button"
            onClick={handleAddItem}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary-dark transition"
          >
            افزودن کالا
          </Button>
        </div>

        {/* توضیحات سفارش */}
        <div className="mb-6">
          <TextareaField
            id="description"
            label="توضیحات کلی سفارش"
            placeholder="توضیحات کلی سفارش را وارد کنید"
            register={register}
            errors={errors}
          />
        </div>

        {/* ثبت سفارش */}
        <div>
          <Button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
          >
            ثبت سفارش
          </Button>
        </div>
      </div>
    </form>
  );
}
