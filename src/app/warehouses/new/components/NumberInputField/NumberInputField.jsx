"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const NumberInputField = ({
  id,
  label,
  placeholder,
  register,
  rules,
  errors,
}) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type="number"
        placeholder={placeholder}
        {...register(id, rules)}
        className="w-full"
      />
      {errors[id] && (
        <p className="text-destructive text-sm mt-1">{errors[id].message}</p>
      )}
    </div>
  );
};

export default NumberInputField;
