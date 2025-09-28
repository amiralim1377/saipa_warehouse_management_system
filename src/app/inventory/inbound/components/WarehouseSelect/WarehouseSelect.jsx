"use client";

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

const WarehouseSelect = ({
  control,
  name = "warehouse",
  rules,
  errors,
  warehouses = [],
  label = "انبار",
  placeholder = "انتخاب انبار",
  disabled = false,
  selectClass = "w-full",
}) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <Select
              onValueChange={field.onChange}
              value={field.value ?? ""}
              disabled={disabled || !warehouses?.length}
            >
              <SelectTrigger id={name} className={selectClass}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {warehouses?.map((w) => (
                  <SelectItem key={w.id} value={w.id}>
                    {w.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {fieldState.error && (
              <p className="text-destructive text-sm mt-1">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default WarehouseSelect;
