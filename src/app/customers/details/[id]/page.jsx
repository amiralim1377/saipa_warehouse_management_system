import Link from "next/link";
import getTargetCustomers from "../../services/getTargetCustomers";

async function CustomersDetailsPage({ params }) {
  const { id } = await params;

  const customer = await getTargetCustomers(id);

  if (!customer) {
    return (
      <p className="text-sm text-muted-foreground mt-4">
        مشتری مورد نظر یافت نشد.
      </p>
    );
  }

  return (
    <div className="mt-6 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-foreground mb-6 text-center sm:text-right">
        جزئیات مشتری:{" "}
        {customer.company_name
          ? customer.company_name
          : `${customer.first_name || ""} ${customer.last_name || ""}`}
      </h2>

      <div className="max-w-4xl mx-auto bg-card text-card-foreground dark:bg-card dark:text-card-foreground shadow-lg rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <p>
            <strong>شناسه:</strong> ...{customer.id.slice(-4)}
          </p>
          <p>
            <strong>نوع مشتری:</strong>{" "}
            {customer.customer_type === "company" ? "حقوقی" : "حقیقی"}
          </p>
          <p>
            <strong>نام / شرکت:</strong>{" "}
            {customer.company_name
              ? customer.company_name
              : `${customer.first_name || ""} ${customer.last_name || ""}`}
          </p>
          <p>
            <strong>کد ملی / ثبت:</strong>{" "}
            {customer.company_registration_number ||
              customer.national_id ||
              "-"}
          </p>
          <p>
            <strong>شماره تماس:</strong> {customer.phone || "-"}
          </p>
          <p>
            <strong>ایمیل:</strong> {customer.email || "-"}
          </p>
          <p>
            <strong>استان:</strong> {customer.province || "-"}
          </p>
          <p>
            <strong>شهر:</strong> {customer.city || "-"}
          </p>
          <p>
            <strong>آدرس:</strong> {customer.address || "-"}
          </p>
          <p>
            <strong>کدپستی:</strong> {customer.postal_code || "-"}
          </p>
          <p>
            <strong>یادداشت‌ها:</strong> {customer.notes || "-"}
          </p>
          <p>
            <strong>تاریخ ایجاد:</strong>{" "}
            {customer.created_at
              ? new Date(customer.created_at).toLocaleDateString("fa-IR")
              : "-"}
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
          <Link
            href="/customers"
            className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-center hover:bg-accent hover:text-accent-foreground transition"
          >
            بازگشت
          </Link>
          <Link
            href={`/customers/edit/${customer.id}`}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-center hover:bg-primary-foreground hover:text-primary transition"
          >
            ویرایش
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CustomersDetailsPage;
