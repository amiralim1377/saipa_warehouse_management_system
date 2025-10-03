import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";
import { useWarehouse } from "../../context/WarehouseContext";

function WarehouseInformation() {
  const { warehouse } = useWarehouse();

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
          <Label htmlFor="name" className="block mb-2">
            نام انبار
          </Label>
          <Input
            id="name"
            defaultValue={warehouse?.name || ""}
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
          <Label htmlFor="location" className="block mb-2">
            مکان انبار
          </Label>
          <Input
            id="location"
            defaultValue={warehouse?.location || ""}
            {...register("location")}
            placeholder="مکان انبار"
          />
          {errors.location && (
            <p className="text-destructive text-sm mt-1">
              {errors.location.message}
            </p>
          )}
        </div>

        {/* حداقل موجودی */}
        <div>
          <Label htmlFor="min_stock" className="block mb-2">
            حداقل موجودی
          </Label>
          <Input
            id="min_stock"
            defaultValue={warehouse?.min_stock || 0}
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
          <Label htmlFor="capacity" className="block mb-2">
            ظرفیت انبار
          </Label>
          <Input
            id="capacity"
            defaultValue={warehouse?.capacity || 0}
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
          <Label htmlFor="notes" className="block mb-2">
            توضیحات
          </Label>
          <Textarea
            id="notes"
            defaultValue={warehouse?.notes || ""}
            {...register("notes")}
            placeholder="توضیحات اختیاری"
          />
        </div>
      </div>
    </div>
  );
}

export default WarehouseInformation;
