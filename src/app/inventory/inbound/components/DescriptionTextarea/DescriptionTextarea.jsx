import React from "react";
import { Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const DescriptionTextarea = ({
  control,
  name = "description",
  rules,
  label = "توضیحات",
  placeholder = "در صورت نیاز توضیح وارد کنید",
  disabled = false,
  className = "border rounded-md p-2 text-sm w-full",
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
            <Textarea
              id={name}
              {...field}
              placeholder={placeholder}
              disabled={disabled}
              className={className}
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

export default DescriptionTextarea;
