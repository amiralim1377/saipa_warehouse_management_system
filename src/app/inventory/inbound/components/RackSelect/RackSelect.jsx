import React from "react";
import { Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export function RackSelect({
  control,
  name = "rack",
  racks,
  racksLoading,
  rules,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div>
          <Label htmlFor={name}>رک</Label>
          <Select
            {...field}
            onValueChange={(val) => field.onChange(val)}
            disabled={racksLoading || !racks?.length}
          >
            <SelectTrigger id={name} className="w-full">
              <SelectValue placeholder="انتخاب رک" />
            </SelectTrigger>
            <SelectContent>
              {[...racks]
                .sort((a, b) => {
                  const numA = parseInt(a.name.replace(/\D/g, ""), 10);
                  const numB = parseInt(b.name.replace(/\D/g, ""), 10);
                  return numA - numB;
                })
                .map((rack) => (
                  <SelectItem key={rack.id} value={rack.id}>
                    {rack.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
          {fieldState.error && (
            <p className="text-destructive text-sm mt-1">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
}
