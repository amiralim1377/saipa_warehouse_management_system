import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const InboundTypeSelect = ({ register, errors, onValueChange }) => {
  return (
    <div>
      <Label htmlFor="inboundType">نوع ورودی</Label>
      <Select
        {...register("inboundType", { required: "نوع ورودی الزامی است" })}
        onValueChange={onValueChange}
      >
        <SelectTrigger id="inboundType" className="w-full">
          <SelectValue placeholder="انتخاب نوع ورودی" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="receipt">رسید کالا</SelectItem>
          <SelectItem value="return">برگشتی از مشتری</SelectItem>
          <SelectItem value="production">تولید داخلی</SelectItem>
        </SelectContent>
      </Select>
      {errors.inboundType && (
        <p className="text-destructive text-sm mt-1">
          {errors.inboundType.message}
        </p>
      )}
    </div>
  );
};

export default InboundTypeSelect;
