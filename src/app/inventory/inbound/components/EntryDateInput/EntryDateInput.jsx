"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Controller } from "react-hook-form";

const EntryDateInput = ({ control, errors }) => {
  return (
    <div className="w-full">
      <Label htmlFor="entryDate">تاریخ ورود</Label>

      <Controller
        name="entryDate"
        control={control}
        rules={{ required: "تاریخ ورود الزامی است" }}
        render={({ field }) => (
          <DatePicker
            id="entryDate"
            value={field.value || null}
            onChange={(val) => {
              field.onChange(val?.toDate?.() || null);
            }}
            calendar={persian}
            locale={persian_fa}
            inputClass="border rounded-md text-sm p-2 w-full"
            placeholder="تاریخ را انتخاب کنید"
          />
        )}
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
