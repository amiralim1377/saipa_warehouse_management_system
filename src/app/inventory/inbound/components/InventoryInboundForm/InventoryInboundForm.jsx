"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import CategorySelect from "../CategorySelect/CategorySelect";
import { useInventoryInbound } from "../../context/InventoryInboundProvider";
import SubcategorySelect from "../SubcategorySelect/SubcategorySelect";
import UnitSelect from "../UnitSelect/UnitSelect";
import LocationInput from "../LocationInput/LocationInput";
import WarehouseSelect from "../WarehouseSelect/WarehouseSelect";
import InboundTypeSelect from "../InboundTypeSelect/InboundTypeSelect";
import PartCodeInput from "../PartCodeInput/PartCodeInput";
import PartNameInput from "../PartNameInput/PartNameInput";
import StockInput from "../StockInput/StockInput";
import StatusSelect from "../StatusSelect/StatusSelect";
import SupplierInput from "../SupplierInput/SupplierInput";
import EntryDateInput from "../EntryDateInput/EntryDateInput";
import UnitPriceInput from "../UnitPriceInput/UnitPriceInput";
import DescriptionTextarea from "../DescriptionTextarea/DescriptionTextarea";
import { useSubcategories } from "../../hook/useSubcategories";

export default function InventoryInboundForm() {
  const {
    categories,
    setCategories,
    warehouses,
    setWarehouses,
    inboundType,
    setInboundType,
  } = useInventoryInbound();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      inboundType,
      partCode: "",
      partName: "",
      stock: 0,
      status: "",
      categories,
      subcategory: "",
      unit: "",
      location: "",
      warehouses,
      supplier: "",
      entryDate: "",
      unitPrice: 0,
      description: "",
    },
  });

  const {
    selectedCategoryId,
    data: subcategories,
    isLoading,
    error,
  } = useSubcategories(control);

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto" dir="rtl">
      <h1 className="text-2xl font-semibold text-foreground mb-6">
        ثبت ورودی کالا
      </h1>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* نوع ورودی */}
        <InboundTypeSelect control={control} errors={errors} />

        {/* کد قطعه */}
        <PartCodeInput register={register} errors={errors} />

        {/* نام قطعه */}
        <PartNameInput register={register} errors={errors} />

        {/* تعداد */}
        <StockInput register={register} errors={errors} />

        {/* وضعیت */}
        <StatusSelect control={control} errors={errors} />

        {/* دسته‌بندی */}
        <CategorySelect
          control={control}
          errors={errors}
          categories={categories}
        />

        {/* زیرمجموعه */}
        <SubcategorySelect
          control={control}
          errors={errors}
          subcategories={subcategories || []}
          disabled={isLoading || !subcategories?.length}
        />

        {/* واحد */}
        <UnitSelect control={control} errors={errors} />

        {/* انبار */}
        <WarehouseSelect
          control={control}
          errors={errors}
          warehouses={warehouses}
        />

        {/* مکان */}
        <LocationInput register={register} errors={errors} />

        {/* تامین‌کننده */}
        <SupplierInput register={register} errors={errors} />

        {/* تاریخ ورود */}
        <EntryDateInput control={control} errors={errors} />

        {/* قیمت واحد */}
        <UnitPriceInput register={register} errors={errors} />

        {/* توضیحات */}
        <DescriptionTextarea register={register} />

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
