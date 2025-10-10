"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";

export default function SelectFieldNested({
  name,
  label,
  control,
  errors,
  options,
  disabled,
  rules,
  placeholder,
}) {
  const error = name
    .split(".")
    .reduce((acc, key) => (acc && acc[key] ? acc[key] : undefined), errors);

  return (
    <div>
      <Label htmlFor={name} className="mb-1 block">
        {label}
      </Label>

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Select
            onValueChange={field.onChange}
            value={field.value ?? ""}
            disabled={disabled}
          >
            <SelectTrigger id={name} className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((opt, i) => (
                <SelectItem key={i} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />

      {error && (
        <p className="text-destructive text-sm mt-1">
          {error.message || "این فیلد الزامی است"}
        </p>
      )}
    </div>
  );
}
