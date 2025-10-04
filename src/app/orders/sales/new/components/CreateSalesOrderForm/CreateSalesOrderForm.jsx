"use client";

import { useForm, FormProvider } from "react-hook-form";

export default function CreateSalesOrderForm() {
  const methods = useForm({
    defaultValues: {},
  });

  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log("🧾 اطلاعات سفارش فروش:", data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-6 max-w-4xl mx-auto bg-card p-8 rounded-lg"
      ></form>
    </FormProvider>
  );
}
