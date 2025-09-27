import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const PartCodeInput = ({ register, errors }) => {
  return (
    <div>
      <Label htmlFor="partCode">کد قطعه</Label>
      <Input
        id="partCode"
        {...register("partCode", { required: "کد قطعه الزامی است" })}
        placeholder="کد قطعه"
      />
      {errors.partCode && (
        <p className="text-destructive text-sm mt-1">
          {errors.partCode.message}
        </p>
      )}
    </div>
  );
};

export default PartCodeInput;
