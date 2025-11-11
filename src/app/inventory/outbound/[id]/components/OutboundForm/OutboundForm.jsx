"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useInventoryDynamicOutbound } from "../../context/InventoryDynamicOutboundProvider";
import SelectField from "@/components/Form/SelectField/SelectField";
import { toast } from "react-toastify";
import { registerOutbound } from "../../actions/registerOutbound";
import { useRouter } from "next/navigation";
import UnitSelect from "@/app/inventory/inbound/components/UnitSelect/UnitSelect";

function OutboundForm({ product }) {
  const { customersData } = useInventoryDynamicOutbound();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
    control,
  } = useForm({
    defaultValues: {
      quantity: 1,
      order_number: "",
      description: "",
    },
  });

  const stock = product?.stock || 0;
  const quantityValue = watch("quantity");

  const onSubmit = async (data) => {
    if (data.quantity > stock) {
      toast.error(`⚠️ تعداد خروجی نمی‌تواند بیشتر از موجودی (${stock}) باشد!`);
      return;
    }

    const result = await registerOutbound({
      ...data,
      customer_id: data.customer,
      part_code: product.part_code,
      part_name: product.part_name,
      warehouse_id: product.warehouse_id,
      zone_id: product.zone_id,
      aisle_id: product.aisles?.id,
      rack_id: product.racks?.id,
      shelf_id: product.shelves?.id,
      unit_price: product.unit_price,
      total_value: product.unit_price * data.quantity,
    });

    if (result.success) {
      toast.success(result.message);
      reset();
      router.push("/inventory");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 p-6 max-w-3xl mx-auto bg-card text-foreground rounded-lg"
    >
      <h1 className="text-2xl font-bold mb-6">📦 فرم خروجی قطعه</h1>
      {/* نام قطعه */}
      <div>
        <label className="block mb-1 font-medium">نام قطعه</label>
        <input
          type="text"
          value={product?.part_name || ""}
          readOnly
          className="w-full px-3 py-2 rounded-md border border-border bg-input text-foreground"
        />
      </div>
      {/* کد فنی */}
      <div>
        <label className="block mb-1 font-medium">کد فنی</label>
        <input
          type="text"
          value={product?.part_code || ""}
          readOnly
          className="w-full px-3 py-2 rounded-md border border-border bg-input text-foreground"
        />
      </div>
      {/* موجودی */}
      <div>
        <label className="block mb-1 font-medium">موجودی فعلی</label>
        <input
          type="number"
          value={stock}
          readOnly
          className="w-full px-3 py-2 rounded-md border border-border bg-input text-foreground"
        />
      </div>
      {/* محل ذخیره */}
      <div>
        <label className="block mb-1 font-medium">انبار</label>
        <input
          type="text"
          value={product?.warehouses?.name || ""}
          readOnly
          className="w-full px-3 py-2 rounded-md border border-border bg-input text-foreground"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">زون</label>
          <input
            type="text"
            value={product?.zones?.name || ""}
            readOnly
            className="w-full px-3 py-2 rounded-md border border-border bg-input text-foreground"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">راهرو</label>
          <input
            type="text"
            value={product?.aisles?.name || ""}
            readOnly
            className="w-full px-3 py-2 rounded-md border border-border bg-input text-foreground"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">رک</label>
          <input
            type="text"
            value={product?.racks?.name || ""}
            readOnly
            className="w-full px-3 py-2 rounded-md border border-border bg-input text-foreground"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">شلف</label>
          <input
            type="text"
            value={product?.shelves?.name || ""}
            readOnly
            className="w-full px-3 py-2 rounded-md border border-border bg-input text-foreground"
          />
        </div>
      </div>
      {/* تعداد خروجی */}
      <div>
        <label className="block mb-1 font-medium">تعداد خروجی</label>
        <input
          type="number"
          {...register("quantity", { required: true, min: 1 })}
          className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
          placeholder="مثلاً 2"
        />
        {quantityValue > stock && (
          <p className="text-destructive text-sm mt-1">
            تعداد خروجی بیشتر از موجودی است!
          </p>
        )}
        {errors.quantity && (
          <p className="text-destructive text-sm mt-1">این فیلد الزامی است</p>
        )}
      </div>
      {/* واحد */}
      <UnitSelect
        control={control}
        errors={errors}
        rules={{ required: "انتخاب واحد الزامی است" }}
        placeholder="واحد قطعه را انتخاب کنید"
      />
      {/* انتخاب مشتری */}
      <SelectField
        name="customer"
        label="انتخاب مشتری"
        control={control}
        options={
          customersData?.map((c) => ({
            value: c.id,
            label: c.company_name
              ? c.company_name
              : `${c.first_name ?? ""} ${c.last_name ?? ""}`.trim(),
          })) || []
        }
        rules={{ required: "انتخاب مشتری الزامی است" }}
        errors={errors}
        placeholder="انتخاب کنید"
      />
      {/* شماره سفارش */}
      <div>
        <label className="block mb-1 font-medium">شماره سفارش / حواله</label>
        <input
          type="text"
          {...register("order_number", { required: true })}
          className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
          placeholder="ORD-2025-001"
        />
        {errors.order_number && (
          <p className="text-destructive text-sm mt-1">این فیلد الزامی است</p>
        )}
      </div>
      {/* توضیحات */}
      <div>
        <label className="block mb-1 font-medium">توضیحات</label>
        <textarea
          {...register("description")}
          className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground"
          rows={3}
          placeholder="توضیحات تکمیلی..."
        />
      </div>

      <input type="hidden" {...register("part_id")} value={product.id} />
      <input
        type="hidden"
        {...register("part_code")}
        value={product.part_code}
      />

      <input
        type="hidden"
        {...register("part_name")}
        value={product.part_name}
      />
      <input type="hidden" {...register("stock")} value={product.stock} />
      <input type="hidden" {...register("unit")} value={product.unit} />
      <input
        type="hidden"
        {...register("warehouse_id")}
        value={product.warehouse_id}
      />
      <input type="hidden" {...register("zone_id")} value={product.zone_id} />
      <input
        type="hidden"
        {...register("aisle_id")}
        value={product.aisles?.id}
      />
      <input type="hidden" {...register("rack_id")} value={product.racks?.id} />
      <input
        type="hidden"
        {...register("shelf_id")}
        value={product.shelves?.id}
      />
      <input
        type="hidden"
        {...register("unit_price")}
        value={product.unit_price}
      />
      <input
        type="hidden"
        {...register("total_value")}
        value={product.unit_price * watch("quantity")}
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 bg-primary text-primary-foreground"
      >
        {isSubmitting ? "در حال ثبت..." : "ثبت خروجی"}
      </Button>
    </form>
  );
}

export default OutboundForm;
