"use client";
import OrderFormProvider from "../../provider/OrderFormProvider";
import WizardContent from "../WizardContent/WizardContent";
import useWizard from "../../hook/useWizard/useWizard";
import ProgressBar from "../ProgressBar/ProgressBar";
import { createSalesOrderDraft } from "../../actions/create_sales_order_draft";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function OrderWizard() {
  const { step, nextStep, prevStep } = useWizard(3);
  const router = useRouter();

  const handleSubmit = async (data) => {
    try {
      const result = await createSalesOrderDraft(data);

      if (result.success) {
        toast.success(result.message);

        router.replace("/orders");
      } else {
        toast.error(result.message);
        console.error("خطا:", result.error);
      }
    } catch (err) {
      alert("مشکلی در ارتباط با سرور پیش آمد");
      console.error(err);
    }
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
