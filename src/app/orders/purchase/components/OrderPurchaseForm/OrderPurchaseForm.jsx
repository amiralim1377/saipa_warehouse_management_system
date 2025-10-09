"use client";
import React from "react";
import { Button } from "@/components/ui/button";

import SelectField from "@/components/Form/SelectField/SelectField";
import { useForm } from "react-hook-form";
import DateInput from "@/components/Form/DateInput/DateInput";
import TextInputField from "@/components/Form/TextInputField/TextInputField";
import NumberInputField from "@/components/Form/NumberInputField/NumberInputField";
import TextareaField from "@/components/Form/TextareaField/TextareaField";
import { UNITS } from "@/data/units";

function OrderPurchaseForm({ suppliers }) {
  const handleAddItem = () => {};

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = (data) => {
    console.log("ثبت سفارش با داده‌ها:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-6 max-w-4xl mx-auto" dir="rtl">
        <h1 className="text-2xl font-semibold mb-6">ثبت سفارش خرید</h1>

        <div className="mb-6">
          <SelectField
            name="supplier"
            label="تامین‌کننده"
            control={control}
            errors={errors}
            options={suppliers.map((s) => ({ value: s.id, label: s.name }))}
          />
        </div>

        <div className="mb-6">
          <DateInput
            name="orderDate"
            label="تاریخ ثبت سفارش"
            control={control}
            errors={errors}
            rules={{ required: "تاریخ ثبت سفارش اجباری است" }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end mb-6">
          <div>
            <TextInputField
              id="productName"
              label="نام کالا"
              placeholder="نام کالا"
              register={register}
              rules={{ required: "نام کالا را وارد کنید" }}
              errors={errors}
            />
          </div>

          <div>
            <NumberInputField
              id="quantity"
              label="تعداد"
              placeholder="تعداد"
              register={register}
              rules={{ required: "تعداد را وارد کنید" }}
              errors={errors}
            />
          </div>

          <div>
            <SelectField
              name="unit"
              label="واحد"
              control={control}
              rules={{ required: "واحد را انتخاب کنید" }}
              errors={errors}
              options={UNITS}
            />
          </div>

          <div>
            <NumberInputField
              id="unitPrice"
              label="قیمت واحد (تومان)"
              placeholder="قیمت واحد"
              register={register}
              rules={{ required: "قیمت واحد را وارد کنید" }}
              errors={errors}
            />
          </div>
        </div>

        <div className="mb-6">
          <TextareaField
            id="description"
            label="توضیحات سفارش"
            placeholder="توضیحات کلی سفارش را وارد کنید"
            register={register}
            rules={{ required: "وارد کردن توضیحات الزامی است" }}
            errors={errors}
          />
        </div>

        <div className="mb-6">
          <Button
            type="button"
            onClick={handleAddItem}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary-dark transition"
          >
            افزودن کالا
          </Button>
        </div>

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

export default OrderPurchaseForm;
