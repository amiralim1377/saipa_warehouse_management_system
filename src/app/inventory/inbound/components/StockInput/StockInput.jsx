import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const StockInput = ({ register, errors }) => {
  return (
    <div>
      <Label htmlFor="stock">تعداد</Label>
      <Input
        id="stock"
        type="number"
        {...register("stock", {
          required: "تعداد الزامی است",
          min: { value: 1, message: "تعداد باید حداقل 1 باشد" },
        })}
        placeholder="تعداد وارد شده"
      />
      {errors.stock && (
        <p className="text-destructive text-sm mt-1">{errors.stock.message}</p>
      )}
    </div>
  );
};

export default StockInput;
