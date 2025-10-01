"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import TextInputField from "@/components/Form/TextInputField/TextInputField";
import SelectField from "@/components/Form/SelectField/SelectField";

function InventoryOutboundSearch({ warehouses = [] }) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Search Params:", data);
    // اینجا می‌تونی پارامترها رو به URL اضافه کنی یا API کال بزنی
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 mx-auto p-6"
      dir="rtl"
    >
      <h1 className="text-2xl font-semibold text-[var(--color-foreground)] mb-6">
        جستجوی قطعه
      </h1>

      <TextInputField
        id="query"
        label="نام قطعه یا کد فنی"
        placeholder="مثلاً فیلتر هوا یا FH-123"
        register={register}
        rules={{
          required: "این فیلد الزامی است",
          minLength: { value: 2, message: "حداقل ۲ کاراکتر وارد کنید" },
          setValueAs: (v) => (typeof v === "string" ? v.trim() : v),
        }}
        errors={errors}
      />

      <h2 className="text-lg font-medium mt-6 mb-2">فیلتر موقعیت</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <SelectField
          name="warehouse"
          label="انبار"
          control={control}
          rules={{ required: "انتخاب انبار الزامی است" }}
          options={warehouses.map((w) => ({
            value: String(w.id),
            label: w.name,
          }))}
          errors={errors}
        />

        <SelectField
          name="zone"
          label="زون"
          control={control}
          placeholder="انتخاب زون"
          rules={{ required: "انتخاب زون الزامی است" }}
          options={[
            { value: "all", label: "همه زون‌ها" },
            { value: "Z1", label: "زون 1" },
            { value: "Z2", label: "زون 2" },
          ]}
          errors={errors}
        />

        <SelectField
          name="aisle"
          label="راهرو"
          control={control}
          placeholder="انتخاب راهرو"
          rules={{ required: "انتخاب راهرو الزامی است" }}
          options={[
            { value: "all", label: "همه راهروها" },
            { value: "A1", label: "راهرو 1" },
            { value: "A2", label: "راهرو 2" },
            { value: "A3", label: "راهرو 3" },
          ]}
          errors={errors}
        />
        <SelectField
          name="rack"
          label="رک"
          control={control}
          placeholder="انتخاب رک"
          rules={{ required: "انتخاب رک الزامی است" }}
          options={[
            { value: "all", label: "همه رک‌ها" },
            { value: "R1", label: "رک 1" },
            { value: "R2", label: "رک 2" },
          ]}
          errors={errors}
        />

        <SelectField
          name="shelf"
          label="طبقه"
          control={control}
          placeholder="انتخاب طبقه"
          rules={{ required: "انتخاب طبقه الزامی است" }}
          options={[
            { value: "all", label: "همه طبقات" },
            { value: "L1", label: "طبقه 1" },
            { value: "L2", label: "طبقه 2" },
          ]}
          errors={errors}
        />
      </div>

      <SelectField
        name="category"
        label="دسته‌بندی قطعه"
        control={control}
        placeholder="انتخاب دسته‌بندی"
        rules={{ required: "انتخاب دسته‌بندی الزامی است" }}
        options={[
          { value: "all", label: "انتخاب کنید..." },
          { value: "موتوری", label: "موتوری" },
          { value: "برقی", label: "برقی" },
          { value: "بدنه", label: "بدنه" },
          { value: "ابزار", label: "ابزار" },
          { value: "زنجیر", label: "زنجیر" },
          { value: "سایر", label: "سایر" },
        ]}
        errors={errors}
      />

      <SelectField
        name="subcategory"
        label="زیر‌دسته"
        control={control}
        placeholder="انتخاب زیر‌دسته"
        rules={{ required: "انتخاب زیر‌دسته الزامی است" }}
        options={[
          { value: "all", label: "انتخاب کنید..." },
          { value: "فیلتر", label: "فیلتر" },
          { value: "پمپ", label: "پمپ" },
          { value: "سنسور", label: "سنسور" },
          { value: "پیچ و مهره", label: "پیچ و مهره" },
          { value: "واشر", label: "واشر" },
          { value: "سایر", label: "سایر" },
        ]}
        errors={errors}
      />

      <Button
        type="submit"
        className="bg-primary text-primary-foreground"
        disabled={isSubmitting}
      >
        {isSubmitting ? "در حال جستجو..." : "جست‌وجو"}
      </Button>
    </form>
  );
}

export default InventoryOutboundSearch;
