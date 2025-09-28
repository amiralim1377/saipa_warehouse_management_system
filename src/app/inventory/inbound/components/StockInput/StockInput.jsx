"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const StockInput = ({
  register,
  errors,
  rules,
  placeholder = "تعداد وارد شده",
}) => {
  return (
    <div>
      <Label htmlFor="stock">تعداد</Label>
      <Input
        id="stock"
        type="number"
        {...register("stock", rules)}
        placeholder={placeholder}
      />
      {errors.stock && (
        <p className="text-destructive text-sm mt-1">{errors.stock.message}</p>
      )}
    </div>
  );
};

export default StockInput;
