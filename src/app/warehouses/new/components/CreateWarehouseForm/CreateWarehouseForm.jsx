"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import useWarehouseCapacity from "../../hook/useWarehouseCapacity";
import buildWarehousePayload from "../../utils/buildWarehousePayload";
import { createWarehouseWithStructureServer } from "../../actions/createWarehouseWithStructureServer";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import NumberInputField from "@/components/Form/NumberInputField/NumberInputField";
import TextareaField from "@/components/Form/TextareaField/TextareaField";
import TextInputField from "@/components/Form/TextInputField/TextInputField";

export default function CreateWarehouseForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();

  const { totalCapacity, isCapacityEqual } = useWarehouseCapacity(watch);

  const onSubmit = async (data) => {
    try {
      const payload = buildWarehousePayload(data);
      const createdWarehouse = await createWarehouseWithStructureServer(
        payload
      );

      toast.success("انبار با موفقیت ایجاد شد!");
      reset();
      router.replace("/warehouses");
    } catch (err) {
      toast.error("خطا در ایجاد انبار، لطفاً دوباره تلاش کنید.");
      toast.error(err);
    }
  };

  return (
    <form
      className="max-w-2xl my-2 mx-auto space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="p-6 max-w-2xl space-y-2 mx-auto" dir="rtl">
        <h1 className="text-2xl font-semibold text-foreground mb-6">
          تعریف انبار جدید
        </h1>

        {/* اطلاعات پایه انبار */}
        <TextInputField
          id="name"
          label="نام انبار"
          placeholder="نام انبار را وارد کنید"
          register={register}
          rules={{
            required: "وارد کردن نام انبار الزامی است",
            minLength: {
              value: 3,
              message: "نام انبار باید حداقل ۳ کاراکتر باشد",
            },
            maxLength: {
              value: 50,
              message: "نام انبار نباید بیش از ۵۰ کاراکتر باشد",
            },
          }}
          errors={errors}
        />

        <TextInputField
          id="location"
          label="مکان / آدرس"
          placeholder="مثلاً تهران، میدان آزادی"
          register={register}
          rules={{
            required: "وارد کردن مکان الزامی است",
            minLength: { value: 5, message: "آدرس باید حداقل ۵ کاراکتر باشد" },
            maxLength: {
              value: 100,
              message: "آدرس نباید بیش از ۱۰۰ کاراکتر باشد",
            },
          }}
          errors={errors}
        />

        <TextInputField
          id="capacity"
          label="ظرفیت کل"
          placeholder="مثلاً 1000"
          type="number"
          register={register}
          rules={{
            required: "ظرفیت الزامی است",
            min: { value: 1, message: "ظرفیت باید بزرگتر از 0 باشد" },
          }}
          errors={errors}
        />

        <TextInputField
          id="minStock"
          label="حداقل موجودی هشدار"
          placeholder="مثلاً 50"
          type="number"
          register={register}
          defaultValue={50}
          rules={{
            required: "وارد کردن حداقل موجودی الزامی است",
            min: {
              value: 50,
              message: "حداقل موجودی نمی‌تواند کمتر از 50 باشد",
            },
          }}
          errors={errors}
        />

        <TextareaField
          id="description"
          label="توضیحات"
          placeholder="اختیاری"
          register={register}
          errors={errors}
        />
        {/* ساختار انبار */}
        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-medium">ساختار انبار</h2>

          <NumberInputField
            id="zones"
            label="تعداد زون‌ها"
            placeholder="مثلاً 5"
            register={register}
            rules={{
              required: "وارد کردن تعداد زون الزامی است",
              min: { value: 1, message: "تعداد زون حداقل باید 1 باشد" },
              max: { value: 100, message: "تعداد زون نباید بیش از 100 باشد" },
            }}
            errors={errors}
          />

          <NumberInputField
            id="aisles"
            label="تعداد راهرو در هر زون"
            placeholder="مثلاً 4"
            register={register}
            rules={{
              required: "وارد کردن تعداد راهرو الزامی است",
              min: { value: 1, message: "حداقل باید 1 باشد" },
            }}
            errors={errors}
          />

          <NumberInputField
            id="racks"
            label="تعداد رک در هر راهرو"
            placeholder="مثلاً 20"
            register={register}
            rules={{
              required: "وارد کردن تعداد رک الزامی است",
              min: { value: 1, message: "حداقل باید 1 باشد" },
            }}
            errors={errors}
          />

          <NumberInputField
            id="shelves"
            label="تعداد طبقه در هر رک"
            placeholder="مثلاً 3"
            register={register}
            rules={{
              required: "وارد کردن تعداد طبقه الزامی است",
              min: { value: 1, message: "حداقل باید 1 باشد" },
            }}
            errors={errors}
          />
          {/* نمایش لحظه‌ای ظرفیت */}
          <div className="mt-4 font-bold">
            ظرفیت کل: {totalCapacity.toLocaleString()} قطعه
          </div>
          {!isCapacityEqual() && (
            <p className="text-destructive text-sm mt-1">
              عدم برابری ظرفیت انبار با ساختار انبار
            </p>
          )}
        </div>
      </div>

      {/* دکمه‌ها */}
      <div className="flex gap-4 mt-6">
        <Button
          type="submit"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg"
          disabled={!isCapacityEqual() || isSubmitting}
        >
          {isSubmitting ? "در حال ثبت..." : "ثبت"}
        </Button>

        <Button
          type="button"
          className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg"
        >
          لغو
        </Button>
      </div>
    </form>
  );
}
