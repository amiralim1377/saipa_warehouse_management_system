"use client";
function SupplierPartsTable() {
  const suppliers = [
    {
      id: 1,
      name: "تأمین‌کننده ۱",
      parts: [
        {
          id: 1,
          name: "قطعه A",
          category: "غذای اصلی",
          quantity: 10,
          lowStock: false,
        },
        {
          id: 2,
          name: "قطعه B",
          category: "نوشیدنی",
          quantity: 2,
          lowStock: true,
        },
      ],
    },
    {
      id: 2,
      name: "تأمین‌کننده ۲",
      parts: [
        {
          id: 3,
          name: "قطعه C",
          category: "دسر",
          quantity: 15,
          lowStock: false,
        },
      ],
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-[var(--color-foreground)] mb-4">
        قطعات تأمین‌شده توسط تأمین‌کنندگان
      </h2>

      {suppliers.map((sup) => (
        <div key={sup.id} className="mb-6 border border-border rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-2">{sup.name}</h3>
          <table className="w-full text-right border border-border rounded-lg">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="p-2 border-b">نام قطعه</th>
                <th className="p-2 border-b">دسته‌بندی</th>
                <th className="p-2 border-b">تعداد موجود</th>
                <th className="p-2 border-b">وضعیت موجودی</th>
              </tr>
            </thead>
            <tbody>
              {sup.parts.map((part) => (
                <tr
                  key={part.id}
                  className={part.lowStock ? "bg-destructive/10" : ""}
                >
                  <td className="p-2 border-b">{part.name}</td>
                  <td className="p-2 border-b">{part.category}</td>
                  <td className="p-2 border-b">{part.quantity}</td>
                  <td className="p-2 border-b">
                    {part.lowStock ? "کمتر از حداقل" : "موجود"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default SupplierPartsTable;
