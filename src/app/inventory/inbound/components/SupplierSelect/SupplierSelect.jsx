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

const SupplierSelect = ({ control, errors, suppliers }) => {
  return (
    <div>
      <Label htmlFor="supplier">تامین‌کننده</Label>
      <Controller
        name="supplier"
        control={control}
        rules={{ required: "نام تامین‌کننده الزامی است" }}
        render={({ field }) => (
          <Select {...field} onValueChange={(value) => field.onChange(value)}>
            <SelectTrigger id="supplier" className="w-full">
              <SelectValue placeholder="انتخاب تامین‌کننده" />
            </SelectTrigger>
            <SelectContent>
              {suppliers?.map((sup) => (
                <SelectItem key={sup.id} value={sup.id}>
                  {sup.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {errors.supplier && (
        <p className="text-destructive text-sm mt-1">
          {errors.supplier.message}
        </p>
      )}
    </div>
  );
};

export default SupplierSelect;
