"use client";
import OrderFormProvider from "../../provider/OrderFormProvider";
import WizardContent from "../WizardContent/WizardContent";
import useWizard from "../../hook/useWizard/useWizard";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function OrderWizard() {
  const { step, nextStep, prevStep } = useWizard(3);

  const handleSubmit = () => {
    console.log("سفارش با موفقیت ثبت شد!");
  };

  return (
    <OrderFormProvider>
      <ProgressBar step={step} totalSteps={3} />

      <WizardContent
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        onSubmit={handleSubmit}
      />
    </OrderFormProvider>
  );
}
