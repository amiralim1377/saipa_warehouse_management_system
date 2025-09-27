"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CategorySelect from "../CategorySelect/CategorySelect";
import { useInventoryInbound } from "../../context/InventoryInboundProvider";
import { useQuery } from "@tanstack/react-query";
import { getSubcategories } from "../../services/getSubcategory";
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

  const selectedCategoryId = watch("category");

  const {
    data: subcategories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["subcategories", selectedCategoryId],
    queryFn: () => getSubcategories(selectedCategoryId),
    enabled: !!selectedCategoryId,
  });

  const selectedWarehouseId = watch("warehouse");
  console.log(selectedWarehouseId);

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
          register={register}
          errors={errors}
          onValueChange={(value) => setInboundType(value)}
        />

        {/* کد قطعه */}
        <PartCodeInput register={register} errors={errors} />

        {/* نام قطعه */}
        <PartNameInput register={register} errors={errors} />

        {/* تعداد */}
        <StockInput register={register} errors={errors} />

        {/* وضعیت */}
        <StatusSelect register={register} errors={errors} />

        {/* دسته‌بندی */}
        <CategorySelect
          register={register}
          errors={errors}
          categories={categories}
          onChange={(value) => setValue("category", value)}
        />

        {/* زیرمجموعه */}
        <SubcategorySelect
          register={register}
          errors={errors}
          subcategories={subcategories || []}
          onChange={(value) => setValue("subcategory", value)}
          disabled={isLoading || !subcategories?.length}
        />

        {/* واحد */}
        <UnitSelect
          register={register}
          errors={errors}
          onChange={(value) => setValue("unit", value)}
        />

        {/* انبار */}
        <WarehouseSelect
          register={register}
          errors={errors}
          warehouses={warehouses}
          onChange={(value) => setValue("warehouse", value)}
        />

        {/* مکان */}
        <LocationInput register={register} errors={errors} />

        {/* تامین‌کننده */}
        <SupplierInput register={register} errors={errors} />

        {/* تاریخ ورود */}
        <EntryDateInput register={register} errors={errors} />

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
