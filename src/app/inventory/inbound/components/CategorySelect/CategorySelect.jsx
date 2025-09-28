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

export default function CategorySelect({
  control,
  errors,
  categories,
  disabled = false,
}) {
  return (
    <div>
      <Label htmlFor="category">دسته‌بندی</Label>

      <Controller
        name="category"
        control={control}
        rules={{ required: "انتخاب دسته‌بندی الزامی است" }}
        render={({ field }) => (
          <Select
            onValueChange={field.onChange}
            value={field.value ?? ""}
            disabled={disabled}
          >
            <SelectTrigger id="category" className="w-full">
              <SelectValue placeholder="انتخاب دسته‌بندی" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.id} value={cat.id}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />

      {errors.category && (
        <p className="text-destructive text-sm mt-1">
          {errors.category.message}
        </p>
      )}
    </div>
  );
}
