import Link from "next/link";

function CustomersList({ customers }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-foreground mb-3">
        لیست مشتریان
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-[700px] w-full text-right border border-border rounded-lg">
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="p-2 border-b">شناسه</th>
              <th className="p-2 border-b">نوع</th>
              <th className="p-2 border-b">نام / شرکت</th>
              <th className="p-2 border-b">کد ملی / ثبت</th>
              <th className="p-2 border-b">تلفن</th>
              <th className="p-2 border-b">شهر</th>
              <th className="p-2 border-b">تاریخ ثبت</th>
              <th className="p-2 border-b">جزئیات</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id}>
                <td className="p-2 border-b font-mono">...{c.id.slice(-4)}</td>
                <td className="p-2 border-b">
                  {c.customer_type === "company" ? "حقوقی" : "حقیقی"}
                </td>
                <td className="p-2 border-b">
                  {c.company_name ||
                    `${c.first_name || ""} ${c.last_name || ""}`}
                </td>
                <td className="p-2 border-b">
                  {c.company_registration_number || c.national_id || "-"}
                </td>
                <td className="p-2 border-b">{c.phone}</td>
                <td className="p-2 border-b">{c.city || "-"}</td>
                <td className="p-2 border-b">
                  {c.created_at
                    ? new Date(c.created_at).toLocaleDateString("fa-IR")
                    : "-"}
                </td>
                <td className="p-2 border-b">
                  <Link
                    href={`/customers/orders/${c.id}`}
                    className="bg-muted text-muted-foreground px-3 py-1 rounded-lg"
                  >
                    سوابق خرید
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomersList;
