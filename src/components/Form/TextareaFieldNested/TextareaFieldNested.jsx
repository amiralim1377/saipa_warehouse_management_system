"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function TextareaFieldNested({
  id,
  label,
  placeholder,
  rules,
  register,
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
      <Textarea id={id} placeholder={placeholder} {...register(id, rules)} />
      {error && (
        <p className="text-destructive text-sm mt-1">
          {error.message || "این فیلد الزامی است"}
        </p>
      )}
    </div>
  );
}
