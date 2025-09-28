"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const InboundTypeSelect = ({ control, errors, options = [], rules }) => {
  return (
    <div>
      <Label htmlFor="inboundType">نوع ورودی</Label>
      <Controller
        name="inboundType"
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <Select
            {...field}
            value={field.value ?? ""}
            onValueChange={field.onChange}
          >
            <SelectTrigger id="inboundType" className="w-full">
              <SelectValue placeholder="انتخاب نوع ورودی" />
            </SelectTrigger>
            <SelectContent>
              {options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {errors.inboundType && (
        <p className="text-destructive text-sm mt-1">
          {errors.inboundType.message}
        </p>
      )}
    </div>
  );
};

export default InboundTypeSelect;
