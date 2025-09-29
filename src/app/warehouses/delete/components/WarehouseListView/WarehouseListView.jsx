import { Button } from "@/components/ui/button";
import DeleteWarehouseButton from "../DeleteWarehouseButton/DeleteWarehouseButton";

function WarehouseListView({ warehouses }) {
  return (
    <div className="mt-6 p-4">
      <h2 className="text-lg font-semibold text-[var(--color-foreground)] mb-3">
        لیست انبارها
      </h2>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-right border-collapse text-sm sm:text-base">
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="p-2 border-b">نام انبار</th>
              <th className="p-2 border-b">مکان</th>
              <th className="p-2 border-b hidden sm:table-cell">ظرفیت</th>
              <th className="p-2 border-b hidden md:table-cell">
                حداقل موجودی
              </th>
              <th className="p-2 border-b hidden lg:table-cell">تاریخ ایجاد</th>
              <th className="p-2 border-b">اقدامات</th>
            </tr>
          </thead>
          <tbody>
            {warehouses.map((wh) => (
              <tr key={wh.id} className="hover:bg-muted/40 transition-colors">
                <td className="p-2 border-b">{wh.name}</td>
                <td className="p-2 border-b">{wh.location}</td>
                <td className="p-2 border-b hidden sm:table-cell">
                  {wh.capacity}
                </td>
                <td className="p-2 border-b hidden md:table-cell">
                  {wh.min_stock}
                </td>
                <td className="p-2 border-b hidden lg:table-cell">
                  {new Date(wh.created_at).toLocaleDateString("fa-IR")}
                </td>
                <td className="p-2 border-b">
                  <DeleteWarehouseButton warehouseId={wh.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WarehouseListView;
