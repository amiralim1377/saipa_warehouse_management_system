import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const SupplierInput = ({ register, errors }) => {
  return (
    <div>
      <Label htmlFor="supplier">تامین‌کننده</Label>
      <Input
        id="supplier"
        {...register("supplier", {
          required: "نام تامین‌کننده الزامی است",
        })}
        placeholder="نام تامین‌کننده"
      />
      {errors.supplier && (
        <p className="text-destructive text-sm mt-1">
          {errors.supplier.message}
        </p>
      )}
    </div>
  );
};

export default SupplierInput;
