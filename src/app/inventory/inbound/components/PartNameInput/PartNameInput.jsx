import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const PartNameInput = ({ register, errors }) => {
  return (
    <div>
      <Label htmlFor="partName">نام قطعه</Label>
      <Input
        id="partName"
        {...register("partName", { required: "نام قطعه الزامی است" })}
        placeholder="نام قطعه"
      />
      {errors.partName && (
        <p className="text-destructive text-sm mt-1">
          {errors.partName.message}
        </p>
      )}
    </div>
  );
};

export default PartNameInput;
