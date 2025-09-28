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

export function AisleSelect({
  control,
  name = "aisle",
  aisles,
  aislesLoading,
  rules,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div>
          <Label htmlFor={name}>راهرو</Label>
          <Select
            {...field}
            onValueChange={(val) => field.onChange(val)}
            disabled={aislesLoading || !aisles?.length}
          >
            <SelectTrigger id={name} className="w-full">
              <SelectValue placeholder="انتخاب راهرو" />
            </SelectTrigger>
            <SelectContent>
              {aisles?.map((aisle) => (
                <SelectItem key={aisle.id} value={aisle.id}>
                  {aisle.name}
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
