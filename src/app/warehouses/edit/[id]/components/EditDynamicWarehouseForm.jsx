"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
// import { updateWarehouse } from "../../actions/updateWarehouse"; // 👈 باید بسازی
import { toast } from "react-toastify";

function EditDynamicWarehouseForm({ targetWarehouse }) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: targetWarehouse?.name || "",
      location: targetWarehouse?.location || "",
      min_stock: targetWarehouse?.min_stock ?? 0,
      capacity: targetWarehouse?.capacity ?? "",
      notes: targetWarehouse?.notes || "",
    },
  });

  const onSubmit = async (data) => {
    // try {
    //   const result = await updateWarehouse(targetWarehouse.id, data);
    //   if (result.status === 200) {
    //     reset();
    //     toast.success(result.message);
    //     router.replace("/warehouses");
    //   } else {
    //     throw new Error(result.message);
    //   }
    // } catch (err) {
    //   console.error(err);
    //   toast.error(`خطا در بروزرسانی انبار: ${err.message}`);
    // }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-6 space-y-4 max-w-lg mx-auto"
    >
      <h1 className="text-2xl font-semibold text-foreground mb-6">
        ویرایش انبار
      </h1>

      {/* نام انبار */}
      <Input
        {...register("name", { required: "نام انبار الزامی است" })}
        placeholder="نام انبار"
      />
      {errors.name && (
        <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
      )}

      {/* مکان */}
      <Input {...register("location")} placeholder="مکان انبار" />
      {errors.location && (
        <p className="text-destructive text-sm mt-1">
          {errors.location.message}
        </p>
      )}

      {/* حداقل موجودی */}
      <Input
        {...register("min_stock", {
          required: "حداقل موجودی الزامی است",
          valueAsNumber: true,
          min: { value: 0, message: "نمی‌تواند منفی باشد" },
        })}
        type="number"
        placeholder="حداقل موجودی"
      />
      {errors.min_stock && (
        <p className="text-destructive text-sm mt-1">
          {errors.min_stock.message}
        </p>
      )}

      {/* ظرفیت */}
      <Input
        {...register("capacity", {
          required: "ظرفیت الزامی است",
          valueAsNumber: true,
          min: { value: 1, message: "ظرفیت باید حداقل ۱ باشد" },
        })}
        type="number"
        placeholder="ظرفیت انبار"
      />
      {errors.capacity && (
        <p className="text-destructive text-sm mt-1">
          {errors.capacity.message}
        </p>
      )}

      {/* توضیحات اختیاری */}
      <Textarea {...register("notes")} placeholder="توضیحات اختیاری" />

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "در حال ویرایش..." : "ثبت تغییرات"}
      </Button>
    </form>
  );
}

export default EditDynamicWarehouseForm;
