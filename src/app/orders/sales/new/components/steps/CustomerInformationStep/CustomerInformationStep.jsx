"use client";
import CustomerDetailsCard from "../../CustomerDetailsCard/CustomerDetailsCard";
import { useOrder } from "../../../context/OrderContext";
import useCustomers from "../../../hook/useCustomers/useCustomers";
import NoCustomers from "@/components/NoCustomers/NoCustomers";
import { useFormContext, useWatch } from "react-hook-form";
import SelectField from "@/components/Form/SelectField/SelectField";
import { Spinner } from "@/components/ui/spinner";

export default function CustomerInformationStep() {
  const { customers } = useOrder();
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { isPending, error: fetchCustomersError } = useCustomers();

  const selectedCustomerId = useWatch({ control, name: "customer.id" });
  const selectedCustomer = customers.find((c) => c.id === selectedCustomerId);

  if (isPending) {
    return (
      <div className="flex justify-center items-center py-10">
        <Spinner />
      </div>
    );
  }

  if (!customers || customers.length === 0) {
    return <NoCustomers />;
  }

  const customerOptions = customers.map((c) => ({
    value: c.id,
    label:
      c.customer_type === "حقوقی"
        ? c.company_name
        : `${c.first_name || ""} ${c.last_name || ""}`.trim(),
  }));

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">👤 اطلاعات مشتری</h2>

      <SelectField
        name="customer.id"
        label="نام مشتری"
        control={control}
        errors={{ "customer.id": errors?.customer?.id }}
        options={customerOptions}
        placeholder={isPending ? "در حال بارگذاری..." : "انتخاب مشتری"}
        disabled={isPending || !!fetchCustomersError}
        rules={{ required: "انتخاب مشتری الزامی است" }}
      />

      {selectedCustomer && <CustomerDetailsCard customer={selectedCustomer} />}
    </div>
  );
}
