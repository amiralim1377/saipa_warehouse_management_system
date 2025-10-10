"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function NumberInputFieldNested({
  id,
  label,
  placeholder,
  register,
  rules,
  errors,
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
        type="number"
        placeholder={placeholder}
        {...register(id, rules)}
        className="w-full"
      />
      {error && (
        <p className="text-destructive text-sm mt-1">
          {error.message || "این فیلد الزامی است"}
        </p>
      )}
    </div>
  );
}
