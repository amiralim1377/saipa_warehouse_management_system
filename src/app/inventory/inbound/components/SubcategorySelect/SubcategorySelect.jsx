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

export default function SubcategorySelect({
  control,
  errors,
  subcategories,
  isLoading,
}) {
  return (
    <div>
      <Label htmlFor="subcategory">زیرمجموعه</Label>

      <Controller
        name="subcategory"
        control={control}
        rules={{ required: "انتخاب زیرمجموعه الزامی است" }}
        render={({ field }) => (
          <Select
            onValueChange={field.onChange}
            value={field.value ?? ""}
            disabled={isLoading || !subcategories?.length} // 👈 اضافه شد
          >
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
        )}
      />

      {errors?.subcategory && (
        <p className="text-destructive text-sm mt-1">
          {errors.subcategory.message}
        </p>
      )}
    </div>
  );
}
