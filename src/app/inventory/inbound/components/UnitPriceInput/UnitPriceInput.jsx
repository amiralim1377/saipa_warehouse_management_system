import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const UnitPriceInput = ({ register, errors }) => {
  return (
    <div className="w-full">
      <Label htmlFor="unitPrice">قیمت واحد</Label>
      <Input
        id="unitPrice"
        type="number"
        step="0.01"
        placeholder="قیمت واحد"
        {...register("unitPrice", {
          required: "قیمت واحد الزامی است",
          valueAsNumber: true,
          validate: (value) => value > 0 || "قیمت باید بزرگتر از 0 باشد",
        })}
        className="border rounded-md p-2 text-sm w-full"
      />
      {errors.unitPrice && (
        <p className="text-destructive text-sm mt-1">
          {errors.unitPrice.message}
        </p>
      )}
    </div>
  );
};

export default UnitPriceInput;
