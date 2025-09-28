import React from "react";
import { Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export function ShelfSelect({
  control,
  name = "shelf",
  shelves,
  shelvesLoading,
  rules,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div>
          <Label htmlFor={name}>طبقه</Label>
          <Select
            {...field}
            onValueChange={(val) => field.onChange(val)}
            disabled={shelvesLoading || !shelves?.length}
          >
            <SelectTrigger id={name} className="w-full">
              <SelectValue placeholder="انتخاب طبقه" />
            </SelectTrigger>
            <SelectContent>
              {shelves?.map((shelf) => (
                <SelectItem key={shelf.id} value={shelf.id}>
                  {shelf.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {fieldState.error && (
            <p className="text-destructive text-sm mt-1">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
}
