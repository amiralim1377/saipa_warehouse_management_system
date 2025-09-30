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
import { useRouter } from "next/navigation";
import { useProvinceCity } from "@/app/customers/new/hook/useProvinceCity";
import { updateCustomer } from "../../actions/updateCustomer";
import { toast } from "react-toastify";

function EditDynamicCustomerForm({ targetCustomer }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      customer_type: targetCustomer.customer_type || "",
      first_name: targetCustomer.first_name || "",
      last_name: targetCustomer.last_name || "",
      national_id: targetCustomer.national_id || "",
      company_name: targetCustomer.company_name || "",
      company_registration_number:
        targetCustomer.company_registration_number || "",
      phone: targetCustomer.phone || "",
      email: targetCustomer.email || "",
      province: targetCustomer.province || "",
      city: targetCustomer.city || "",
      address: targetCustomer.address || "",
      postal_code: targetCustomer.postal_code || "",
      notes: targetCustomer.notes || "",
    },
  });

  const customerType = useWatch({
    control,
    name: "customer_type",
  });

  const { selectedProvince, cities } = useProvinceCity({
    control,
    provinces,
  });

  const onSubmit = async (data) => {
    try {
      await updateCustomer(targetCustomer.id, data);
      toast.success("مشتری با موفقیت ویرایش شد.");

      router.replace("/customers");
    } catch (err) {
      console.error(err);
      toast.error(`خطا در بروزرسانی مشتری: ${err.message}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-6 space-y-4 max-w-lg mx-auto"
    >
      <h1 className="text-2xl font-semibold text-foreground mb-6">
        ویرایش مشتری
      </h1>

      <Controller
        name="customer_type"
        control={control}
        rules={{ required: "انتخاب نوع مشتری الزامی است" }}
        render={({ field, fieldState }) => (
          <div className="w-full">
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full flex-row-reverse justify-between text-right">
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
            {...register("first_name", { required: "نام الزامی است" })}
            placeholder="نام"
          />
          {errors.first_name && (
            <p className="text-destructive text-sm">
              {errors.first_name.message}
            </p>
          )}

          <Input
            {...register("last_name", { required: "نام خانوادگی الزامی است" })}
            placeholder="نام خانوادگی"
          />
          {errors.last_name && (
            <p className="text-destructive text-sm">
              {errors.last_name.message}
            </p>
          )}

          <Input
            {...register("national_id", { required: "کد ملی الزامی است" })}
            placeholder="کد ملی"
          />
          {errors.national_id && (
            <p className="text-destructive text-sm">
              {errors.national_id.message}
            </p>
          )}
        </>
      )}

      {customerType === "company" && (
        <>
          <Input
            {...register("company_name", { required: "نام شرکت الزامی است" })}
            placeholder="نام شرکت"
          />
          {errors.company_name && (
            <p className="text-destructive text-sm">
              {errors.company_name.message}
            </p>
          )}

          <Input
            {...register("company_registration_number", {
              required: "شماره ثبت شرکت الزامی است",
            })}
            placeholder="شماره ثبت شرکت"
          />
          {errors.company_registration_number && (
            <p className="text-destructive text-sm">
              {errors.company_registration_number.message}
            </p>
          )}
        </>
      )}

      <Input
        {...register("phone", { required: "شماره تماس الزامی است" })}
        placeholder="شماره تماس"
        type="tel"
        className={"text-right"}
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
              <SelectTrigger className="w-full flex-row-reverse justify-between text-right">
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

      <Controller
        name="city"
        control={control}
        rules={{ required: "انتخاب شهر الزامی است" }}
        render={({ field, fieldState }) => (
          <div className="w-full">
            <Select
              value={field.value}
              onValueChange={field.onChange}
              disabled={!selectedProvince}
            >
              <SelectTrigger className="w-full flex-row-reverse justify-between text-right">
                <SelectValue placeholder="شهر" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city, i) => (
                  <SelectItem key={i + 1} value={city}>
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
        {...register("postal_code", { required: "کد پستی الزامی است" })}
        placeholder="کد پستی"
      />
      {errors.postal_code && (
        <p className="text-destructive text-sm mt-1">
          {errors.postal_code.message}
        </p>
      )}

      <Textarea {...register("notes")} placeholder="توضیحات اختیاری" />

      <Button type="submit">ویرایش مشتری</Button>
    </form>
  );
}

export default EditDynamicCustomerForm;
