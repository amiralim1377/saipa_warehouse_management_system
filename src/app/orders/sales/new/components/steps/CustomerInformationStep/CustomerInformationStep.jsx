"use client";
import { useFormContext } from "react-hook-form";

export default function CustomerInformationStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">👤 اطلاعات مشتری</h2>
      {/* نام مشتری */}
      <div className="mb-2">
        <input
          type="text"
          placeholder="نام مشتری"
          className="w-full px-3 py-2 border rounded"
          {...register("customer.name", { required: "نام مشتری الزامی است" })}
        />
        {errors.customer?.name && (
          <p className="text-destructive text-sm mt-1">
            {errors.customer.name.message}
          </p>
        )}
      </div>
      {/* ایمیل */}
      <div className="mb-2">
        <input
          type="email"
          placeholder="ایمیل"
          className="w-full px-3 py-2 border rounded"
          {...register("customer.email", {
            required: "ایمیل الزامی است",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "ایمیل معتبر نیست",
            },
          })}
        />
        {errors.customer?.email && (
          <p className="text-destructive text-sm mt-1">
            {errors.customer.email.message}
          </p>
        )}
      </div>
      {/* تلفن */}
      <div className="mb-2">
        <input
          type="text"
          placeholder="تلفن"
          className="w-full px-3 py-2 border rounded"
          {...register("customer.phone", {
            required: "شماره تلفن الزامی است",
            pattern: {
              value: /^[0-9]{10,15}$/,
              message: "شماره تلفن معتبر نیست",
            },
          })}
        />
        {errors.customer?.phone && (
          <p className="text-destructive text-sm mt-1">
            {errors.customer.phone.message}
          </p>
        )}
      </div>
    </div>
  );
}
