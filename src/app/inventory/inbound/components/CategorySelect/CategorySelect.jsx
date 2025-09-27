"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export default function CategorySelect({
  register,
  errors,
  categories,
  onChange,
}) {
  return (
    <div>
      <Label htmlFor="category">دسته‌بندی</Label>
      <Select
        onValueChange={(value) => {
          onChange(value);
        }}
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
      {errors.category && (
        <p className="text-destructive text-sm mt-1">
          {errors.category.message}
        </p>
      )}
    </div>
  );
}
