import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";

const StatusSelect = ({
  control,
  errors,
  options,
  rules,
  placeholder = "وضعیت قطعه",
}) => {
  return (
    <div>
      <Label htmlFor="status">وضعیت</Label>

      <Controller
        name="status"
        control={control}
        rules={rules || { required: "وضعیت الزامی است" }}
        render={({ field, fieldState }) => (
          <>
            <Select onValueChange={field.onChange} value={field.value ?? ""}>
              <SelectTrigger id="status" className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {fieldState.error && (
              <p className="text-destructive text-sm mt-1">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default StatusSelect;
