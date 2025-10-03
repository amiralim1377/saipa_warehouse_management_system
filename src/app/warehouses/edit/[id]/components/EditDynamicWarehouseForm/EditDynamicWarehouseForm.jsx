"use client";

import { FormProvider, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
// import { updateWarehouse } from "../../actions/updateWarehouse"; // 👈 باید بسازی
import { toast } from "react-toastify";
import WarehouseInformation from "../WarehouseInformation/WarehouseInformation";
import ZonesManagement from "../ZonesManagement/ZonesManagement";

function EditDynamicWarehouseForm({ targetWarehouse }) {
  const router = useRouter();
  const methods = useForm();
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = methods;

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
