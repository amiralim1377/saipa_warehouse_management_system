"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function TextInputField({
  id,
  label,
  placeholder,
  register,
  rules,
  errors,
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} placeholder={placeholder} {...register(id, rules)} />
      {errors?.[id] && (
        <p className="text-destructive text-sm mt-1">
          {errors[id].message || "این فیلد الزامی است"}
        </p>
      )}
    </div>
  );
}
