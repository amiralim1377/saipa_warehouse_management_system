"use client";
import { useState } from "react";
import OrderFormProvider from "../../provider/OrderFormProvider";
import WizardContent from "../WizardContent/WizardContent";
import { useOrder } from "../../context/OrderContext";
import { getSearchProducts } from "@/services/getSearchProducts";

export default function OrderWizard() {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <OrderFormProvider>
      <WizardContent step={step} nextStep={nextStep} prevStep={prevStep} />
    </OrderFormProvider>
  );
}
