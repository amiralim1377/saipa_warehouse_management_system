import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const UnitPriceInput = ({ register, errors }) => {
  return (
    <div>
      <Label htmlFor="unitPrice">قیمت واحد</Label>
      <Input
        id="unitPrice"
        type="number"
        step="0.01"
        {...register("unitPrice", {
          required: "قیمت واحد الزامی است",
          min: { value: 0, message: "قیمت باید بزرگتر یا مساوی 0 باشد" },
        })}
        placeholder="قیمت واحد"
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
