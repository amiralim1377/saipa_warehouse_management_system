"use client";
import React from "react";
import { Building2, User2 } from "lucide-react";

function DetailRow({ label, value, className }) {
  return (
    <div className={`flex justify-between py-1 ${className || ""}`}>
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
      <span
        className={
          value ? "text-sm text-foreground break-all" : "text-sm text-gray-400"
        }
      >
        {value || "-"}
      </span>
    </div>
  );
}

export default function CustomerDetailsCard({ customer }) {
  if (!customer) return null;

  const isLegal = customer.customer_type === "company";

  return (
    <div className="mt-6 rounded-lg border bg-card shadow-md">
      {/* هدر کارت */}
      <div className="border-b px-6 py-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
          {isLegal ? (
            <>
              <Building2 className="w-5 h-5 text-primary" />
              پروفایل شرکت
            </>
          ) : (
            <>
              <User2 className="w-5 h-5 text-primary" />
              پروفایل مشتری حقیقی
            </>
          )}
        </h3>
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${
            isLegal
              ? "bg-primary/10 text-primary"
              : "bg-secondary/10 text-secondary-foreground"
          }`}
        >
          {isLegal ? "حقوقی" : "حقیقی"}
        </span>
      </div>

      {/* بدنه کارت */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-3 px-6 py-5 text-sm">
        {isLegal ? (
          <>
            <DetailRow label="نام شرکت" value={customer.company_name} />
            <DetailRow
              label="شماره ثبت"
              value={customer.company_registration_number}
            />
          </>
        ) : (
          <>
            <DetailRow label="نام" value={customer.first_name} />
            <DetailRow label="نام خانوادگی" value={customer.last_name} />
            <DetailRow label="کد ملی" value={customer.national_id} />
          </>
        )}

        <DetailRow label="ایمیل" value={customer.email} />
        <DetailRow label="تلفن" value={customer.phone} />
        <DetailRow label="استان" value={customer.province} />
        <DetailRow label="شهر" value={customer.city} />
        <DetailRow label="کد پستی" value={customer.postal_code} />

        <div className="col-span-2 border-t pt-3 mt-2">
          <DetailRow label="آدرس" value={customer.address} />
        </div>

        {customer.notes && (
          <div className="col-span-2 border-t pt-3 mt-2">
            <DetailRow label="یادداشت" value={customer.notes} />
          </div>
        )}
      </div>
    </div>
  );
}
