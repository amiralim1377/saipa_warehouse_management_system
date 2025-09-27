import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const WarehouseSelect = ({ register, errors, warehouses }) => {
  return (
    <div>
      <Label htmlFor="warehouse">انبار</Label>
      <Select
        {...register("warehouse", { required: "انتخاب انبار الزامی است" })}
      >
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
      {errors.warehouse && (
        <p className="text-destructive text-sm mt-1">
          {errors.warehouse.message}
        </p>
      )}
    </div>
  );
};

export default WarehouseSelect;
