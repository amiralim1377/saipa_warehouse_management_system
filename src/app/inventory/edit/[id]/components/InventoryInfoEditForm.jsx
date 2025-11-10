"use client";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import NumberInputField from "@/components/Form/NumberInputField/NumberInputField";
import { useSubcategories } from "@/hooks/useSubcategories/useSubcategories";
import { useWarehouseZones } from "@/hooks/useWarehouseZones/useWarehouseZones";
import { useAislesByZone } from "@/hooks/useAislesByZone/useAislesByZone";
import { useRacksByAisle } from "@/hooks/useRacksByAisle/useRacksByAisle";
import { useShelvesByRack } from "@/hooks/useShelvesByRack/useShelvesByRack";
import { useParams, useRouter } from "next/navigation";
import CategorySelect from "@/app/inventory/inbound/components/CategorySelect/CategorySelect";
import SubcategorySelect from "@/app/inventory/inbound/components/SubcategorySelect/SubcategorySelect";
import UnitSelect from "@/app/inventory/inbound/components/UnitSelect/UnitSelect";
import LocationInput from "@/app/inventory/inbound/components/LocationInput/LocationInput";
import WarehouseSelect from "@/app/inventory/inbound/components/WarehouseSelect/WarehouseSelect";
import { ZoneSelect } from "@/app/inventory/inbound/components/ZoneSelect/ZoneSelect";
import { AisleSelect } from "@/app/inventory/inbound/components/AisleSelect/AisleSelect";
import { RackSelect } from "@/app/inventory/inbound/components/RackSelect/RackSelect";
import { ShelfSelect } from "@/app/inventory/inbound/components/ShelfSelect/ShelfSelect";
import StatusSelect from "@/app/inventory/inbound/components/StatusSelect/StatusSelect";
import SupplierSelect from "@/app/inventory/inbound/components/SupplierSelect/SupplierSelect";
import EntryDateInput from "@/app/inventory/inbound/components/EntryDateInput/EntryDateInput";
import UnitPriceInput from "@/app/inventory/inbound/components/UnitPriceInput/UnitPriceInput";
import DescriptionTextarea from "@/app/inventory/inbound/components/DescriptionTextarea/DescriptionTextarea";
import PartNameInput from "@/app/inventory/inbound/components/PartNameInput/PartNameInput";
import StockInput from "@/app/inventory/inbound/components/StockInput/StockInput";
import { useInventoryInbound } from "@/app/inventory/inbound/context/InventoryInboundProvider";
import InboundTypeSelect from "@/app/inventory/inbound/components/InboundTypeSelect/InboundTypeSelect";
import PartCodeInput from "@/app/inventory/inbound/components/PartCodeInput/PartCodeInput";
import { toast } from "react-toastify";
import formatJalaaliDate from "@/utils/formatJalaaliDate";
import convertJalaaliToTehran from "@/utils/convertJalaaliToTehran";
import editProductDetails from "../actions/editProductDetails";
import { useWarehouseStructure } from "@/hooks/useWarehouseStructure/useWarehouseStructure";
import { Spinner } from "@/components/ui/spinner";
import { useEmptyWarehouseStructure } from "@/app/inventory/inbound/hook/useEmptyWarehouseStructure/useEmptyWarehouseStructure";

export default function InventoryInfoEditForm({ partData }) {
  const part = partData[0];

  const router = useRouter();
  const params = useParams();

  const { categories, warehouses, suppliers } = useInventoryInbound();

  console.log(categories);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      inboundType: part.inbound_type,
      partCode: part.part_code,
      partName: part.part_name,
      stock: part.stock,
      status: part.status,
      category: part.category_id,
      subcategory: part.subcategory_id,
      unit: part.unit,
      warehouse: part.warehouse_id,
      zone: part.zone_id,
      aisle: part.aisle_id,
      rack: part.rack_id,
      shelf: part.shelf_id,
      supplier: part.supplier_id,
      location: part.location,
      entryDate: part.entry_date ? formatJalaaliDate(part.entry_date) : "",
      unitPrice: part.unit_price,
      min_stock: part.min_stock,
      description: part.description || "",
    },
  });

  const { data: subcategories, isLoading, error } = useSubcategories(control);

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

  if (shelvesLoading) {
    return <Spinner />;
  }

  const onSubmit = async (data) => {
    try {
      const updatedPart = {
        inbound_type: data.inboundType,
        id: partData.id,
        part_code: data.partCode,
        part_name: data.partName,
        stock: Number(data.stock),
        status: data.status,
        category_id: data.category,
        subcategory_id: data.subcategory,
        unit: data.unit,
        warehouse_id: data.warehouse,
        zone_id: data.zone,
        aisle_id: data.aisle,
        rack_id: data.rack,
        shelf_id: data.shelf,
        supplier_id: data.supplier,
        location: data.location,
        entry_date: convertJalaaliToTehran(String(data.entryDate)),
        unit_price: Number(data.unitPrice),
        min_stock: Number(data.min_stock),
        description: data.description || "",
        total_value: Number(data.stock) * Number(data.unitPrice),
        updated_at: new Date().toISOString(),
      };

      const result = await editProductDetails({
        updatedPart,
        id: params.id,
      });

      if (!result.success) {
        toast.error(result.message);
      } else {
        toast.success(result.message);
        router.replace("/inventory");
      }
    } catch (error) {
      console.error("خطای غیرمنتظره:", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto" dir="rtl">
      <h1 className="text-2xl font-semibold text-foreground mb-6">
        ویرایش اطلاعات کالا
      </h1>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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

        {/* طبقه*/}
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
          suppliers={suppliers.suppliers}
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

        <NumberInputField
          id="min_stock"
          label="حداقل موجودی"
          placeholder="مثلاً 10"
          register={register}
          rules={{
            required: "حداقل موجودی الزامی است",
            min: { value: 0, message: "مقدار نمی‌تواند منفی باشد" },
            valueAsNumber: true,
          }}
          errors={errors}
        />

        {/* توضیحات */}
        <DescriptionTextarea
          control={control}
          rules={{
            maxLength: { value: 500, message: "حداکثر 500 کاراکتر مجاز است" },
          }}
        />

        <div className="flex gap-4 mt-4">
          <Button
            type="submit"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "در حال ذخیره..." : "ذخیره تغییرات"}
          </Button>

          <Button
            type="button"
            className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg"
            onClick={() => router.back()}
          >
            بازگشت
          </Button>
        </div>
      </form>
    </div>
  );
}
