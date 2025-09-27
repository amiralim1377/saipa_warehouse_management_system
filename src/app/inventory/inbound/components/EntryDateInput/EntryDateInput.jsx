import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const EntryDateInput = ({ register, errors }) => {
  return (
    <div>
      <Label htmlFor="entryDate">تاریخ ورود</Label>
      <Input
        id="entryDate"
        type="date"
        {...register("entryDate", { required: "تاریخ ورود الزامی است" })}
      />
      {errors.entryDate && (
        <p className="text-destructive text-sm mt-1">
          {errors.entryDate.message}
        </p>
      )}
    </div>
  );
};

export default EntryDateInput;
