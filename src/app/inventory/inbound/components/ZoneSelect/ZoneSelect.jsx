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

export function ZoneSelect({
  control,
  name = "zone",
  zones,
  zonesLoading,
  rules,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div>
          <Label htmlFor={name}>زون</Label>
          <Select
            {...field}
            onValueChange={(val) => field.onChange(val)}
            disabled={zonesLoading || !zones?.length}
          >
            <SelectTrigger id={name} className="w-full">
              <SelectValue placeholder="انتخاب زون" />
            </SelectTrigger>
            <SelectContent>
              {zones.map((zone) => (
                <SelectItem key={zone.id} value={zone.id}>
                  {zone.name}
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
