"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

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

export default function UnitSelect({ register, errors, onChange }) {
  return (
    <div>
      <Label htmlFor="unit">واحد</Label>
      <Select onValueChange={(value) => onChange(value)}>
        <SelectTrigger id="unit" className="w-full">
          <SelectValue placeholder="انتخاب واحد" />
        </SelectTrigger>
        <SelectContent>
          {UNITS.map((unit) => (
            <SelectItem key={unit.value} value={unit.value}>
              {unit.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {errors.unit && (
        <p className="text-destructive text-sm mt-1">{errors.unit.message}</p>
      )}
    </div>
  );
}
