import { getSupplierById } from "./services/getSuppliersById";
import Link from "next/link";

async function SuppliersDetailsPage({ params }) {
  const { id } = await params;

  const { message, status, supplier } = await getSupplierById(id);

  if (!status || !supplier) {
    return <p className="text-sm text-muted-foreground mt-4">{message}</p>;
  }

  return (
    <div className="mt-6 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-foreground mb-6 text-center sm:text-right">
        جزئیات تأمین‌کننده: {supplier.name}
      </h2>

      <div className="max-w-4xl mx-auto bg-card text-card-foreground dark:bg-card dark:text-card-foreground shadow-lg rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <p>
            <strong>شناسه:</strong> {supplier.id}
          </p>
          <p>
            <strong>نام:</strong> {supplier.name}
          </p>
          <p>
            <strong>نوع تأمین‌کننده:</strong> {supplier.supplier_type}
          </p>
          <p>
            <strong>شناسه ملی:</strong> {supplier.national_id || "-"}
          </p>
          <p>
            <strong>کد مالیاتی:</strong> {supplier.tax_code || "-"}
          </p>
          <p>
            <strong>شماره تماس:</strong> {supplier.phone || "-"}
          </p>
          <p>
            <strong>ایمیل:</strong> {supplier.email || "-"}
          </p>
          <p>
            <strong>وب‌سایت:</strong> {supplier.website || "-"}
          </p>
          <p>
            <strong>آدرس:</strong> {supplier.address || "-"}
          </p>
          <p>
            <strong>شماره حساب:</strong> {supplier.bank_account || "-"}
          </p>
          <p>
            <strong>اعتبار:</strong> {supplier.credit_limit || "-"}
          </p>
          <p>
            <strong>شرایط پرداخت:</strong> {supplier.payment_terms || "-"}
          </p>
          <p>
            <strong>وضعیت:</strong> {supplier.status ? "فعال" : "غیرفعال"}
          </p>
          <p>
            <strong>یادداشت‌ها:</strong> {supplier.notes || "-"}
          </p>
          <p>
            <strong>تاریخ ثبت:</strong>{" "}
            {supplier.created_at
              ? new Date(supplier.created_at).toLocaleDateString("fa-IR")
              : "-"}
          </p>
          <p>
            <strong>آخرین بروزرسانی:</strong>{" "}
            {supplier.updated_at
              ? new Date(supplier.updated_at).toLocaleDateString("fa-IR")
              : "-"}
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
          <Link
            href="/suppliers/details"
            className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-center hover:bg-accent hover:text-accent-foreground transition"
          >
            بازگشت
          </Link>
          <Link
            href={`/suppliers/edit/${supplier.id}`}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-center hover:bg-primary-foreground hover:text-primary transition"
          >
            ویرایش
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SuppliersDetailsPage;
