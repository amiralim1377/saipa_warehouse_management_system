"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function TextInputFieldNested({
  id,
  label,
  placeholder,
  register,
  rules,
  errors,
  readonly = false,
}) {
  const error = id
    .split(".")
    .reduce((acc, key) => (acc && acc[key] ? acc[key] : undefined), errors);

  return (
    <div>
      <Label htmlFor={id} className="mb-1 block">
        {label}
      </Label>
      <Input
        id={id}
        placeholder={placeholder}
        readOnly={readonly}
        {...register(id, rules)}
      />
      {error && (
        <p className="text-destructive text-sm mt-1">
          {error.message || "این فیلد الزامی است"}
        </p>
      )}
    </div>
  );
}
