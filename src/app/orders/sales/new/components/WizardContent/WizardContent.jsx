import { useFormContext } from "react-hook-form";
import CustomerInformationStep from "../steps/CustomerInformationStep/CustomerInformationStep";
import SelectProductsStep from "../steps/SelectProductsStep/SelectProductsStep";
import SalesOrderSummarStep from "../steps/SalesOrderSummarStep/SalesOrderSummarStep";

function WizardContent({ step, nextStep, prevStep, onSubmit }) {
  const { trigger, handleSubmit, formState } = useFormContext();
  const { isSubmitting } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="max-w-4xl mx-auto p-6">
        {step === 1 && <SelectProductsStep />}
        {step === 2 && <CustomerInformationStep />}
        {step === 3 && <SalesOrderSummarStep />}

        <div className="flex justify-start gap-3 mt-10">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-foreground)] bg-transparent hover:bg-[var(--color-muted)] hover:text-[var(--color-muted-foreground)] shadow-sm transition-all duration-200"
            >
              ▶ مرحله قبل
            </button>
          )}

          {step < 3 && (
            <button
              type="button"
              onClick={async () => {
                const valid = await trigger();
                if (valid) nextStep();
              }}
              className="px-6 py-2 rounded-lg border border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-transparent hover:text-[var(--color-primary)] shadow-md transition-all duration-200"
            >
              مرحله بعد◀
            </button>
          )}
          {step === 3 && (
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 rounded-lg border border-[var(--color-primary)] shadow-md transition-all duration-200
                ${
                  isSubmitting
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-transparent hover:text-[var(--color-primary)]"
                }`}
            >
              {isSubmitting ? "⏳ در حال ثبت..." : "✅ ثبت سفارش"}
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

export default WizardContent;
