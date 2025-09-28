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
        <LocationInput register={register} errors={errors} />

        {/* تامین‌کننده */}
        <SupplierSelect
          control={control} // از useForm
          errors={errors}
          suppliers={suppliers} // آرایه تامین‌کنندگان فعال
        />

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
