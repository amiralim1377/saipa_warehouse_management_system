import SelectField from "@/components/Form/SelectField/SelectField";
import TextInputField from "@/components/Form/TextInputField/TextInputField";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useWarehouseStructure } from "@/hooks/useWarehouseStructure/useWarehouseStructure";
import { useOrder } from "../../context/OrderContext";
import { useSubcategories } from "@/hooks/useSubcategories/useSubcategories";
import { useRouter } from "next/navigation";

function PartFilterSearch() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
    watch,
  } = useForm();

  const { warehouses, categories } = useOrder();
  const selectedCategory = watch("category");

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

  const onSubmit = (data) => {
    const params = new URLSearchParams();

    // همه فیلدهایی که مقدار دارند رو اضافه می‌کنیم، حتی "all"
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        params.append(key, String(value));
      }
    });

    const url = `/orders/sales/new?${params.toString()}`;

    console.log("Generated URL:", url);

    // مثلا ریدایرکت یا fetch
    router.push(url);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 mx-auto p-6"
      dir="rtl"
    >
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
            warehouses?.length
              ? [
                  { value: "all", label: "همه انبارها" },
                  ...warehouses.map((w) => ({
                    value: String(w.id),
                    label: w.name,
                  })),
                ]
              : []
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
          rules={{
            required:
              watch("warehouse") && watch("warehouse") !== "all"
                ? "انتخاب زون الزامی است"
                : false,
          }}
          loading={zonesLoading}
          options={
            zones?.length
              ? [
                  { value: "all", label: "همه زون‌ها" },
                  ...zones.map((z) => ({
                    value: String(z.id),
                    label: z.name,
                  })),
                ]
              : []
          }
          errors={errors}
          disabled={!watch("warehouse") || watch("warehouse") === "all"}
        />

        {/* راهرو */}
        <SelectField
          name="aisle"
          label="راهرو"
          control={control}
          placeholder="انتخاب راهرو"
          rules={{
            required:
              watch("zone") && watch("zone") !== "all"
                ? "انتخاب راهرو الزامی است"
                : false,
          }}
          loading={aislesLoading}
          options={
            aisles?.length
              ? [
                  { value: "all", label: "همه راهروها" },
                  ...aisles.map((a) => ({
                    value: String(a.id),
                    label: a.name,
                  })),
                ]
              : []
          }
          errors={errors}
          disabled={!watch("zone") || watch("zone") === "all"}
        />

        {/* رک */}
        <SelectField
          name="rack"
          label="رک"
          control={control}
          placeholder="انتخاب رک"
          rules={{
            required:
              watch("aisle") && watch("aisle") !== "all"
                ? "انتخاب رک الزامی است"
                : false,
          }}
          loading={racksLoading}
          options={
            racks?.length
              ? [
                  { value: "all", label: "همه رک‌ها" },
                  ...racks.map((r) => ({
                    value: String(r.id),
                    label: r.name,
                  })),
                ]
              : []
          }
          errors={errors}
          disabled={!watch("aisle") || watch("aisle") === "all"}
        />

        {/* طبقه */}
        <SelectField
          name="shelf"
          label="طبقه"
          control={control}
          placeholder="انتخاب طبقه"
          rules={{
            required:
              watch("rack") && watch("rack") !== "all"
                ? "انتخاب طبقه الزامی است"
                : false,
          }}
          loading={shelvesLoading}
          options={
            shelves?.length
              ? [
                  { value: "all", label: "همه طبقات" },
                  ...shelves.map((s) => ({
                    value: String(s.id),
                    label: s.name,
                  })),
                ]
              : []
          }
          errors={errors}
          disabled={!watch("rack") || watch("rack") === "all"}
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
          categories?.categories?.length
            ? [
                { value: "all", label: "همه دسته‌بندی‌ها" },
                ...categories?.categories.map((c) => ({
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
        ص
        control={control}
        placeholder="انتخاب زیر‌دسته"
        rules={
          selectedCategory && selectedCategory !== "all"
            ? { required: "انتخاب زیر‌دسته الزامی است" }
            : {}
        }
        options={
          subcategories?.length
            ? [
                { value: "all", label: "همه زیر‌دسته‌ها" },
                ...subcategories.map((s) => ({
                  value: s.id,
                  label: s.name,
                })),
              ]
            : [
                {
                  value: "placeholder",
                  label: "ابتدا دسته‌بندی را انتخاب کنید",
                  disabled: true,
                },
              ]
        }
        disabled={!selectedCategory || selectedCategory === "all" || isLoading}
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

export default PartFilterSearch;
