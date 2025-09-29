"use client";
import { useForm, Controller, useWatch } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { provinces } from "@/data/provinces";
import { useProvinceCity } from "../../hook/useProvinceCity";

function CreateCustomerForm() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      customerType: "individual",
    },
  });

  const customerType = useWatch({
    control,
    name: "customerType",
  });

  const onSubmit = (data) => {
    console.log("Customer data:", data);
  };

  const { selectedProvince, cities } = useProvinceCity({ control, provinces });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-6 space-y-4 max-w-lg mx-auto"
    >
      <h1 className="text-2xl font-semibold text-foreground mb-6">
        تعریف مشتری جدید
      </h1>
      <Controller
        name="customerType"
        control={control}
        rules={{ required: "انتخاب نوع مشتری الزامی است" }}
        render={({ field, fieldState }) => (
          <div className="w-full">
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="نوع مشتری" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="individual">حقیقی</SelectItem>
                <SelectItem value="company">حقوقی</SelectItem>
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
      {customerType === "individual" && (
        <>
          <Input
            {...register("firstName", { required: "نام الزامی است" })}
            placeholder="نام"
          />

          {errors.firstName && (
            <p className="text-destructive text-sm">
              {errors.firstName.message}
            </p>
          )}
        </>
      )}
      {customerType === "company" && (
        <>
          <Input
            {...register("companyName", {
              required: "نام شرکت الزامی است",
            })}
            placeholder="نام شرکت"
          />
          {errors.companyName && (
            <p className="text-destructive text-sm">
              {errors.companyName.message}
            </p>
          )}

          <Input
            {...register("companyRegistrationNumber", {
              required: "شماره ثبت شرکت الزامی است",
            })}
            placeholder="شماره ثبت شرکت"
          />
          {errors.companyRegistrationNumber && (
            <p className="text-destructive text-sm">
              {errors.companyRegistrationNumber.message}
            </p>
          )}
        </>
      )}
      {customerType === "individual" && (
        <>
          <Input
            {...register("lastName", { required: "نام خانوادگی الزامی است" })}
            placeholder="نام خانوادگی"
          />
          {errors.lastName && (
            <p className="text-destructive text-sm">
              {errors.lastName.message}
            </p>
          )}
        </>
      )}
      {customerType === "individual" && (
        <>
          <Input
            {...register("nationalId", { required: "کد ملی الزامی است" })}
            placeholder="کد ملی"
          />
          {errors.nationalId && (
            <p className="text-destructive text-sm">
              {errors.nationalId.message}
            </p>
          )}
        </>
      )}
      <Input
        {...register("phone", { required: "شماره موبایل الزامی است" })}
        placeholder="شماره موبایل"
        type="tel"
      />
      {errors.phone && (
        <p className="text-destructive text-sm">{errors.phone.message}</p>
      )}
      <Input
        {...register("email", {
          required: "ایمیل الزامی است",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "ایمیل وارد شده معتبر نیست",
          },
        })}
        placeholder="ایمیل"
        type="email"
      />
      {errors.email && (
        <p className="text-destructive text-sm">{errors.email.message}</p>
      )}
      <Controller
        name="province"
        control={control}
        rules={{ required: "انتخاب استان الزامی است" }}
        render={({ field, fieldState }) => (
          <div className="w-full">
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="استان" />
              </SelectTrigger>
              <SelectContent>
                {provinces.map((prov) => (
                  <SelectItem key={prov.name} value={prov.name}>
                    {prov.name}
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
      {/* انتخاب شهر بر اساس استان */}
      <Controller
        name="city"
        control={control}
        rules={{ required: "انتخاب شهر الزامی است" }}
        render={({ field, fieldState }) => (
          <div className="w-full">
            <Select {...field} disabled={!selectedProvince}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="شهر" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
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
      <Input
        {...register("address", { required: "آدرس الزامی است" })}
        placeholder="آدرس"
      />
      {errors.address && (
        <p className="text-destructive text-sm mt-1">
          {errors.address.message}
        </p>
      )}
      <Input
        {...register("postalCode", { required: "کد پستی الزامی است" })}
        placeholder="کد پستی"
      />
      {errors.postalCode && (
        <p className="text-destructive text-sm mt-1">
          {errors.postalCode.message}
        </p>
      )}{" "}
      <Textarea {...register("notes")} placeholder="توضیحات اختیاری" />
      <Button type="submit">ثبت مشتری</Button>
    </form>
  );
}

export default CreateCustomerForm;
