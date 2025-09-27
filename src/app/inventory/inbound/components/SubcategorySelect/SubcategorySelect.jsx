"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export default function SubcategorySelect({
  register,
  errors,
  subcategories,
  onChange,
  disabled = false,
}) {
  return (
    <div>
      <Label htmlFor="subcategory">زیرمجموعه</Label>
      <Select onValueChange={(value) => onChange(value)} disabled={disabled}>
        <SelectTrigger id="subcategory" className="w-full">
          <SelectValue placeholder="انتخاب زیرمجموعه" />
        </SelectTrigger>
        <SelectContent>
          {subcategories.map((sub) => (
            <SelectItem key={sub.id} value={sub.id}>
              {sub.name_fa || sub.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {errors?.subcategory && (
        <p className="text-destructive text-sm mt-1">
          {errors.subcategory.message}
        </p>
      )}
    </div>
  );
}
