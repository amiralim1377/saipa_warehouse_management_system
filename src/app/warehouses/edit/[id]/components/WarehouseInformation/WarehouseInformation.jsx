import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";

function WarehouseInformation() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full border rounded-lg shadow-sm p-6 bg-card">
      <h1 className="text-2xl font-semibold text-foreground mb-6">
        ویرایش انبار
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* نام انبار */}
        <div>
          <Input
            {...register("name", { required: "نام انبار الزامی است" })}
            placeholder="نام انبار"
          />
          {errors.name && (
            <p className="text-destructive text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* مکان */}
        <div>
          <Input {...register("location")} placeholder="مکان انبار" />
          {errors.location && (
            <p className="text-destructive text-sm mt-1">
              {errors.location.message}
            </p>
          )}
        </div>

        {/* حداقل موجودی */}
        <div>
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
        </div>

        {/* ظرفیت */}
        <div>
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
        </div>

        {/* توضیحات اختیاری */}
        <div className="col-span-1 md:col-span-2">
          <Textarea {...register("notes")} placeholder="توضیحات اختیاری" />
        </div>
      </div>
    </div>
  );
}

export default WarehouseInformation;
