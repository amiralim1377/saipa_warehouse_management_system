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

const StatusSelect = ({ control, errors }) => {
  return (
    <div>
      <Label htmlFor="status">وضعیت</Label>

      <Controller
        name="status"
        control={control}
        rules={{ required: "وضعیت الزامی است" }}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value ?? ""}>
            <SelectTrigger id="status" className="w-full">
              <SelectValue placeholder="وضعیت قطعه" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="available">موجود</SelectItem>
              <SelectItem value="low">کم</SelectItem>
              <SelectItem value="out">تمام شده</SelectItem>
              <SelectItem value="damaged">خراب</SelectItem>
              <SelectItem value="pending">در انتظار بررسی</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      {errors.status && (
        <p className="text-destructive text-sm mt-1">{errors.status.message}</p>
      )}
    </div>
  );
};

export default StatusSelect;
