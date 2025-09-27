import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StatusSelect = ({ register, errors }) => {
  return (
    <div>
      <Label htmlFor="status">وضعیت</Label>
      <Select {...register("status", { required: "وضعیت الزامی است" })}>
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
      {errors.status && (
        <p className="text-destructive text-sm mt-1">{errors.status.message}</p>
      )}
    </div>
  );
};

export default StatusSelect;
