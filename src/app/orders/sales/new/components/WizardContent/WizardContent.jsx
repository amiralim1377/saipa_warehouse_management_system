import { useFormContext } from "react-hook-form";
import CustomerInformationPage from "../../customer/page";
import SelectProductsPage from "../../products/page";
import SalesOrderSummaryPage from "../../summary/page";

function WizardContent({ step, nextStep, prevStep, onSubmit }) {
  const { trigger } = useFormContext();

  return (
    <div className="max-w-4xl mx-auto p-6">
      {step === 1 && <SelectProductsPage />}
      {step === 2 && <CustomerInformationPage />}
      {step === 3 && <SalesOrderSummaryPage />}

      <div className="flex justify-start gap-3 mt-10">
        {step > 1 && (
          <button
            onClick={prevStep}
            className="px-6 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-foreground)] bg-transparent hover:bg-[var(--color-muted)] hover:text-[var(--color-muted-foreground)] shadow-sm transition-all duration-200"
          >
            ▶ مرحله قبل
          </button>
        )}

        {step < 3 && (
          <button
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
            onClick={async () => {
              const valid = await trigger();
              if (valid && onSubmit) {
                onSubmit();
              }
            }}
            className="px-6 py-2 rounded-lg border border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-transparent hover:text-[var(--color-primary)] shadow-md transition-all duration-200"
          >
            ✅ ثبت سفارش
          </button>
        )}
      </div>
    </div>
  );
}

export default WizardContent;
