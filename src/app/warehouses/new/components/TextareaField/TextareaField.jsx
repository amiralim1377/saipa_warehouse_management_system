import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const TextareaField = ({ id, label, placeholder, register, errors }) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Textarea id={id} placeholder={placeholder} {...register(id)} />
      {errors?.[id] && (
        <p className="text-destructive text-sm mt-1">{errors[id].message}</p>
      )}
    </div>
  );
};

export default TextareaField;
