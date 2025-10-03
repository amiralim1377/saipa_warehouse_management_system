"use client";

import { FormProvider, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import WarehouseInformation from "../WarehouseInformation/WarehouseInformation";
import ZonesManagement from "../ZonesManagement/ZonesManagement";
import {
  useWarehouse,
  WarehouseProvider,
} from "../../context/WarehouseContext";

function EditDynamicWarehouseForm({ targetWarehouse }) {
  const { warehouse, zones, aisles, racks, shelves } = useWarehouse();
  const methods = useForm({
    defaultValues: {
      name: targetWarehouse?.name || "",
      location: targetWarehouse?.location || "",
      capacity: targetWarehouse?.capacity || 0,
      min_stock: targetWarehouse?.min_stock || 0,
    },
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {};

  return (
    <WarehouseProvider targetWarehouse={targetWarehouse}>
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
    </WarehouseProvider>
  );
}

export default EditDynamicWarehouseForm;
