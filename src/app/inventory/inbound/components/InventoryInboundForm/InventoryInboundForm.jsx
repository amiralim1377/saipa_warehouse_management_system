"use client";
import { useForm, FormProvider } from "react-hook-form";
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
import EntryDateInput from "../EntryDateInput/EntryDateInput";
import UnitPriceInput from "../UnitPriceInput/UnitPriceInput";
import DescriptionTextarea from "../DescriptionTextarea/DescriptionTextarea";
import { useSubcategories } from "../../hook/useSubcategories";
import SupplierSelect from "../SupplierSelect/SupplierSelect";
import { useWarehouseZones } from "../../hook/useWarehouseZones";
import { ZoneSelect } from "../ZoneSelect/ZoneSelect";
import { AisleSelect } from "../AisleSelect/AisleSelect";
import { useAislesByZone } from "../../hook/useAislesByZone";
import { useRacksByAisle } from "../../hook/useRacksByAisle";
import { RackSelect } from "../RackSelect/RackSelect";
import { ShelfSelect } from "../ShelfSelect/ShelfSelect";
import { useShelvesByRack } from "../../hook/useShelvesByRack";

export default function InventoryInboundForm() {
  const {
    categories,
    setCategories,
    warehouses,
    setWarehouses,
    inboundType,
    setInboundType,
    suppliers,
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
      zone: "",
      aisle: "",
      rack: "",
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
  const { zones, zonesLoading } = useWarehouseZones({ control });
  const {
    selectedZoneId,
    data: aisles,
    isLoading: aislesLoading,
  } = useAislesByZone(control);

  const { racks, isLoading: racksLoading } = useRacksByAisle(control);

  const { shelves, isLoading: shelvesLoading } = useShelvesByRack(control);

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
        <InboundTypeSelect
          control={control}
          errors={errors}
          options={[
            { value: "receipt", label: "رسید کالا" },
            { value: "return", label: "برگشتی از مشتری" },
            { value: "production", label: "تولید داخلی" },
          ]}
          rules={{ required: "نوع ورودی الزامی است" }}
        />

        {/* کد قطعه */}
        <PartCodeInput
          register={register}
          errors={errors}
          rules={{ required: "کد قطعه الزامی است" }}
        />

        {/* نام قطعه */}
        <PartNameInput
          register={register}
          errors={errors}
          rules={{ required: "نام قطعه الزامی است" }}
        />

        {/* تعداد */}
        <StockInput
          register={register}
          errors={errors}
          rules={{
            required: "تعداد الزامی است",
            min: { value: 1, message: "تعداد باید حداقل 1 باشد" },
          }}
        />

        {/* وضعیت */}
        <StatusSelect
          control={control}
          errors={errors}
          options={[
            { value: "available", label: "موجود" },
            { value: "low", label: "کم" },
            { value: "out", label: "تمام شده" },
            { value: "damaged", label: "خراب" },
            { value: "pending", label: "در انتظار بررسی" },
          ]}
        />

        {/* دسته‌بندی */}
        <CategorySelect
          control={control}
          errors={errors}
          categories={categories}
          rules={{ required: "دسته‌بندی الزامی است" }}
          placeholder="لطفاً یک دسته‌بندی انتخاب کنید"
        />

        {/* زیرمجموعه */}
        <SubcategorySelect
          control={control}
          errors={errors}
          subcategories={subcategories}
          isLoading={isLoading}
          rules={{ required: "انتخاب زیرمجموعه الزامی است" }}
          placeholder="زیرمجموعه را انتخاب کنید"
        />

        {/* واحد */}
        <UnitSelect
          control={control}
          errors={errors}
          rules={{ required: "انتخاب واحد الزامی است" }}
          placeholder="واحد قطعه را انتخاب کنید"
        />

        {/* انبار */}
        <WarehouseSelect
          control={control}
          errors={errors}
          warehouses={warehouses}
          rules={{ required: "انتخاب انبار الزامی است" }}
        />

        {/* زون */}
        <ZoneSelect
          control={control}
          zones={zones}
          zonesLoading={zonesLoading}
          rules={{ required: "انتخاب زون الزامی است" }}
        />
        {/* راهرو */}
        <AisleSelect
          control={control}
          aisles={aisles}
          aislesLoading={aislesLoading}
          rules={{ required: "انتخاب راهرو الزامی است" }}
        />
        {/* رک ها */}
        <RackSelect
          control={control}
          racks={racks}
          racksLoading={racksLoading}
          rules={{ required: "انتخاب رک الزامی است" }}
        />
        <ShelfSelect
          control={control}
          shelves={shelves}
          shelvesLoading={shelvesLoading}
          rules={{ required: "انتخاب طبقه الزامی است" }}
        />

        {/* مکان */}
        <LocationInput
          register={register}
          errors={errors}
          rules={{
            required: "مکان الزامی است",
            minLength: { value: 5, message: "حداقل ۵ کاراکتر" },
          }}
          placeholder="مکان دقیق قطعه"
        />

        {/* تامین‌کننده */}
        <SupplierSelect
          control={control}
          errors={errors}
          suppliers={suppliers}
          rules={{ required: "انتخاب تامین‌کننده الزامی است" }}
        />

        {/* تاریخ ورود */}
        <EntryDateInput
          control={control}
          errors={errors}
          rules={{ required: "تاریخ ورود الزامی است" }}
        />

        {/* قیمت واحد */}
        <UnitPriceInput
          control={control}
          errors={errors}
          rules={{
            required: "قیمت واحد الزامی است",
            validate: (value) => value > 0 || "قیمت باید بزرگتر از 0 باشد",
            valueAsNumber: true,
          }}
        />

        {/* توضیحات */}
        <DescriptionTextarea
          control={control}
          rules={{
            maxLength: { value: 500, message: "حداکثر 500 کاراکتر مجاز است" },
          }}
        />

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
