"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import TextInputField from "@/components/Form/TextInputField/TextInputField";
import SelectField from "@/components/Form/SelectField/SelectField";
import { useInventoryOutbound } from "../../context/InventoryOutboundProvider";
import { useWarehouseStructure } from "@/hooks/useWarehouseStructure/useWarehouseStructure";
import { useSubcategories } from "@/app/inventory/inbound/hook/useSubcategories";

function InventoryOutboundSearch() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
    watch,
  } = useForm();

  const { warehouses, categories } = useInventoryOutbound();

  const {
    zones,
    zonesLoading,
    aisles,
    aislesLoading,
    racks,
    racksLoading,
    shelves,
    shelvesLoading,
  } = useWarehouseStructure(control);

  const { data: subcategories, isLoading, error } = useSubcategories(control);
  const selectedCategory = watch("category");

  const onSubmit = (data) => {
    console.log("Search Params:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 mx-auto p-6"
      dir="rtl"
    >
      <h1 className="text-2xl font-semibold text-foreground mb-6">
        جستجوی قطعه
      </h1>

      {/* فیلد جستجو */}
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

      {/* بخش فیلتر موقعیت */}
      <h2 className="text-lg font-medium mt-6 mb-2">فیلتر موقعیت</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {/* انبار */}
        <SelectField
          name="warehouse"
          label="انبار"
          control={control}
          rules={{ required: "انتخاب انبار الزامی است" }}
          options={
            warehouses?.map((w) => ({
              value: String(w.id),
              label: w.name,
            })) ?? []
          }
          placeholder="انتخاب انبار"
          errors={errors}
        />

        {/* زون */}
        <SelectField
          name="zone"
          label="زون"
          control={control}
          placeholder="انتخاب زون"
          rules={{ required: "انتخاب زون الزامی است" }}
          loading={zonesLoading}
          options={
            zones?.length
              ? zones.map((z) => ({
                  value: String(z.id),
                  label: z.name,
                }))
              : []
          }
          errors={errors}
          disabled={!watch("warehouse")}
        />

        {/* راهرو */}
        <SelectField
          name="aisle"
          label="راهرو"
          control={control}
          placeholder="انتخاب راهرو"
          rules={{ required: "انتخاب راهرو الزامی است" }}
          loading={aislesLoading}
          options={
            aisles?.length
              ? aisles.map((a) => ({
                  value: String(a.id),
                  label: a.name,
                }))
              : []
          }
          errors={errors}
          disabled={!watch("zone")}
        />

        {/* رک */}
        <SelectField
          name="rack"
          label="رک"
          control={control}
          placeholder="انتخاب رک"
          rules={{ required: "انتخاب رک الزامی است" }}
          loading={racksLoading}
          options={
            racks?.length
              ? racks.map((r) => ({
                  value: String(r.id),
                  label: r.name,
                }))
              : []
          }
          errors={errors}
          disabled={!watch("aisle")}
        />

        {/* طبقه */}
        <SelectField
          name="shelf"
          label="طبقه"
          control={control}
          placeholder="انتخاب طبقه"
          rules={{ required: "انتخاب طبقه الزامی است" }}
          loading={shelvesLoading}
          options={
            shelves?.length
              ? shelves.map((s) => ({
                  value: String(s.id),
                  label: s.name,
                }))
              : []
          }
          errors={errors}
          disabled={!watch("rack")}
        />
      </div>

      {/* دسته‌بندی و زیر‌دسته  */}
      <SelectField
        name="category"
        label="دسته‌بندی قطعه"
        control={control}
        placeholder="انتخاب دسته‌بندی"
        rules={{ required: "انتخاب دسته‌بندی الزامی است" }}
        options={
          categories?.length
            ? [
                { value: "all", label: "همه دسته‌بندی‌ها" },
                ...categories.map((c) => ({
                  value: String(c.id),
                  label: c.name_fa || c.name,
                })),
              ]
            : []
        }
        errors={errors}
      />
      {/*   زیر‌دسته  */}

      <SelectField
        name="subcategory"
        label="زیر‌دسته"
        control={control}
        placeholder="انتخاب زیر‌دسته"
        rules={{ required: "انتخاب زیر‌دسته الزامی است" }}
        options={
          subcategories?.length
            ? [
                { value: "all", label: "همه زیر‌دسته‌ها" },
                ...subcategories.map((s) => ({
                  value: s.id,
                  label: s.name,
                })),
              ]
            : [{ value: "none", label: "ابتدا دسته‌بندی را انتخاب کنید" }]
        }
        disabled={!selectedCategory || isLoading}
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
