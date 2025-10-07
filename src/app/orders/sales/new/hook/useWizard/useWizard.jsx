import { useState } from "react";

function useWizard(totalSteps) {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return { step, nextStep, prevStep };
}

export default useWizard;
