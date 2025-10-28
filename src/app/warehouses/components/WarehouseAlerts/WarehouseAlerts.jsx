function WarehouseAlerts() {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-[var(--color-foreground)] mb-3">
        هشدارهای موجودی کم
      </h2>
      <table className="w-full text-right border border-border rounded-lg">
        <thead className="bg-muted text-muted-foreground">
          <tr>
            <th className="p-2 border-b">نام قطعه</th>
            <th className="p-2 border-b">نام انبار</th>
            <th className="p-2 border-b">موجودی فعلی</th>
            <th className="p-2 border-b">حداقل موجودی</th>
            <th className="p-2 border-b">اقدامات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border-b">قطعه ۱</td>
            <td className="p-2 border-b">انبار الف</td>
            <td className="p-2 border-b">5</td>
            <td className="p-2 border-b">10</td>
            <td className="p-2 border-b">
              <button className="text-primary underline">مشاهده</button>
            </td>
          </tr>
          <tr>
            <td className="p-2 border-b">قطعه ۲</td>
            <td className="p-2 border-b">انبار ب</td>
            <td className="p-2 border-b">2</td>
            <td className="p-2 border-b">5</td>
            <td className="p-2 border-b">
              <button className="text-primary underline">مشاهده</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WarehouseAlerts;
