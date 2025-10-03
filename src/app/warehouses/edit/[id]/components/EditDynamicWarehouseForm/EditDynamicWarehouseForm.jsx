"use client";

import { FormProvider, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import WarehouseInformation from "../WarehouseInformation/WarehouseInformation";
import ZonesManagement from "../ZonesManagement/ZonesManagement";
import { useWarehouse } from "../../context/WarehouseContext";

function EditDynamicWarehouseForm() {
  const methods = useForm();

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {};

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
