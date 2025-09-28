"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function LocationInput({
  register,
  errors,
  rules,
  placeholder,
}) {
  return (
    <div>
      <Label htmlFor="location">مکان</Label>
      <Input
        id="location"
        {...register("location", rules)}
        placeholder={placeholder}
      />

      {errors.location && (
        <p className="text-destructive text-sm mt-1">
          {errors.location.message}
        </p>
      )}
    </div>
  );
}
