"use client";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import WarehouseInformation from "../WarehouseInformation/WarehouseInformation";
import ZonesManagement from "../ZonesManagement/ZonesManagement";
import { useWarehouse } from "../../context/WarehouseContext";
import { updateWarehouseWithStructureServer } from "../../actions/updateWarehouseWithStructureServer";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import calculateWarehouseCapacity from "../../utils/calculateWarehouseCapacity";

function EditDynamicWarehouseForm() {
  const { warehouse, zones } = useWarehouse();
  const { id } = useParams();
  const router = useRouter();

  const methods = useForm({
    defaultValues: {
      name: warehouse?.name || "",
      location: warehouse?.location || "",
      capacity: warehouse?.capacity || 0,
      min_stock: warehouse?.min_stock || 0,
      zones: zones || [],
    },
  });

  const {
    handleSubmit,

    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      const totalCapacity = calculateWarehouseCapacity(data.zones);

      const payload = { ...data, id, capacity: totalCapacity };

      const result = await updateWarehouseWithStructureServer(payload);

      if (result.success) {
        toast.success(result.message || "انبار با موفقیت اپدیت شد");
        router.replace("/warehouses");
        reset();
      } else {
        throw new Error(result.message || "❌ Failed to update warehouse");
      }
    } catch (error) {
      console.error("❌ خطا در آپدیت انبار:", error);
      toast.error(error.message || "❌ خطا در آپدیت انبار");
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-6 p-6 space-y-4  mx-auto"
      >
        <WarehouseInformation />
        <ZonesManagement />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "در حال ویرایش..." : "ثبت تغییرات"}
        </Button>
      </form>
    </FormProvider>
  );
}

export default EditDynamicWarehouseForm;
