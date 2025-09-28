"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";

const InboundTypeSelect = ({ control, errors }) => {
  return (
    <div>
      <Label htmlFor="inboundType">نوع ورودی</Label>

      <Controller
        name="inboundType"
        control={control}
        rules={{ required: "نوع ورودی الزامی است" }}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value ?? ""}>
            <SelectTrigger id="inboundType" className="w-full">
              <SelectValue placeholder="انتخاب نوع ورودی" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="receipt">رسید کالا</SelectItem>
              <SelectItem value="return">برگشتی از مشتری</SelectItem>
              <SelectItem value="production">تولید داخلی</SelectItem>
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
