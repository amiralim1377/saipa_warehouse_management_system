"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Controller } from "react-hook-form";
import "./style.css";

const DateInput = ({ name, label, control, errors, rules, placeholder }) => {
  return (
    <div className="w-full">
      <Label htmlFor={name} className={"mb-1 block"}>
        {label}
      </Label>

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <DatePicker
            id={name}
            value={field.value || null}
            containerClassName="custom-container"
            onChange={(val) => {
              field.onChange(val?.toDate?.() || null);
            }}
            calendar={persian}
            locale={persian_fa}
            inputClass="border rounded-md text-sm p-2 w-full"
            placeholder={placeholder || "تاریخ را انتخاب کنید"}
          />
        )}
      />

      {errors?.[name] && (
        <p className="text-destructive text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default DateInput;
