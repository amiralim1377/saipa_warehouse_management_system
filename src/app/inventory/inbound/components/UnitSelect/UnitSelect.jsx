"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";

const UNITS = [
  { value: "pcs", label: "عدد" },
  { value: "pack", label: "بسته" },
  { value: "box", label: "جعبه" },
  { value: "carton", label: "کارتن" },
  { value: "liter", label: "لیتر" },
  { value: "ml", label: "میلی‌لیتر" },
  { value: "gallon", label: "گالن" },
  { value: "set", label: "ست (۴ عدد)" },
  { value: "kg", label: "کیلوگرم" },
  { value: "g", label: "گرم" },
];

export default function UnitSelect({
  control,
  errors,
  rules = {},
  placeholder = "انتخاب واحد",
  disabled = false,
}) {
  return (
    <div>
      <Label htmlFor="unit">واحد</Label>
      <Controller
        name="unit"
        control={control}
        rules={rules}
        render={({ field }) => (
          <Select
            value={field.value ?? ""}
            onValueChange={field.onChange}
            disabled={disabled}
          >
            <SelectTrigger id="unit" className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {UNITS.map((u, i) => (
                <SelectItem key={i} value={u.value}>
                  {u.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {errors.unit && (
        <p className="text-destructive text-sm mt-1">{errors.unit.message}</p>
      )}
    </div>
  );
}
