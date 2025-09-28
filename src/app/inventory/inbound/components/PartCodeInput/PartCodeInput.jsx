"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const PartCodeInput = ({
  register,
  errors,
  rules,
  placeholder = "کد قطعه",
}) => {
  return (
    <div>
      <Label htmlFor="partCode">کد قطعه</Label>
      <Input
        id="partCode"
        {...register("partCode", rules)}
        placeholder={placeholder}
      />
      {errors.partCode && (
        <p className="text-destructive text-sm mt-1">
          {errors.partCode.message}
        </p>
      )}
    </div>
  );
};

export default PartCodeInput;
