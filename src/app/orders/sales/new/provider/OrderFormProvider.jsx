"use client";
import { useForm, FormProvider } from "react-hook-form";

export default function OrderFormProvider({ children }) {
  const methods = useForm({
    defaultValues: {
      items: [],
      customer: {},
      notes: "",
    },
    mode: "onChange",
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
}
