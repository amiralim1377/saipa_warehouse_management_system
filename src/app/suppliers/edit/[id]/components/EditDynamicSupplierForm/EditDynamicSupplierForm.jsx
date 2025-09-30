"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import TextInputField from "@/components/Form/TextInputField/TextInputField";
import TextareaField from "@/components/Form/TextareaField/TextareaField";
import NumberInputField from "@/components/Form/NumberInputField/NumberInputField";
import SelectField from "@/components/Form/SelectField/SelectField";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { updateSupplier } from "../../actions/updateSupplier";

function EditDynamicSupplierForm({ targetSupplier }) {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
    reset,
  } = useForm({
    defaultValues: {
      name: targetSupplier?.name || "",
      supplier_type: targetSupplier?.supplier_type || "",
      national_id: targetSupplier?.national_id || "",
      tax_code: targetSupplier?.tax_code || "",
      phone: targetSupplier?.phone || "",
      email: targetSupplier?.email || "",
      address: targetSupplier?.address || "",
      website: targetSupplier?.website || "",
      bank_account: targetSupplier?.bank_account || "",
      credit_limit: targetSupplier?.credit_limit || "",
      payment_terms: targetSupplier?.payment_terms || "",
      status: targetSupplier?.status ? "true" : "false",
      notes: targetSupplier?.notes || "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await updateSupplier(targetSupplier.id, data);
      if (res.status === 200) {
        toast.success(res.message);
        reset();
        router.replace("/suppliers");
      } else {
        throw new Error(res.message);
      }
    } catch (err) {
      console.error("خطا در ویرایش تأمین‌کننده:", err);
      toast.error(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-2xl mx-auto p-6"
      dir="rtl"
    >
      <TextInputField
        id="name"
        label="نام تأمین‌کننده"
        placeholder="نام تأمین‌کننده را وارد کنید"
        register={register}
        rules={{
          required: "نام الزامی است",
          minLength: { value: 3, message: "حداقل ۳ کاراکتر وارد کنید" },
          maxLength: { value: 255, message: "حداکثر ۲۵۵ کاراکتر مجاز است" },
        }}
        errors={errors}
      />

      <SelectField
        name="supplier_type"
        label="نوع تأمین‌کننده"
        options={[
          { value: "individual", label: "حقیقی" },
          { value: "company", label: "حقوقی" },
        ]}
        control={control}
        rules={{ required: "نوع تأمین‌کننده الزامی است" }}
        errors={errors}
        placeholder="انتخاب کنید"
      />

      <TextInputField
        id="national_id"
        label="کد/شناسه ملی"
        placeholder="مثلاً 1234567890"
        register={register}
        rules={{
          required: "کد/شناسه ملی الزامی است",
          minLength: { value: 8, message: "حداقل ۸ رقم" },
          maxLength: { value: 12, message: "حداکثر ۱۲ رقم" },
          pattern: {
            value: /^[0-9]+$/,
            message: "فقط عدد مجاز است",
          },
        }}
        errors={errors}
      />

      <TextInputField
        id="tax_code"
        label="کد اقتصادی"
        placeholder="کد اقتصادی تأمین‌کننده"
        register={register}
        rules={{
          required: "کد اقتصادی الزامی است",
          maxLength: { value: 50, message: "حداکثر ۵۰ کاراکتر مجاز است" },
        }}
        errors={errors}
      />

      <TextInputField
        id="phone"
        label="شماره تماس"
        placeholder="مثلاً 09123456789"
        register={register}
        rules={{
          required: "شماره تماس الزامی است",
          pattern: {
            value: /^09\d{9}$/,
            message: "شماره موبایل معتبر وارد کنید",
          },
        }}
        errors={errors}
      />

      <TextInputField
        id="email"
        type="email"
        label="ایمیل"
        placeholder="مثلاً example@mail.com"
        register={register}
        rules={{
          required: "ایمیل الزامی است",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "ایمیل وارد شده معتبر نیست",
          },
        }}
        errors={errors}
      />

      <TextareaField
        id="address"
        label="آدرس"
        placeholder="آدرس تأمین‌کننده"
        register={register}
        rules={{
          required: "آدرس الزامی است",
          maxLength: { value: 500, message: "حداکثر ۵۰۰ کاراکتر مجاز است" },
        }}
        errors={errors}
      />

      <TextInputField
        id="website"
        label="وبسایت"
        placeholder="مثلاً https://example.com"
        register={register}
        rules={{
          required: "آدرس وبسایت الزامی است",
          pattern: {
            value: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
            message: "آدرس وبسایت معتبر نیست",
          },
        }}
        errors={errors}
      />

      <TextInputField
        id="bank_account"
        label="شماره حساب بانکی"
        placeholder="مثلاً 6037991234567890"
        register={register}
        rules={{
          required: "شماره حساب بانکی الزامی است",
          minLength: { value: 10, message: "حداقل ۱۰ رقم" },
          maxLength: { value: 50, message: "حداکثر ۵۰ رقم" },
          pattern: {
            value: /^[0-9]+$/,
            message: "فقط عدد مجاز است",
          },
        }}
        errors={errors}
      />

      <NumberInputField
        id="credit_limit"
        label="سقف اعتبار"
        placeholder="مثلاً 5000000"
        register={register}
        rules={{
          required: "سقف اعتبار الزامی است",
          valueAsNumber: true,
          min: { value: 0, message: "نمی‌تواند منفی باشد" },
          max: {
            value: 1000000000,
            message: "حداکثر مقدار مجاز ۱ میلیارد است",
          },
        }}
        errors={errors}
      />

      <TextInputField
        id="payment_terms"
        label="شرایط پرداخت"
        placeholder="مثلاً 30 روزه"
        register={register}
        rules={{
          required: "شرایط پرداخت الزامی است",
          maxLength: { value: 50, message: "حداکثر ۵۰ کاراکتر مجاز است" },
          minLength: { value: 2, message: "حداقل ۲ کاراکتر وارد کنید" },
          pattern: {
            value: /^[\u0600-\u06FFa-zA-Z0-9\s]+$/,
            message: "فقط حروف، اعداد و فاصله مجاز است",
          },
        }}
        errors={errors}
      />

      <SelectField
        name="status"
        label="وضعیت"
        control={control}
        options={[
          { value: "true", label: "فعال" },
          { value: "false", label: "غیرفعال" },
        ]}
        rules={{ required: "انتخاب وضعیت الزامی است" }}
        errors={errors}
        placeholder="انتخاب کنید"
      />

      <TextareaField
        id="notes"
        label="توضیحات"
        placeholder="توضیحات اضافی (اختیاری)"
        register={register}
        rules={{
          maxLength: { value: 1000, message: "حداکثر ۱۰۰۰ کاراکتر مجاز است" },
        }}
        errors={errors}
      />

      <Button
        type="submit"
        className="bg-primary text-primary-foreground"
        disabled={isSubmitting}
      >
        {isSubmitting ? "در حال ویرایش..." : "ویرایش"}
      </Button>
    </form>
  );
}

export default EditDynamicSupplierForm;
