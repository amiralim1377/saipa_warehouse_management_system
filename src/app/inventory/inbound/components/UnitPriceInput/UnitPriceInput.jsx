import React from "react";
import { Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const UnitPriceInput = ({
  control,
  name = "unitPrice",
  errors,
  rules,
  label = "قیمت واحد",
  placeholder = "قیمت واحد",
  disabled = false,
  inputClass = "border rounded-md p-2 text-sm w-full",
}) => {
  return (
    <div className="w-full">
      <Label htmlFor={name}>{label}</Label>

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <Input
              id={name}
              type="number"
              step="0.01"
              placeholder={placeholder}
              {...field}
              disabled={disabled}
              className={inputClass}
            />
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

export default UnitPriceInput;
