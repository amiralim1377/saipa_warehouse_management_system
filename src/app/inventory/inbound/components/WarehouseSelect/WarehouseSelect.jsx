"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { Controller } from "react-hook-form";

const WarehouseSelect = ({ control, errors, warehouses }) => {
  return (
    <div>
      <Label htmlFor="warehouse">انبار</Label>

      <Controller
        name="warehouse"
        control={control}
        rules={{ required: "انتخاب انبار الزامی است" }}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value ?? ""}>
            <SelectTrigger id="warehouse" className="w-full">
              <SelectValue placeholder="انتخاب انبار" />
            </SelectTrigger>
            <SelectContent>
              {warehouses?.map((w) => (
                <SelectItem key={w.id} value={w.id}>
                  {w.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />

      {errors.warehouse && (
        <p className="text-destructive text-sm mt-1">
          {errors.warehouse.message}
        </p>
      )}
    </div>
  );
};

export default WarehouseSelect;
